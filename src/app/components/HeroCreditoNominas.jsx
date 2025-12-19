"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroCreditoNominas() {
  const scrollToBenefits = () => {
    const element = document.getElementById('benefits-nomina');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-20">
      <div className="w-full h-screen  flex justify-center mx-auto px-4 py-12 md:py-24">
        <div className="grid  grid-cols-1 md:grid-cols-2 items-center justify-center ">
          {/* Left Column - Text Content */}
          <div className=" flex flex-col  w-full justify-end items-end ">
            <div className="max-w-[580px]  flex flex-col  gap-[49px]">
              <h1
                className="text-[#212A59] font-poppins text-[50px] font-bold   leading-[124%] tracking-[0px]
"
              >
                Consigue el dinero que <br /> necesitas, fácil <br /> y rápido,
                <span
                  className="text-[#FFC600] font-poppins text-[50px] font-bold leading-[62px] tracking-[0px]
"
                >
                  {" "}
                  con un <br /> crédito de nómina
                </span>
              </h1>
              <p
                className="text-[#606169] font-inter text-[25px]  font-[400] leading-[132%] tracking-[0px]
"
              >
                Te ofrecemos un préstamo ajustado a tu salario, que se paga
                automáticamente cada quincena. Accede al efectivo hoy mismo y
                paga poco a poco. ¡Haz realidad tus planes con el respaldo de tu
                sueldo!
              </p>
              <Link href="/form-two?form=credito-nomina">
              
              <button
                
                className="text-[#212A59] text-center font-inter text-[16px] font-bold leading-normal
                rounded-lg border border-[#212A59] bg-[#FFF] w-fit px-8 py-3 

"
              >
                Solicita un crédito de nómina
              </button>
              </Link>
            </div>
          </div>

          <div className="  h-full flex justify-start items-center">
            {/* Segunda imagen */}
            <Image
              src="/hero-credito-nominas.png"
              alt="Estatuas Image"
              width={800}
              height={800}
              className=" object-cover max-w-[600px]"
              priority
            />
          </div>
        </div>
      </div>
      <div
        className="text-[#212A59] text-center font-poppins text-[40px] font-semibold leading-[52px] tracking-[0px] w-full mx-auto px-10 h-[80vh] flex flex-col justify-center items-center bg-[rgba(56,110,177,0.20)] 

"
      >
        <p>Una forma rápida y segura de</p>
        <p>conseguir dinero para</p>
        <p>emergencias o proyectos</p>
        <p>personales.</p>
      </div>
    </div>
  );
}
