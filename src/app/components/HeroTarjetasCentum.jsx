import Image from "next/image";
import Link from "next/link";

export default function HeroTarjetasCentum() {
  return (
    <div className="min-h-screen pt-[120px] md:pt-[180px] pb-[60px] md:pb-[121px] bg-gradient-to-b from-[#0A0A0A] to-[#111111] flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center px-4">
        <h1 className="text-white text-center font-manrope text-[32px] md:text-[50px] font-bold leading-[38px] md:leading-[50px] tracking-[0px] mb-[20px] md:mb-[30px]">
          Recompensas que
          <br />
          <span className="text-[#D4A853]">impulsan tu estilo de vida</span>
        </h1>

        <p className="text-[#A1A1A6] text-center font-inter text-[16px] md:text-[25px] font-normal leading-[24px] md:leading-[33px] tracking-[0px] mb-[50px] md:mb-[100px] text-balance">
          Elige entre nuestras tarjetas de crédito y nómina dependiendo tus
          necesidades
        </p>

        <Image
          src="/hero-tarjetas-centum.webp"
          alt="Hero Tarjetas Centum"
          width={460}
          height={500}
          className="mx-auto mb-[50px] md:mb-[90px] max-w-[280px] md:max-w-[460px] h-auto"
        />

        <Link
          href="/form-two?form=tarjeta-centum"
          className="text-[#0A0A0A] text-center font-inter text-[16px] font-semibold leading-normal rounded-lg bg-white hover:bg-[#F5F5F7] py-3 px-12 transition-colors inline-block"
        >
          <span className="p-2">Solicitud Online</span>
        </Link>
      </div>
    </div>
  );
}
