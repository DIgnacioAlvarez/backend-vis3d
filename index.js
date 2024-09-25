import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan";

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors')
// const morgan = require('morgan')
import { Product } from './src/schemas/product.js';




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

// const crearProducto = async () => {
//   const impresion = new Product({
//     name: "Godzilla",
//     price: 500,
//     image: "https://fbi.cults3d.com/uploaders/14240276/illustration-file/9667e503-6b50-4e9f-9126-af23308c8845/d0096ec6c83575373e3a21d129ff8fef_display_large.jpg",
//     description: "Estatuilla de Gojira",
//     stock: 2,
//     enable: true,
//     category: "Figuras de acción",
//     dimensions: {
//       height: 15,
//       width: 8,
//       depth: 8
//     }
//   },
  
// );

//   try {
//     await impresion.save();
//     console.log("Producto guardado con éxito");
//   } catch (error) {
//     console.error("Error al guardar el producto:", error);
//   }
// };

// crearProducto()




// // Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

