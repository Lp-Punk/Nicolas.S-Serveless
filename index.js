const express = require('express');
const app     = express();

const port = 5000;


app.get('*', (req , res) => {
  console.log('Hola Mundo! Mi Primera Aplicacion Serveless');
  res.send({mensaje: "Emmita en la Web"})
})

app.listen(port, () =>{
  console.log('hola');
})

/*module.exports = app;*/