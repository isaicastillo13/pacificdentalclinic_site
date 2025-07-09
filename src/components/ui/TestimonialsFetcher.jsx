import { useEffect, useState } from "react";
import { FiCircle } from "react-icons/fi";
import Carousel from "./Carousel"; // tu componente
import TestimonialsSection from "./TestimonialsSection"; // Asumiendo que tienes un archivo Testimonials.js que exporta los datos


export default function Testimonials() {
  const [items, setItems] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  
  console.log("Usando API_URL:", API_URL);
  useEffect(() => {
    fetch(`${API_URL}/api/testimonials`)
      .then((res) => res.json())
      .then((data) => {
        const formattedItems = data.map((item) => ({
          id: item._id,
          name: item.name,
          message: item.message,
          abreviation: item.countryAbbreviation,
          icon: <FiCircle className="text-primary" />,
        }));
        setItems(formattedItems);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);
  return <TestimonialsSection data={items} />;
}
