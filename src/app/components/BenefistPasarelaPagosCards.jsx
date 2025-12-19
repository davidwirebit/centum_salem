export default function BenefistPasarelaPagosCards() {
  return (
    <section className="py-[100px]">
      <div className="relative flex items-center justify-center overflow-hidden min-h-[650px] py-12">
        {/* Contenido */}
        <div className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-4 p-6 bg-[#161616] border border-[#2D2D2D] backdrop-blur-md rounded-2xl">
            <div className="w-12 h-12 bg-[#D4A853] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0A0A0A]"
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
              <h3 className="text-lg text-[#A1A1A6] font-inter">
                <span className="font-bold text-white">Transacciones Seguras:</span> Las
                pasarelas de pagos utilizan tecnología de encriptación para
                proteger la información financiera de tus clientes, lo que
                reduce el riesgo de fraudes y robos de datos.
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-[#161616] border border-[#2D2D2D] backdrop-blur-md rounded-2xl">
            <div className="w-12 h-12 bg-[#D4A853] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0A0A0A]"
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
              <h3 className="text-lg text-[#A1A1A6] font-inter">
                <span className="font-bold text-white">Facilidad de Uso:</span> Permite a
                los negocios aceptar pagos en línea sin complicaciones. Además,
                los clientes pueden completar sus compras de manera rápida y
                fácil.
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-[#161616] border border-[#2D2D2D] backdrop-blur-md rounded-2xl">
            <div className="w-12 h-12 bg-[#D4A853] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0A0A0A]"
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
              <h3 className="text-lg text-[#A1A1A6] font-inter">
                <span className="font-bold text-white">
                  Diversidad de Métodos de Pago:
                </span>{" "}
                Estas plataformas ofrecen múltiples opciones de pago, lo que
                significa que los clientes pueden elegir el método que más les
                convenga.
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-[#161616] border border-[#2D2D2D] backdrop-blur-md rounded-2xl">
            <div className="w-12 h-12 bg-[#D4A853] rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#0A0A0A]"
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
              <h3 className="text-lg text-[#A1A1A6] font-inter">
                <span className="font-bold text-white">Soporte Internacional:</span> Si tu
                negocio tiene aspiraciones globales, una pasarela de pagos puede
                facilitar transacciones en diferentes divisas, lo que te permite
                llegar a un público más amplio.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
