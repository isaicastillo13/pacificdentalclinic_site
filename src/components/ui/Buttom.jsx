import iconWhatsApp from '../../assets/icons/whatsapp.svg';
function Button() {
  return (
    <button type='button' className="px-4 md:px-5 py-2.5 md:py-3.5 bg-zinc-700 rounded-full inline-flex justify-center items-center overflow-hidden">
      <div className="px-1 md:px-2 flex justify-center items-center">
        <div className="text-center justify-center text-gray-100 text-sm md:text-base font-semibold leading-tight">
          Agendar Cita
        </div>
      </div>
      <div className="w-5 h-5 md:w-6 md:h-6 relative overflow-hidden">
        <img src={iconWhatsApp} alt="" />
      </div>
    </button>
  );
}

export default Button;
