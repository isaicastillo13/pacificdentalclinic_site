import Navbar  from "../ui/NavBar";

function Hero() {
return (
    <section className="flex h-screen flex-col items-center justify-around overflow-hidden p-8 gap-8">
        <Navbar 
            color="text-primary"
            logoColor='logoClinicaDark'
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="self-stretch justify-start text-center">
                <span className="text-primary font-light uppercase text-[40px] md:text-[80px] lg:text-[108px]">
                    PACIFIC{" "}
                </span>
                <span className="bg-gradient-to-r from-primary from-0% via-[#486488] via-60% to-neutralsligth to-90% bg-clip-text font-medium uppercase text-transparent text-[40px] md:text-[80px] lg:text-[108px]">
                    TEAM
                </span>
            </div>
            <p className="w-11/12 justify-start text-center font-light text-[10px] md:text-[12px] lg:text-[16px]">
                Figma ipsum component variant main layer. Flows figma flatten reesizing draft scrolling flows thumbnail scale editor.
            </p>
        </div>
        <img
            className="rounded-3xl"
            src="https://placehold.co/1216x583"
            alt="Pacific Dental Clinic Team"
        />
    </section>
);
}

export default Hero;
