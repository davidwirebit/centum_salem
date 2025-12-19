import Image from "next/image";

export default function HeroDispersionNomina() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="flex flex-col w-full justify-center md:justify-end items-center md:items-end">
            <div className="max-w-[580px] flex flex-col gap-5 md:gap-[49px] px-4 md:px-0">
              <h1 className="text-[#212A59] font-poppins text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[124%] tracking-[0px] text-center md:text-left">
                Optimiza la gestión de tu empresa
                <span className="text-[#386EB1] font-poppins text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[62px] tracking-[0px]">
                  {" "}con la dispersión de nómina
                </span>
              </h1>
              <p className="text-[#606169] font-inter text-[16px] md:text-[25px] font-[400] leading-[150%] md:leading-[132%] tracking-[0px] text-center md:text-left">
                Asegura que tus empleados reciban sus salarios puntualmente,
                directamente en sus cuentas bancarias, sin complicaciones.
              </p>
              <button className="text-[#212A59] text-center font-inter text-[16px] font-bold leading-normal rounded-[80px] border border-[#212A59] bg-[#FFF] w-full md:w-fit px-8 h-[56px] md:h-[70px] mx-auto md:mx-0">
                Regístrate Gratis
              </button>
            </div>
          </div>

          <div className="relative h-[280px] md:h-[570px] flex flex-col justify-start items-center mt-6 md:mt-0">
            {/* Segunda imagen */}
            <Image
              src="/dispersion-nomina-hero.webp"
              alt="Estatuas Image"
              width={1000}
              height={1000}
              className="relative bottom-0 transform w-[80%] "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
