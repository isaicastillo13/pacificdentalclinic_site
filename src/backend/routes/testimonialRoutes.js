const express = require('express');
const { addTestimonial } = require('../controllers/testimonialController');
const router = express.Router();

// Verificar si la ruta está siendo alcanzada
router.post('/add', (req, res) => {
  console.log("Received POST request at /add");
  addTestimonial(req, res);  // Llamar a la función del controlador
});

module.exports = router;
