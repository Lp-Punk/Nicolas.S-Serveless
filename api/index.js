const express = require('express');
const app     = express();
/*_V!nQmT_yWtk952*/



app.get('*', (req , res) => {
  console.log('Hola Mundo! Mi Primera Aplicacion Serveless');
  res.send({mensaje: "Emmita en la Web"})
})


module.exports = app;