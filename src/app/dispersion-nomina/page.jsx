import Image from "next/image";
import BlueCard from "../components/BlueCard";
import HeroDispersionNomina from "../components/HeroDispersionNomina";

export default function DispersionNomina() {
  return (
    <>
      <HeroDispersionNomina />
      <div className="relative h-[480px] bg-gradient-to-r from-[#386EB159] to-[#386EB109] flex items-center px-6 mb-[100px] lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <h1 className="text-[#212A59] font-poppins text-[40px] font-semibold leading-[52px] tracking-[0px] text-pretty max-w-[70%] ">
            Haz que el proceso de pago sea más fácil y confiable para tu negocio
            y tus empleados.
          </h1>
          <button
            className="text-white text-center font-inter text-[16px] font-bold leading-normal rounded-[80px] bg-[#212A59]
 px-14 h-[70px] 
"
            size="lg"
          >
            Llámanos
          </button>
        </div>
      </div>

      <h2
        className="text-[#212A59] text-center font-poppins text-[40px] font-bold leading-[48px] tracking-[0px] mb-[24px]
"
      >
        Maximiza la eficiencia y toma el control de tus pagos
      </h2>
      <p
        className="text-[#386EB1] text-center font-inter text-[25px] font-normal leading-[33px] tracking-[0px] text-pretty
 mb-[100px]"
      >
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
