const Testimonial = require('../models/testimonialModel'); // Asegúrate de que el modelo esté bien importado

// Función para agregar un testimonio
const addTestimonial = async (req, res) => {
  const { name, message, countryAbbreviation } = req.body;

  try {
    const savedTestimonials = await Testimonial.insertMany(req.body);

    // Guardar el testimonio en la base de datos
    const savedTestimonial = await newTestimonial.save();

    // Responder con el testimonio guardado
    res.status(201).json(savedTestimonial); // Código 201 indica que se ha creado correctamente
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getTestimonials = async (req, res) => {
    try{
        const testimonial = await Testimonial.find(); // Obtener todos los testimonios
        res.status(200).json(testimonial);
        console.log(testimonial) // Responder con los testimonios encontrados
    }catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports = { addTestimonial, getTestimonials }; // Exporta ambas funciones
