import BenefistPasarelaPagosCards from "../components/BenefistPasarelaPagosCards";
import HeroPasarelaPagos from "../components/HeroPasarelaPagos";

export default function PasarelaPagosPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <HeroPasarelaPagos />

      <div className="relative min-h-[300px] md:h-[480px] bg-gradient-to-r from-[#111111] to-[#161616] flex items-center px-6 mb-[50px] md:mb-[100px] lg:px-8 border-y border-[#2D2D2D] py-10 md:py-0">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <h1 className="text-white font-manrope text-[24px] md:text-[40px] font-semibold leading-[32px] md:leading-[52px] tracking-[0px] text-pretty md:max-w-[70%] text-center md:text-left">
            Un intermediario entre cliente y empresa, facilita las transacciones
            en línea, mediante tarjetas de crédito o débito.
          </h1>
          <a
            href="/form-two?form=pasarela-pagos"
            className="text-[#0A0A0A] flex items-center justify-center text-center font-inter text-[16px] font-semibold leading-normal rounded-lg bg-white hover:bg-[#F5F5F7] px-10 h-[56px] transition-colors whitespace-nowrap"
          >
            <span>Contáctanos</span>
          </a>
        </div>
      </div>

      <h2 className="text-white text-center font-manrope text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[48px] tracking-[0px] mb-[24px] px-4">
        Maximiza la eficiencia y toma el control de tus pagos
      </h2>
      <p className="text-[#A1A1A6] text-center font-inter text-[18px] md:text-[25px] font-normal leading-[26px] md:leading-[33px] tracking-[0px] text-pretty mb-[50px] px-4">
        Reduce el tiempo dedicado a la administración de pagos y aumenta la
        satisfacción de tu equipo.
      </p>

      <BenefistPasarelaPagosCards />
    </div>
  );
}
