const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

dotenv.config(); // Cargar las variables de entorno
connectDB(); // Conectar a la base de datos

const app = express();

// Configurar CORS para aceptar solicitudes desde localhost:3000
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://pacificdentalclinic-site-kjhk.vercel.app",
  ], // Cambia este puerto según tu frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

// Middlewares
app.use(cors(corsOptions)); // Usar CORS con opciones
app.use(express.json()); // Middleware para parsear JSON

// Rutas
const testimonialRoutes = require("./routes/testimonialRoutes");
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use("/api", emailRoutes); // Rutas para el envío de correos electrónicos

// Log para verificar si la solicitud está llegando al servidor
app.use((req, res, next) => {
  console.log(`Request received at ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api/testimonios", testimonialRoutes);

// Ruta principal de prueba
app.get("/", (req, res) => {
  res.send("Hola, Mundo!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
