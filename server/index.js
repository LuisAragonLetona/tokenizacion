const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tokenmall"
});

app.post("/registrar", (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
    const rol = 3;
    db.query('INSERT INTO usuarios(nombre, email, password, rol) VALUES (?,?,?,?)', [nombre, email, password, rol], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Usuario registrado con éxito!!");
        }
    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query('SELECT id, nombre, email, password, rol FROM usuarios WHERE email = ?', [email], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result && result.length > 0) {
                bcrypt.compare(password, result[0].password, function (err, isMatch) {
                    if (err) {
                        console.log(err);
                    } else if (!isMatch) {
                        res.send('Contraseña incorrecta');
                    } else {
                        let user = Object.assign({}, result[0]);
                        delete user.password;
                        res.send(user);
                    }
                });
            } else {
                res.send('Usuario no encontrado');
            }
        }
    });
});

app.get("/usuarios", (req, res) => {
    db.query('SELECT * from usuarios', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    db.query('DELETE from usuarios WHERE id=?', [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    console.log('id es: ' + id);
    db.query('DELETE from usuarios WHERE id=?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001")
})