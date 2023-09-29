import React, { useState } from 'react';
import '../css/cards.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Formulario(props) {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState(0);
    const [editar, setEditar] = useState(false);
    const [empleadosList, setEmpleados] = useState([]);

    const registrarUsuario = () => {
        axios.post("http://localhost:3001/registrar", {
            nombre: nombre,
            email: email,
            password: password,
        }).then(() => {
            getUsuarios();
            alert("Empleado registrado");
        });
    }

    const update = () => {
        axios.put("http://localhost:3001/update", {
            id: id,
            nombre: nombre,
            email: email,
            password: password,
        }).then(() => {
            getUsuarios();
            limpiarCampos();
        });
    }

    const getUsuarios = () => {
        axios.get("http://localhost:3001/usuarios").then((response) => {
            setEmpleados(response.data);
        });
    }

    const limpiarCampos = () => {
        setNombre("");
        setEmail("");
        setPassword("");
        setId(0);
        setEditar(false);
    }
     
    const editarUsuario = (val) => {
        setEditar(true);
        setNombre(val.nombre);
        setEmail(val.email);
        setPassword(val.password);
        setId(val.id);
    }

    return (
        <div className="App">
            <div className="datos">
                <label>Nombre: <input onChange={(event) => { setNombre(event.target.value) }} type="text" value={nombre} /></label><br />
                <label>Email: <input onChange={(event) => { setEmail(event.target.value) }} type="text" value={email} /></label><br />
                <label>Password: <input onChange={(event) => { setPassword(event.target.value) }} type="password" value={password} /></label><br />
                {
                    editar ?
                        <div>
                            <button onClick={update}>Actualizar</button>
                            <button onClick={limpiarCampos}>Cancelar</button>
                        </div> :
                        <button onClick={registrarUsuario}>Registrar</button>
                }
            </div>
            <div className="lista">
                <button onClick={getUsuarios}>Listar</button>

            </div>
            <div className="tabla">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Correo eletrónico</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empleadosList.map((val, key) => {
                                return <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.nombre}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>
                                        <div className="inline-flex">
                                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => {
                                                editarUsuario(val)
                                            }}>
                                                Editar
                                            </button>
                                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
