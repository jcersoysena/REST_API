
//importacion de la libreria de exprres
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
// GET method route
app.get('/', (req, res) => {
    res.send('Prueba 1 Respuestal del servidor');
  })
  //mongodb+srv://jcer:oP1WpyHTdXwOJRXk@mibd.7ss8add.mongodb.net/?retryWrites=true&w=majority

  //conexion a la BD
  mongoose.connect(mongodb+srv://jcer:oP1WpyHTdXwOJRXk@mibd.7ss8add.mongodb.net/?retryWrites=true&w=majority,
  {useNewUrlParser: true},() =>{
    console.log('si hay conexion a la BD')
  });
  //Primero se configurar como va escuchar el servidor las peticiones

  app.listen(10000);