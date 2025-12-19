import React from "react";
import HeroNominas from "../components/HeroNominas";
import Section1Nomina from "../components/Section1Nomina";
import SimulacroAdelantoNomina from "../components/SimulacroAdelantoNomina";

export default function Nominas() {
  return (
    <main className="bg-[#0A0A0A]">
      <HeroNominas />
      <SimulacroAdelantoNomina />
      <Section1Nomina />

      {/* CTA Section */}
      <section className="bg-[#161616] border-y border-[#2D2D2D] px-4 md:px-6 py-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:gap-8 md:flex-row">
          <h2 className="text-white font-manrope text-[20px] md:text-[28px] font-bold leading-[130%] tracking-[0px] text-center md:text-left">
            ¿Tienes dudas sobre cómo hacer tu solicitud?
          </h2>
          <a
            href="/form-two?form=adelanto-nomina"
            className="rounded-lg bg-white hover:bg-[#F5F5F7] px-8 md:px-10 font-inter font-semibold text-[#0A0A0A] transition-colors py-4 flex items-center justify-center w-full md:w-auto"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </main>
  );
}
