import Image from "next/image";
import Link from "next/link";

export default function HeroTarjetasCentum() {
  return (
    <div className="min-h-screen pt-[180px] pb-[121px] bg-gradient-to-b from-[#0A0A0A] to-[#111111] flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-white text-center font-manrope text-[50px] font-bold leading-[50px] tracking-[0px] mb-[30px]">
          Recompensas que
          <br />
          <span className="text-[#D4A853]">impulsan tu estilo de vida</span>
        </h1>

        <p className="text-[#A1A1A6] text-center font-inter text-[25px] font-normal leading-[33px] tracking-[0px] mb-[100px] text-balance">
          Elige entre nuestras tarjetas de crédito y nómina dependiendo tus
          necesidades
        </p>

        <Image
          src="/hero-tarjetas-centum.webp"
          alt="Hero Tarjetas Centum"
          width={460}
          height={500}
          className="mx-auto mb-[90px]"
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
