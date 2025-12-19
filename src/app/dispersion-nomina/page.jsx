import Image from "next/image";
import BlueCard from "../components/BlueCard";
import HeroDispersionNomina from "../components/HeroDispersionNomina";

export default function DispersionNomina() {
  return (
    <>
      <HeroDispersionNomina />
      <div className="relative min-h-[300px] md:h-[480px] bg-gradient-to-r from-[#386EB159] to-[#386EB109] flex items-center px-6 mb-[50px] md:mb-[100px] lg:px-8 py-10 md:py-0">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-[#212A59] font-poppins text-[24px] md:text-[40px] font-semibold leading-[32px] md:leading-[52px] tracking-[0px] text-pretty text-center md:text-left md:max-w-[70%]">
            Haz que el proceso de pago sea más fácil y confiable para tu negocio
            y tus empleados.
          </h1>
          <button
            className="text-white text-center font-inter text-[16px] font-bold leading-normal rounded-[80px] bg-[#212A59] px-10 md:px-14 h-[56px] md:h-[70px] whitespace-nowrap"
          >
            Llámanos
          </button>
        </div>
      </div>

      <h2 className="text-[#212A59] text-center font-poppins text-[26px] md:text-[40px] font-bold leading-[34px] md:leading-[48px] tracking-[0px] mb-[16px] md:mb-[24px] px-4">
        Maximiza la eficiencia y toma el control de tus pagos
      </h2>
      <p className="text-[#386EB1] text-center font-inter text-[16px] md:text-[25px] font-normal leading-[24px] md:leading-[33px] tracking-[0px] text-pretty mb-[50px] md:mb-[100px] px-4">
        Reduce el tiempo dedicado a la administración de pagos y aumenta la
        satisfacción de tu equipo.
      </p>

      <div className="mx-auto w-[90%] flex flex-col items-center justify-center relative">
        {/* SVG de fondo */}

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 z-0 "
          style={{
            backgroundImage: "url('/dispersion-nomina-cards-bg.svg')",
            backgroundSize: "608px 780px",
            backgroundPosition: "bottom left 10%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 relative ">
          <div className="max-w-[400px]">
            <BlueCard title="Puntualidad en los pagos">
              Asegura que los empleados reciban su salario a tiempo, lo que
              mejora la satisfacción laboral.
            </BlueCard>
          </div>
          <div className="max-w-[400px] ">
            <BlueCard title="Seguridad">
              Las transferencias bancarias son más seguras que el manejo de
              efectivo o cheques, reduciendo el riesgo de robos.
            </BlueCard>
          </div>
          <div className="max-w-[400px]">
            <BlueCard title="Reducción de errores">
              Minimiza el riesgo de errores en el cálculo y la entrega de
              salarios.
            </BlueCard>
          </div>
          <div className="max-w-[400px]">
            <BlueCard title="Cumplimiento legal">
              Facilita el cumplimiento de normativas laborales y fiscales al
              mantener un registro claro de los pagos.
            </BlueCard>
          </div>
          <div className="max-w-[400px]">
            <BlueCard title="Eficiencia administrativa">
              Simplifica el proceso de gestión de nómina, ahorrando tiempo y
              recursos para el departamento de recursos humanos.
            </BlueCard>
          </div>
          <div className="max-w-[400px]">
            <BlueCard title="Flexibilidad">
              Permite ajustar la frecuencia de pagos (semanales, quincenales,
              mensuales) según las necesidades de la empresa y los empleados.
            </BlueCard>
          </div>
        </div>
        <div className="max-w-[400px] lg:max-w-[900px] w-full">
          <BlueCard title="Comodidad para los empleados">
            Los trabajadores pueden acceder a su salario directamente en sus
            cuentas bancarias, sin tener que desplazarse a cobrar.
          </BlueCard>
        </div>
      </div>
    </>
  );
}
