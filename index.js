const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const morgan = require('morgan')
const Product = require('./schemas/product.js')



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

const impresion = new Product({
    name: "Godzilla",
    price: 500,
    image: "https://fbi.cults3d.com/uploaders/14240276/illustration-file/9667e503-6b50-4e9f-9126-af23308c8845/d0096ec6c83575373e3a21d129ff8fef_display_large.jpg",
    description: "estatuilla de gojira",
    stock: 2,
    enable: true,
    category: "Figuras de accion",
    dimensions: {
        height: 15,
        width: 8,
        depth:8
    }
})

await impresion.save()

// // Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

