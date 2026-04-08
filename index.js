// aprender a usar express js para crear un servidor web

//instalar express js con npm install express
const express = require('express');

//crear un servidor web con express js
const app = express();

//definir el puerto en el que se ejecutará el servidor web
const PORT = 3000;

//iniciar el servidor web
app.listen(PORT, console.log(`servidor creado: ${PORT}`));

//definir una ruta para el servidor web
app.get('/home', (req, res) => {
    //enviar una respuesta al cliente
    res.send("Hello world express js");
});