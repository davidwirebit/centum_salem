import BenefistCreditosPyme from "../components/BenefistCreditosPyme";
import HeroCreditosPyme from "../components/HeroCreditosPyme";

export default function CreditosPyme() {
  return (
    <>
      <HeroCreditosPyme />
      <BenefistCreditosPyme />
      {/* <section className="bg-[#1e2756] px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 sm:flex-row sm:items-center">
          <h2
            className="text-white font-inter w-full  text-[23px] font-semibold leading-[30px] tracking-[0px] text-pretty
"
          ></h2>
          <a
            href="#contacto"
            className="rounded-full bg-[#ffc107] px-14  font-medium text-black transition-transform hover:scale-105 active:scale-95 h-[70px] flex items-center justify-center "
          >
            Contacto
          </a>
        </div>
      </section> */}
    </>
  );
}
