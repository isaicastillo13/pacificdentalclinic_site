import logoPcd from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";
import Carousel from "./Carousel";
import { FiCircle } from "react-icons/fi";

// Assuming you have a Testimonials.js file that exports the data

const DEFAULT_ITEMS = [
  {
    name: "Rut Davis",
    message:
      "I was in Panama and had tooth pain. I called and got an appointment within a couple of days. It was discovered that my tooth was broken in half. I received a crown lengthening, bonding, and a cleaning—all at a great price. I'm glad this happened in Panama and not at home. When the bonding came off, it was replaced free of charge, with no further issues. The staff and the doctor were very friendly and respectful. I think it's definitely worth returning to Panama for my dental care.",
    abreviation: "US",
    id: "1",
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
  },
  {
    name: "Lew Riggan",
    message:
      "Even though I live in Texas I have traveled several times over quite a few years to this Dental Clinic. I consider Dr. Monica Sheddon an outstanding Dentist and have always",
    abreviation: "US",
    id: "2",
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
  },
  {
    name: "Jena",
    message:
      "Both Drs. Sue and Moises offered thorough, quality service. I was in a lot of pain after an accident and they were able to see me quickly.",
    abreviation: "PAN",
    id: "3",
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
  },
];
function Testimonies({ data }) {
  return (
    <section className=" h-full flex justify-center items-center relative overflow-hidden py-24 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 gap-4">
        <div className="flex flex-col items-center mb-10 gap-10">
          <h2 className="text-center text-primary text-[32px] md:text-[40px] lg:text-[54px] normal-case">
            ¿Somos <b className="font-bold">la mejor clinica</b> dental de
            Panamá ?
          </h2>
        </div>
        <Carousel
          items={data.length > 0 ? data : DEFAULT_ITEMS}
          baseWidth={600}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
        <img
          alt="Pacific Dental Clinic Logo"
          src={logoPcd}
          className="h-12 mx-auto"
        />
      </div>
    </section>
  );
}

export default Testimonies;
