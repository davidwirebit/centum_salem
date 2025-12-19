export default function BenefitsCardsWithBackground() {
  return (
    <section id="benefits-nomina" className=" py-[100px]  ">
      <div className="w-full max-w-6xl mx-auto  px-4 py-16 bg-gradient-to-br from-[#F3F6FD] to-[#386EB1] rounded-3xl ">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h1
            className="text-[#FFF] font-poppins text-[40px] font-semibold leading-[52px] tracking-[0px]
"
          >
            3 Pasos para solicitar un Crédito de Nómina
          </h1>
          <p
            className="text-[#FFF] text-center font-inter text-[25px] font-normal leading-[30px] tracking-[0px]
"
          >
            Es muy fácil y rápido. Sin complicaciones ni papeleo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <button
              className="px-8 py-4 rounded-full border-2 border-white/80 hover:bg-white/10 transition-colors duration-200 text-[#FFF] text-center font-inter text-[16px] font-bold leading-normal
"
            >
              1. Registra tu información
            </button>
            <button
              className="px-8 py-4 rounded-full border-2 border-white/80 hover:bg-white/10 transition-colors duration-200 text-[#FFF] text-center font-inter text-[16px] font-bold leading-normal
"
            >
              2. Agrega un Monto
            </button>
            <button
              className="px-8 py-4 rounded-full border-2 border-white/80 hover:bg-white/10 transition-colors duration-200 text-[#FFF] text-center font-inter text-[16px] font-bold leading-normal
"
            >
              3. Elige un Plazo
            </button>
          </div>
        </div>
      </div>

      {/* TERMINAN PASOS */}

      <h2
        className="text-[#212A59] font-poppins text-[40px] font-bold leading-[52px] tracking-[0px] mt-32 text-center
"
      >
        Ten el control con tu nómina
      </h2>
      <h3
        className="text-[#386EB1] font-inter text-[25px] font-normal leading-[52px] tracking-[0px] text-center
"
      >
        Tu nómina flexible y con un mejor rendimiento.
      </h3>

      <div className="relative  flex items-center justify-center  overflow-hidden mt-14  min-h-[600px] py-12">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/benefits-cards-bg.svg')",
            backgroundSize: "456px 598px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#FCC202] rounded-full flex items-center justify-center flex-shrink-0">
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
                <span className="font-bold">Descuento automático:</span> Los
                pagos se hacen directamente de tu sueldo, lo que te evita
                olvidos y cargos por retrasos.
              </h3>
            </div>
          </div>

          <div className="flex  items-center gap-4 p-6 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#FCC202] rounded-full flex items-center justify-center flex-shrink-0">
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
              <h3 className="text-xl  text-[#212A59]">
                <span className="font-bold">Intereses más bajos:</span> Al estar
                respaldado por tu salario, suele tener tasas de interés más
                accesibles que otros préstamos.
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6   bg-white/30 backdrop-blur-md rounded-3xl shadow-lg">
            <div className="w-12 h-12 bg-[#FCC202] rounded-full flex items-center justify-center flex-shrink-0">
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
                <span className="font-bold">Montos ajustados:</span> Puedes
                pedir una cantidad que se ajuste a tu capacidad de pago,
                evitando deudas difíciles de manejar.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
