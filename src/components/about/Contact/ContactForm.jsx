import { useState, useEffect } from "react";
import { FiLoader, FiCheck } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4 m-10 ">
      <div className="grid md:grid-cols-2 md:gap-6 gap-4">
        <div className="relative z-0 w-full grou gap-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-600">
            Nombre completo
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-600">
            Correo electrónico
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder=" "
          className="resize-none block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 text-gray-900 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-600">
          Mensaje
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`flex items-center gap-2 px-6 py-2 rounded text-sm transition
          ${
            status === "success"
              ? "bg-green-600 text-white hover:bg-green-700"
              : status === "error"
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } 
          disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isLoading && <FiLoader className="animate-spin" />}
        {status === "success" && <FiCheck />}
        {isLoading
          ? "Enviando..."
          : status === "success"
          ? "Enviado"
          : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="text-green-600 bg-green-50 p-4 rounded-full text-center text-sm md:text-base">
          Mensaje enviado correctamente ✅
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 bg-red-50 p-4 rounded-full text-center text-sm md:text-base">
          Ocurrió un error al enviar el mensaje ❌
        </p>
      )}
    </form>
  );
}
