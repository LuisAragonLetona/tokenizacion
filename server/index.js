const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "tokenizacion"
});

app.post("/registrar", (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
    db.query('INSERT INTO usuarios(nombre, email, password) VALUES (?,?,?)', [nombre, email, password], (err, result) => {
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
    db.query('SELECT id, nombre, email FROM usuarios WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
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
    console.log('id es: '+ id);
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