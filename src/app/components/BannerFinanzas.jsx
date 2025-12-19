import Link from "next/link";

export default function BannerFinanzas() {
  return (
    <section
      className="bg-[rgba(56,110,177,0.26)] h-[160px] flex flex-row items-center justify-center text-[#212A59] font-inter text-[25px] font-semibold leading-[52px] tracking-[0px] gap-[130px] 

"
    >
      <p>¡Anticipa tu salario y toma el control de tus finanzas hoy!</p>
      <Link
        href="#"
        className="text-[#212A59] text-center font-inter text-[16px] font-bold bg-[#FCC202] rounded-full px-12 h-[70px] flex items-center justify-center"
      >
        Contacto
      </Link>
    </section>
  );
}
