import Image from "next/image";

export default function HeroDispersionNomina() {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className=" flex flex-col  w-full justify-end items-end ">
            <div className="max-w-[580px]  flex flex-col  gap-[49px]">
              <h1
                className="text-[#212A59] font-poppins text-[50px] font-bold   leading-[124%] tracking-[0px]
"
              >
                Optimiza la gestión de <br /> tu empresa
                <span
                  className="text-[#386EB1] font-poppins text-[50px] font-bold leading-[62px] tracking-[0px]
"
                >
                  {" "}
                  con la <br /> dispersión de nómina
                </span>
              </h1>
              <p
                className="text-[#606169] font-inter text-[25px]  font-[400] leading-[132%] tracking-[0px]
"
              >
                Asegura que tus empleados reciban sus salarios puntualmente,
                directamente en sus cuentas bancarias, sin complicaciones.
              </p>
              <button
                className="text-[#212A59] text-center font-inter text-[16px] font-bold leading-normal
                rounded-[80px] border border-[#212A59] bg-[#FFF] w-fit px-8  h-[70px]

"
              >
                Regístrate Gratis
              </button>
            </div>
          </div>

          <div className="relative  h-[400px] md:h-[570px] flex flex-col justify-start items-center  ">
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
