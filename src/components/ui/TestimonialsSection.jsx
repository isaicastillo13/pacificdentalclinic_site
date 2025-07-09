import logoPcd from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";
import Carousel from "./Carousel";
import { FiCircle } from "react-icons/fi";

// Assuming you have a Testimonials.js file that exports the data

const DEFAULT_ITEMS = [
  {
    title: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    abreviation: "USA",
    id: "1",
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
