// Define una ruta POST /contact.

// Llama al controlador sendContactEmail cuando esa ruta recibe una solicitud.

const express = require ('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/emailController');


// Ruta para enviar un correo electrónico de contacto
router.post('/contact', sendContactEmail);

module.exports = router;