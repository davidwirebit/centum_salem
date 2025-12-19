import { Check } from "lucide-react";

export default function Section1Nomina() {
  const benefits = [
    "Paga deudas con tu nómina",
    "Sin correr riesgos de pagos interminables",
    "Tu dinero disponible en el momento"
  ];

  return (
    <section className="bg-[#111111] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Card Container */}
        <div className="bg-[#161616] border border-[#2D2D2D] rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-white font-manrope text-[26px] md:text-[40px] font-bold leading-[130%] md:leading-[52px] tracking-[0px]">
              Más beneficios con nosotros
            </h2>

            <p className="text-[#A1A1A6] font-inter text-[16px] md:text-[18px] font-normal leading-[160%] md:leading-[32px] tracking-[0px] max-w-3xl mx-auto">
              Tu bienestar financiero es nuestra prioridad. Estamos aquí para
              impulsarte a conquistar tus metas en los momentos más importantes
              de tu vida. Administra mejor tu salario para lograr la estabilidad
              que mereces.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#D4A853]/20 flex items-center justify-center">
                    <Check className="h-6 w-6 md:h-7 md:w-7 text-[#D4A853]" />
                  </div>
                  <h3 className="text-white font-inter text-[16px] md:text-[18px] font-medium tracking-[0px] text-center">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
