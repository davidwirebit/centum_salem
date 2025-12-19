import Image from "next/image";
import Link from "next/link";

export default function HeroPasarelaPagos() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="flex flex-col w-full justify-center md:justify-end items-center md:items-end">
            <div className="max-w-[580px] flex flex-col gap-[20px] md:gap-[29px] py-8 md:py-16 px-4 md:px-0">
              <h1 className="text-white font-manrope text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[124%] tracking-[0px]">
                Procesa tus pagos de manera segura y eficiente
                <span className="text-[#D4A853] font-manrope text-[32px] md:text-[50px] font-bold leading-[120%] md:leading-[62px] tracking-[0px]">
                  {" "}
                  con la pasarela de pagos
                </span>
              </h1>
              <p className="text-[#A1A1A6] font-inter text-[16px] md:text-[25px] font-[400] leading-[140%] md:leading-[132%] tracking-[0px]">
                Una solución clave para negocios que quieren crecer en el mundo
                digital. Mejora la seguridad y comodidad de las transacciones,
                optimizando la gestión financiera.
              </p>

              <Link
                href="/form-one?form=pasarela-pagos"
                className="text-[#0A0A0A] text-center font-inter text-[16px] font-semibold leading-normal
                rounded-lg bg-white hover:bg-[#F5F5F7] w-fit px-8 h-[56px] flex items-center justify-center transition-colors"
              >
                <span>Regístrate Gratis</span>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[70vh] flex flex-col justify-start items-center">
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <Image
              src="/pasarela-pagos-hero-img.webp"
              alt="Pasarela de Pagos"
              width={1000}
              height={1000}
              className="relative bottom-0 transform w-fit h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
