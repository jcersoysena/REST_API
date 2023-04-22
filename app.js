//importacion de la libreria de exprres
const express = require('express');
const app = express();
//se crean la rutas
app.get('/',(req, res)=>{
    res.send('Prueba 1 Respuestal del servidor');
});

app.listen(10000);