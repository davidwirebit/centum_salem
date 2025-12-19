import Image from "next/image";
import BlueCard from "../components/BlueCard";
import HeroTarjetasCentum from "../components/HeroTarjetasCentum";
import Link from "next/link";

export default function TarjetasCentumpay() {
  return (
    <div className="bg-[#0A0A0A]">
      <HeroTarjetasCentum />

      <h2 className="text-white text-center font-manrope text-[24px] md:text-[35px] font-bold leading-[32px] md:leading-[48px] tracking-[0px] mt-[60px] md:mt-[110px] px-4">
        Seguridad y eficiencia en cada transferencia
      </h2>
      <h3 className="text-[#A1A1A6] text-center font-inter text-[16px] md:text-[25px] font-normal leading-[24px] md:leading-[33px] tracking-[0px] mt-[15px] mb-[60px] md:mb-[115px] px-4">
        Agiliza tus pagos y eleva tu experiencia financiera.
      </h3>

      <div className="mx-auto w-[90%] flex flex-col items-center justify-center relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 relative">
          <div className="max-w-[400px]">
            <BlueCard title="Control Financiero">
              Lleva un registro claro de gastos y finanzas personales o
              comerciales.
            </BlueCard>
          </div>
          <div className="max-w-[400px]">
            <BlueCard title="Herramientas de Administración">
              Utiliza herramientas para el seguimiento y análisis de gastos,
              facilitando la gestión financiera.
            </BlueCard>
          </div>
          <div className="max-w-[400px]">
            <BlueCard title="Flexibilidad en Pagos">
              Financia compras importantes y mejora tu flujo de caja con
              tarjetas de crédito.
            </BlueCard>
          </div>

          <div className="max-w-[400px]">
            <BlueCard title="Mejor Imagen Profesional">
              Proyecta una imagen de confianza y profesionalismo al utilizar
              tarjetas a nombre de tu negocio.
            </BlueCard>
          </div>
          <div className="max-w-[400px]">
            <BlueCard title="Facilidad de Transacciones">
              Realiza pagos de manera rápida y sencilla, sin necesidad de
              efectivo.
            </BlueCard>
          </div>

          <div className="max-w-[400px]">
            <BlueCard title="Límites Personalizables">
              Establece límites de gasto para ti o para tu equipo, manteniendo
              el control sobre tus recursos.
            </BlueCard>
          </div>
        </div>
        <div className="max-w-[400px] lg:max-w-[900px] w-full">
          <BlueCard title="Acceso a Beneficios y Recompensas">
            Disfruta de descuentos y programas de recompensas que optimizan tus
            compras.
          </BlueCard>
        </div>
      </div>

      <div className="min-h-screen bg-[#111111] flex items-center mt-16 border-t border-[#2D2D2D]">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="relative mx-auto mb-[90px]">
            {/* Left gradient fade to smooth shadow edge */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
            <Image
              src="/centumpay-tarjetas.webp"
              alt="Hero Tarjetas Centum"
              width={768}
              height={660}
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left gap-2 flex flex-col">
            <h2 className="text-white font-manrope text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[48px] tracking-[0px]">
              App Centum
            </h2>
            <h3 className="text-[#A1A1A6] font-inter text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[29px] tracking-[0px]">
              Descarga nuestra App y comienza ya
            </h3>

            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <Link href="https://apps.apple.com/mx/app/centum-capital/id6737005550" target="_blank">
                <Image
                  src="/apple-gray.svg"
                  alt="App Store"
                  width={150}
                  height={80}
                  className="mb-6"
                />
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=efevoopay.centum.cardpay&hl=es_MX" target="_blank">
                <Image
                  src="/google-gray.svg"
                  alt="Google Play"
                  width={150}
                  height={80}
                  className="mb-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#161616] border-t border-[#2D2D2D] px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 sm:flex-row sm:items-center">
          <h2 className="text-white font-manrope text-[25px] font-bold leading-[29px] tracking-[0px]">
            ¿Quieres saber más sobre nuestros servicios?
          </h2>
          <a
            href="/form-two?form=tarjetas-centum"
            className="rounded-lg bg-white hover:bg-[#F5F5F7] px-14 font-semibold text-[#0A0A0A] transition-colors py-3 flex items-center justify-center font-inter"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}
