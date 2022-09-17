// const express = require('express'); // sintaxis como comon.js no soporta esta sintaxis de forma nativa
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la db
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => { // en este tipo de funciones siempre tienes el req - lo que mandas al servidor y res lo que nos retorna express, 
    const year = new Date();

    res.locals.ActualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    return next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);   

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});