import React from "react";


function CardTestimonies({ 
  nameClient, 
  message, 
  abreviation}
) {
     // Default abbreviation if not provided
     const flagsContry = {
        US: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/512px-Flag_of_the_United_States.svg.png",
        PAN: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/512px-Flag_of_Panama.svg.png",
     }
    return(
        <figure className="mt-10 p-8">
          <blockquote className="font-semibold text-primary">
            <p className="font-light text-[14px] lg:text-[16px] text-justify">
                {message}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="Bandera del país"
              src={flagsContry[abreviation]}
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <p className="font-semibold text-primary text-[10px] md:text-[12px] lg:text-[16px]">
                {nameClient}
              </p>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-pritext-primary"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              {/* <p className="text-primary text-[10px] md:text-[12px] lg:text-[16px]">CEO of Workcation</p> */}
            </div>
          </figcaption>
        </figure>
    )
}
export default CardTestimonies;