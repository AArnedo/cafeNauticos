require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes.js')

//!Inicializacion de express
const app = express()
//!Middleware
app.use(cors());
app.use(express.json());


//!Conexion a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log('Error de conexión:', err));

//! Rutas (aún por definir)
app.use('/api', postRoutes)

//!Puerto de escucha
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});