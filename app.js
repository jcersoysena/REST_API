
//importacion de la libreria de exprres
const express = require('express');
const app = express();
// GET method route
app.get('/', (req, res) => {
    res.send('Prueba 1 Respuestal del servidor');
  })
  
  app.listen(10000);