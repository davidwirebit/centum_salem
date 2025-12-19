import Image from "next/image";

export default function HeroTerminosTPV() {
  return (
    <div className="z-20 ">
      <div className="container mx-auto  px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="flex flex-col w-full justify-center md:justify-end items-center md:items-end">
            <div className="max-w-[580px] flex flex-col gap-5 md:gap-[29px] py-8 md:py-0 px-4 md:px-0">
              <h1 className="text-[#212A59] font-poppins text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[124%] tracking-[0px] text-center md:text-left">
                Terminales TPV para impulsar tu negocio
                <span className="text-[#386EB1] font-poppins text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[62px] tracking-[0px]">
                  {" "}con tecnología de pago
                </span>
              </h1>
              <p className="text-[#606169] font-inter text-[16px] md:text-[25px] font-[400] leading-[150%] md:leading-[132%] tracking-[0px] text-center md:text-left">
                Acepta pagos con tarjeta de forma rápida y segura. Soluciones de punto de venta para todo tipo de negocios.
              </p>
              <button className="text-[#212A59] text-center font-inter text-[16px] font-bold leading-normal rounded-[80px] border border-[#212A59] bg-[#FFF] w-full md:w-fit px-8 h-[56px] md:h-[70px] mx-auto md:mx-0">
                Regístrate Gratis
              </button>
            </div>
          </div>

          <div className="relative h-[280px] md:h-[700px] flex flex-col justify-start items-center">
            {/* Segunda imagen */}
            <Image
              src="/hero-terminales-tpv.webp"
              alt="Estatuas Image"
              width={1000}
              height={1000}
              className="relative bottom-[2px] transform w-fit h-full z-30"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
