import Link from "next/link";
import BenefitsNominaCards from "../components/BenefitsNominaCards";
import HeroCreditoNominas from "../components/HeroCreditoNominas";
import BannerFinanzas from "../components/BannerFinanzas";
import SimulacroAdelantoNomina from "../components/SimulacroAdelantoNomina";
import SimulacroCreditoNominas from "../components/SimulacroCreditoNominas";

export default function CreditoNominas() {
  return (
    <>
      <HeroCreditoNominas />
      {/* <SimulacroCreditoNominas /> */}
      <BenefitsNominaCards />
      <section className="bg-[#386EB159] px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 sm:flex-row sm:items-center">
          <h2
            className="text-[#212A59] [leading-trim:both] [text-edge:cap] font-poppins text-[25px] font-bold leading-[29px] tracking-[0px]

"
          >
            ¡Solicita tu crédito de nómina y haz realidad tus planes hoy mismo!
          </h2>
          <a
            href="/form-two?form=credito-nomina"
     
            className="rounded-lg bg-[#212A59;] px-14  font-medium text-white transition-transform hover:scale-105 active:scale-95 py-3 flex items-center justify-center "
          >
            Contáctanos
          </a>
        </div>
      </section>
    </>
  );
}
