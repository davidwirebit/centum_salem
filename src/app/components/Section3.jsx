import CardLanding from "./CardLanding";

export default function Section3() {
  const solutions = [
    {
      icon: "/pasarela-pagos.svg",
      title: "Pasarela de Pagos",
      description: "Más ventas, menos complicaciones.",
      link: "/pasarela-pagos",
    },
    {
      icon: "/terminales-tpv.svg",
      title: "Terminales TPV",
      description: "Transforma cada venta en una mejor experiencia.",
      link: "/form-two?form=terminales-tpv",
    },
  ];

  return (
    <div className="relative w-full py-12 md:py-16 mt-[50px] md:mt-[100px] mb-[50px] md:mb-[100px]">
      <div className="flex flex-col md:flex-row relative mx-auto px-4">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 md:gap-[44px]">
          <div className="space-y-4 md:space-y-6 max-w-[370px] text-center md:text-left px-4">
            <h1 className="text-white font-manrope text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[48px] tracking-[0px]">
              Soluciones Empresariales
            </h1>
            <p className="text-[#A1A1A6] font-inter text-base md:text-xl font-normal leading-[26px] md:leading-[33px] tracking-[0px]">
              Tecnología de pago para tu negocio.
            </p>
          </div>

          <div className="grid gap-6 md:gap-[44px] grid-cols-1 sm:grid-cols-2 w-full sm:w-auto px-4 sm:px-0">
            {solutions.map((solution, index) => (
              <CardLanding
                key={index}
                icon={solution.icon}
                title={solution.title}
                link={solution.link}
              >
                {solution.description}
              </CardLanding>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
