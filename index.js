// aprender a usar express js para crear un servidor web

//instalar express js con npm install express
const express = require('express');
const fs = require('fs');

//crear un servidor web con express js
const app = express();

//definir el puerto en el que se ejecutará el servidor web
const PORT = 3000;

//configurar express js para que pueda recibir datos en formato json
app.use(express.json());

//iniciar el servidor web
app.listen(PORT, console.log(`servidor creado: ${PORT}`));

//definir una ruta para el servidor web
app.get('/home', (req, res) => {
    //enviar una respuesta al cliente
    res.send("Hello world express js");
});

//definir una ruta para el servidor web
app.get('/', (req, res) => {
    //enviar una respuesta al cliente
    res.send("Hello world index");
});

//mostrar lista de productos en formato json
app.get('/products', (req, res) => {
    //leer el archivo productos.json y enviar su contenido al cliente
    const productos = JSON.parse(fs.readFileSync('./productos.json'));
    //enviar la respuesta al cliente en formato json
    res.json(productos);
});

//mostrar lista de usuarios en formato json
app.get('/usuarios', (req, res) => {
    //leer el archivo usuarios.json y enviar su contenido al cliente
    const usuarios = JSON.parse(fs.readFileSync('./usuarios.json'));
    //enviar la respuesta al cliente en formato json
    res.json(usuarios);
});

//recibir un producto usando post e incorporando req
app.post('/products', (req, res) => {
    //recibir el producto enviado por el cliente
    const producto = req.body;
    //leer el archivo productos.json, agregar el nuevo producto y escribir el archivo nuevamente
    const productos = JSON.parse(fs.readFileSync('./productos.json'));
    //agregar el nuevo producto al array de productos
    productos.push(producto);
    //escribir el archivo productos.json con el nuevo array de productos
    fs.writeFileSync('./productos.json', JSON.stringify(productos));
    //enviar una respuesta al cliente indicando que el producto fue agregado
    res.json(`producto ${producto.name} agregado`);
});