const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require('morgan')

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))


// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
  process.exit(1); // Termina la aplicación si no se puede conectar
});

// // Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});