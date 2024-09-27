import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan";
import router from "./src/routes/index.js"


// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))
app.use(router)


// Conexión a MongoDB
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
  process.exit(1); // Termina la aplicación si no se puede conectar
});


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

