"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroNominas() {
  const scrollToSimulacro = () => {
    const element = document.getElementById('simulacro-adelanto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-0">
          {/* Left Column - Text Content */}
          <div className="flex flex-col w-full justify-center md:justify-end items-center md:items-end order-2 md:order-1">
            <div className="max-w-[580px] flex flex-col gap-5 md:gap-[29px] py-8 md:py-16 px-4 md:px-0 text-center md:text-left">
              <h1 className="text-white font-manrope text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[124%] tracking-[0px]">
                Adelanta tu nómina y recibe una parte de tu sueldo{" "}
                <span className="text-[#D4A853] font-manrope text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[62px] tracking-[0px]">
                  antes de la fecha de cobro
                </span>
              </h1>
              <p className="text-[#A1A1A6] font-inter text-[16px] md:text-[20px] font-normal leading-[140%] md:leading-[132%] tracking-[0px]">
                Tu dinero cuando más lo necesites. Olvídate de las
                preocupaciones financieras inesperadas. Acceso rápido y fácil a
                tu dinero, justo cuando lo requieres. La libertad de controlar
                tu sueldo en un clic.
              </p>
              <button
                onClick={scrollToSimulacro}
                className="text-[#0A0A0A] text-center font-inter text-[16px] font-semibold leading-normal
                rounded-lg bg-white hover:bg-[#F5F5F7] w-full md:w-fit px-8 h-[56px] flex items-center justify-center transition-colors"
              >
                Adelanta tu nómina
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[300px] md:h-[70vh] flex flex-col justify-center items-center order-1 md:order-2">
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <Image
              src="/hero-nominas-image.webp"
              alt="Adelanto de Nómina"
              width={800}
              height={800}
              className="relative transform max-h-[280px] md:max-h-[500px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
