"use client";

import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";

export default function Section1({ setIsModalSelectCardOpen }) {
  const handleClick = () => {
    setIsModalSelectCardOpen(true);
  };

  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile && (
        <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-[#111111] to-[#0A0A0A] rounded-3xl w-[80%] mx-auto mt-[148px] border border-[#2D2D2D]">
          {/* Top Section */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-center pt-[170px]">
            <div className="w-full flex flex-row min-h-[600px] items-center justify-end">
              <div className="relative w-[590px] flex flex-col min-h-[600px] justify-center items-start">
                <h2 className="text-white font-manrope text-4xl font-bold leading-[120%] tracking-[0px] mb-[27px]">
                  Tecnología financiera <br /> para impulsar tu <br />
                  empresa
                </h2>
                <p className="text-[#A1A1A6] font-inter text-xl font-normal leading-[132%] tracking-[0px]">
                  Brindamos soluciones de pago integrales que simplifican y
                  aseguran tus operaciones. Desde pasarelas de pago hasta
                  terminales TPV, ofrecemos la tecnología que tu negocio
                  necesita para crecer.
                </p>
              </div>
            </div>

            <div className="w-[70%] h-full">
              <Image
                src="/column.webp"
                width={390}
                height={650}
                alt="Columna Imagen"
                className="max-h-[550px] w-auto"
              />
            </div>
          </div>

          <div className="h-px w-[60%] bg-[#2D2D2D] mx-auto"></div>

          {/* Bottom Section */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-center pb-[130px]">
            <div className="w-full flex flex-row items-center justify-end">
              <div className="relative w-[590px] flex flex-col min-h-[500px] justify-center items-start">
                <h2 className="text-white font-manrope text-4xl font-bold leading-[48px] tracking-[0px]">
                  Tarjetas Centum
                </h2>
                <p className="text-[#A1A1A6] font-inter text-xl font-normal leading-[33px] tracking-[0px]">
                  Optimiza tu nómina y gestiona tus <br /> finanzas de manera
                  inteligente.
                </p>
                <div className="absolute bottom-0 flex gap-4 w-full p-4">
                  <button
                    className="px-8 py-3 bg-white rounded-lg hover:bg-[#F5F5F7] transition-colors text-[#0A0A0A] text-center text-base font-semibold font-inter leading-normal"
                    onClick={handleClick}
                  >
                    Solicita tu tarjeta
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[70%] min-h-[500px] flex justify-start items-end">
              <Image
                src="/two-cards.svg"
                width={390}
                height={650}
                alt="Tarjeta Visa negra"
                className="max-h-[550px] w-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION */}
      {isMobile && (
        <div className="shadow-md p-[27px] md:p-8 bg-gradient-to-b from-[#111111] to-[#0A0A0A] rounded-3xl w-[90%] mx-auto mt-[27px] border border-[#2D2D2D]">
          {/* Top Section */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-center">
            <div className="w-full flex flex-row items-center justify-end">
              <div className="relative w-[590px] flex flex-col justify-center items-start mt-[27px]">
                <h2 className="text-white font-manrope text-4xl font-bold leading-[120%] tracking-[0px] mb-[27px]">
                  Tecnología <br />
                  financiera para
                  <br />
                  impulsar tu
                  <br />
                  empresa
                </h2>
                <p className="text-[#A1A1A6] font-inter text-xl font-normal leading-[132%] tracking-[0px]">
                  Brindamos soluciones de pago integrales que simplifican y
                  aseguran tus operaciones. Desde pasarelas de pago hasta
                  terminales TPV, ofrecemos la tecnología que tu negocio
                  necesita para crecer.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-row items-center justify-end mt-[27px]">
              <div className="bottom-0 flex flex-col gap-4 w-full p-4">
                <Link
                  href="/pasarela-pagos"
                  className="text-[#D4A853] font-inter text-sm font-normal leading-normal flex flex-row w-[160px] justify-between items-center hover:text-white transition-colors"
                >
                  <span>Pasarela de pagos</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/form-two?form=terminales-tpv"
                  className="text-[#D4A853] font-inter text-sm font-normal leading-normal flex flex-row w-[160px] justify-between items-center hover:text-white transition-colors"
                >
                  <span>Terminales TPV</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <Image
                src="/column.webp"
                width={120}
                height={350}
                alt="Columna"
                className="w-auto"
              />
            </div>
          </div>

          <div className="h-px w-[60%] bg-[#2D2D2D] mx-auto"></div>

          {/* Bottom Section */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-center">
            <div className="w-full flex flex-row items-center justify-end">
              <div className="relative w-[590px] flex flex-col justify-center items-center mt-[37px]">
                <h2 className="text-center text-white font-manrope text-4xl font-bold leading-[48px] tracking-[0px]">
                  Tarjetas Centum
                </h2>
                <p className="text-[#A1A1A6] font-inter text-xl font-normal leading-[33px] tracking-[0px] text-center">
                  Optimiza tu nómina y gestiona <br /> tus finanzas de manera
                  <br />
                  inteligente.
                </p>

                <div className="w-[90%] flex justify-start items-end mt-[40px]">
                  <Image
                    src="/two-cards.svg"
                    width={1000}
                    height={750}
                    alt="Tarjetas visa"
                    className="w-[100%]"
                  />
                </div>

                <div className="bottom-0 flex gap-4 w-full flex-row justify-center mt-[40px]">
                  <button
                    className="px-6 py-3 bg-white rounded-lg hover:bg-[#F5F5F7] transition-colors text-[#0A0A0A] text-center font-inter text-base font-semibold leading-normal"
                    onClick={handleClick}
                  >
                    Solicitar Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
