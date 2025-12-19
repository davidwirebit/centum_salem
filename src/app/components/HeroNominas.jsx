"use client";

import Image from "next/image";

export default function HeroNominas() {
  const scrollToSimulacro = () => {
    const element = document.getElementById('simulacro-adelanto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <div className=" mx-auto   h-screen flex flex-col justify-center px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
          {/* Left Column - Text Content */}
          <div className=" flex flex-col  w-full justify-end items-end ">
            <div className="max-w-[580px]  flex flex-col  gap-[49px]">
              <h1
                className="text-[#212A59] font-poppins text-[50px] font-bold   leading-[124%] tracking-[0px]
"
              >
                Adelanta tu nómina y <br /> recibe una parte
                <br /> de tu sueldo{" "}
                <span
                  className="text-[#FFC600] font-poppins text-[50px] font-bold leading-[62px] tracking-[0px]
"
                >
                  antes <br /> de la fecha de
                  <br /> cobro
                </span>
              </h1>
              <p
                className="text-[#606169] font-inter text-[25px]  font-[400] leading-[132%] tracking-[0px]
"
              >
                Tu dinero cuando más lo necesites. Olvídate de las
                preocupaciones financieras inesperadas. Acceso rápido y fácil a
                tu dinero, justo cuando lo requieres. La libertad de controlar
                tu sueldo en un clic.
              </p>
              <button
                onClick={scrollToSimulacro}
                className="text-[#212A59] text-center font-inter text-[16px] font-bold leading-normal
                rounded-lg border border-[#212A59] bg-[#FFF] w-fit px-8  py-2

"
              >
                Adelanta tu nómina
              </button>
            </div>
          </div>

          {/* Right Column - Image with Blur Background */}
          <div className="h-full  max-h-[600px] flex justify-start items-center">
            {/* Blurred Background */}

            {/* Image */}
            <div className="relative w-fit mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 blur-3xl rounded-full w-[500px] h-[500px] -z-10"></div>
              <Image
                src="/hero-nominas-image.webp"
                alt="Estatuas Image"
                width={800}
                height={800}
                className="transform max-h-[500px] object-contain w-fit mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
