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
    <div className="relative w-full py-16 mt-[100px] mb-[100px]">
      <div className="flex flex-col md:flex-row relative mx-auto px-4">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-[44px]">
          <div className="space-y-6 max-w-[370px]">
            <h1 className="text-white font-manrope text-[40px] font-bold leading-[48px] tracking-[0px]">
              Soluciones Empresariales
            </h1>
            <p className="text-[#A1A1A6] font-inter text-xl font-normal leading-[33px] tracking-[0px]">
              Tecnología de pago para tu negocio.
            </p>
          </div>

          <div className="grid gap-[44px] sm:grid-cols-2">
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
