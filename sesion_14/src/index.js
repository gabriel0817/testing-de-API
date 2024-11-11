const express = require('express');
const app = express();

//middlawares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//rutas
app.use(require('./routes/index'));

app.listen(3000);
console.log('el servidor esta escuchando en el puerto 3000');