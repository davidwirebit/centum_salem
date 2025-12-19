import BenefistPasarelaPagosCards from "../components/BenefistPasarelaPagosCards";
import HeroPasarelaPagos from "../components/HeroPasarelaPagos";

export default function PasarelaPagosPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <HeroPasarelaPagos />

      <div className="relative h-[480px] bg-gradient-to-r from-[#111111] to-[#161616] flex items-center px-6 mb-[100px] lg:px-8 border-y border-[#2D2D2D]">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <h1 className="text-white font-manrope text-[40px] font-semibold leading-[52px] tracking-[0px] text-pretty max-w-[70%]">
            Un intermediario entre cliente y empresa, facilita las transacciones
            en línea, mediante tarjetas de crédito o débito.
          </h1>
          <a
            href="/form-two?form=pasarela-pagos"
            className="text-[#0A0A0A] flex items-center justify-center text-center font-inter text-[16px] font-semibold leading-normal rounded-lg bg-white hover:bg-[#F5F5F7] px-10 h-[56px] transition-colors"
          >
            <span>Contáctanos</span>
          </a>
        </div>
      </div>

      <h2 className="text-white text-center font-manrope text-[40px] font-bold leading-[48px] tracking-[0px] mb-[24px]">
        Maximiza la eficiencia y toma el control de tus pagos
      </h2>
      <p className="text-[#A1A1A6] text-center font-inter text-[25px] font-normal leading-[33px] tracking-[0px] text-pretty mb-[50px]">
        Reduce el tiempo dedicado a la administración de pagos y aumenta la
        satisfacción de tu equipo.
      </p>

      <BenefistPasarelaPagosCards />
    </div>
  );
}
