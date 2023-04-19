const express = require('express');
const path = require('path');
const app = express();

const totalProducto= require('./router/totalProducto');

// Configurar la carpeta de vistas y el motor de plantillas
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); // Cambiar el motor de plantillas a ejs

// Habilitar el uso de archivos estáticos
app.use(express.static(path.join(__dirname, 'assets')));

// Analizar las solicitudes con el cuerpo en formato json
app.use(express.json());

// Analizar las solicitudes con el cuerpo codificado en url
app.use(express.urlencoded({ extended: true }));

// Configurar las rutas
app.get('/',(req, res)=>{
    res.render('products');
});

// Enviar la solicitud a la ruta de totalProductoRouter para el método POST
app.use('/totalProducto', totalProducto);


const server = app.listen(8000, function(){
    console.log(`Listening http://localhost:${server.address().port}`);
});
