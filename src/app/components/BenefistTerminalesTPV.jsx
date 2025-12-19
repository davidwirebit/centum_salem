export default function BenefistTerminalesTPV() {
  return (
    <section className="mt-[-60px] z-10 ">
      {/* TERMINAN PASOS */}

      <div className="relative  flex flex-col items-center justify-center  overflow-hidden  min-h-[650px] py-12 bg-gradient-to-r from-[rgba(56,110,177,0.15)] to-[rgba(56,110,177,0.02)]">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 z-0 fle "
          style={{
            backgroundImage: "url('/bg-terminales-tpv.svg')",
            backgroundSize: "610px 798px",
            backgroundPosition: "bottom 5% left 20%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <h2 className="mt-[80px] md:mt-[170px] mb-[16px] md:mb-[24px] text-[#212A59] text-center font-poppins text-[26px] md:text-[40px] font-bold leading-[34px] md:leading-[48px] tracking-[0px] px-4">
          Transforma cada venta en una mejor experiencia
        </h2>

        <h3 className="text-[#386EB1] text-center font-inter text-[16px] md:text-[25px] font-normal leading-[24px] md:leading-[33px] tracking-[0px] mb-[60px] md:mb-[125px] px-4">
          Gestión inteligente, pagos rápidos y control absoluto para hacer crecer tu negocio sin límites.
        </h3>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col gap-4 md:gap-6 max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-4 p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#386EB1] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl  text-[#212A59]">
                <span className="font-bold">Agiliza el proceso de ventas:</span>{" "}
                Registra ventas de manera rápida y precisa, evitando los errores
                típicos de los procesos manuales, agilizando la atención al
                cliente.
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#386EB1] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl  text-[#212A59]">
                <span className="font-bold">Integración de pagos:</span> Acepta
                múltiples métodos de pago, desde tarjetas y pagos móviles hasta
                efectivo, ofreciendo máxima flexibilidad para el cliente y
                elevando su experiencia de compra.
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#386EB1] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl  text-[#212A59] text-pretty">
                <span className="font-bold">Seguridad: </span> La encriptación
                de datos y protección contra fraudes, reduce los riesgos tanto
                para el negocio como para el cliente.
              </h3>
            </div>
          </div>

          <div className="flex  items-center gap-4 p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#386EB1] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="space-y-1 ">
              <h3 className="text-xl text-[#212A59] text-pretty">
                <span className="font-bold">Gestión de empleados:</span> Asigna
                usuarios específicos, limita accesos y registra la productividad
                basada en ventas para optimizar la gestión de empleados.
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6   bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#386EB1] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl  text-[#212A59] ">
                <span className="font-bold">
                  {" "}
                  Reducción de errores humanos:
                </span>{" "}
                Al automatizar las operaciones de cobro y registro, disminuyen
                los errores y simplifican los cierres de caja, permitiendo un
                registro exacto de cada transacción.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
