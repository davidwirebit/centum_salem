import Image from "next/image";
import Link from "next/link";


export default function CardsSectionOne({cardImage}) {
    return (
      <section className="min-h-[100vh] flex flex-col justify-evenly bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] items-center font-inter px-4 py-6 sm:py-8">

        <div className="">
        <Image src="/centum-logo.svg" alt="Centum Logo" width={245} height={70} className="w-40 h-auto xs:w-48 sm:w-56 md:w-60 lg:w-64" />
        </div>


        <div className="text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8 px-2">
          <h1 className="text-white font-manrope text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Conoce la nueva
            <br />
            <span className="text-[#D4A853]">generación de tarjetas</span>
          </h1>
          <p className="text-[#A1A1A6] text-center text-sm xs:text-base sm:text-lg md:text-xl font-normal leading-relaxed tracking-normal">
            Débito o crédito, tú eliges. Accede a beneficios
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>exclusivos, seguridad avanzada y la libertad de usar
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>tu dinero como quieras. Todo en una sola tarjeta.
          </p>
        </div>


        <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <Image src={cardImage} alt="Tarjeta" width={600} height={388} className="w-full h-auto" />
        </div>

        <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md">
          <Link href="/solicitud-tarjeta" className="block">
            <button className="bg-white text-[#0A0A0A] w-full xs:w-auto xs:px-12 sm:px-16 py-3 sm:py-4 rounded-lg text-base xs:text-lg sm:text-xl font-semibold shadow-lg hover:bg-[#F5F5F7] transition-colors duration-200">
              Solicita tu tarjeta
            </button>
          </Link>
        </div>
      </section>
    )
  }
  