const mongoose = require('mongoose');

// Definir el esquema del testimonio
const testimonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  // El nombre es obligatorio
    },
    message: {
      type: String,
      required: true,  // El mensaje es obligatorio
    },
    countryAbbreviation: {
      type: String,
      required: true,  // La abreviatura del país es obligatoria
      maxlength: 3,    // La abreviatura debe ser de 2-3 caracteres
    },
  },
  {
    timestamps: true,  // Esto agrega automáticamente `createdAt` y `updatedAt`
  }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema, 'testimonios'); // 'testimonials' es el nombre de la colección en MongoDB

module.exports = Testimonial;
