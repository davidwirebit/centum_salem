import React from "react";
import CardLanding from "./CardLanding";

export default function Section2() {
  return (
    <section className="w-full  flex flex-col items-center mt-[100px]">
      <h2
        className="text-[#212A59] text-center font-poppins text-4xl font-bold leading-[48px] tracking-[0px]
"
      >
        Crédito Personal
      </h2>
      <h3
        className="text-[#386EB1] text-center font-inter text-xl font-normal leading-[33px] tracking-[0px]
"
      >
        Obtén tu crédito de nómina.
      </h3>

      <div className="flex flex-col items-center md:flex-row gap-[44px] mx-auto justify-center w-full mt-[80px]">
        <CardLanding 
          title={"Crédito de Nómina"} 
          icon={"/credito-nomina.svg"}
          link="/credito-nominas"
        >
          Un préstamo ajustado a tu salario, que se paga automáticamente cada
          quincena.
        </CardLanding>

        <CardLanding 
          title={"Crédito Personal"} 
          icon={"/credito-personal.svg"}
          link="/credito-personal"
        >
          Obtén más dinero y flexibilidad en el uso y pagos de tu crédito.
        </CardLanding>

        <CardLanding 
          title={"Adelanta tu nómina"} 
          icon={"/adelanta-nomina.svg"}
          link="/nominas"
        >
          Recibe una parte de tu sueldo antes de la fecha de cobro.
        </CardLanding>
      </div>
    </section>
  );
}
