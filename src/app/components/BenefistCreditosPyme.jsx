export default function BenefistCreditosPyme() {
  return (
    <section className="mt-[-2px] ">
      {/* TERMINAN PASOS */}

      <div className="relative  flex flex-col items-center justify-center  overflow-hidden  min-h-[650px] py-12 bg-gradient-to-r from-[rgba(56,110,177,0.15)] to-[rgba(56,110,177,0.02)]">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 z-0 fle "
          style={{
            backgroundImage: "url('/bg-creditos-pyme-cards.svg')",
            backgroundSize: "610px 798px",
            backgroundPosition: "bottom 5% left 75%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <h2
          className="mt-[170px] mb-[24px] text-[#212A59] text-center font-poppins text-4xl font-bold leading-[48px] tracking-[0px]
"
        >
          Prospera en el competitivo <br /> mundo empresarial
        </h2>

        <h3
          className="text-[#386EB1] text-center font-inter text-[25px] font-normal leading-[33px] tracking-[0px] mb-[125px]

"
        >
          Te apoyamos para enfrentar desafíos y <br /> aprovechar oportunidades
          únicas.
        </h3>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto">
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
                <span className="font-bold">Acceso a Capital:</span> Ofrece a
                las Pymes el financiamiento necesario para crecer, ya sea
                invirtiendo en equipos, contratando personal o expandiendo
                operaciones.
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
                <span className="font-bold">Flexibilidad:</span> Los créditos
                Pyme suelen ofrecer diferentes opciones de pago y montos,
                adaptándose a las necesidades específicas de cada negocio.
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
                <span className="font-bold">Mejora del Flujo de Caja: </span> Al
                obtener financiamiento, las empresas pueden cubrir gastos
                operativos sin afectar su liquidez, lo que les permite mantener
                un flujo de caja saludable.
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
                <span className="font-bold">Fomento al Crecimiento:</span> Con
                el capital adecuado, las Pymes pueden aprovechar oportunidades
                de mercado, lanzar nuevos productos o servicios y aumentar su
                competitividad.
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
                <span className="font-bold">Apoyo a la Innovación:</span> Los
                fondos pueden destinarse a proyectos innovadores, mejorando la
                eficiencia y adaptabilidad del negocio en un mercado cambiante.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
