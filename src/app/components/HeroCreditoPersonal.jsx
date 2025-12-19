import Image from "next/image";
import Link from "next/link";

export default function HeroCreditoPersonal() {
  return (
    <div className="pb-20">
      <div className="w-full h-screen  flex justify-center mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center  ">
          {/* Left Column - Text Content */}
          <div className=" flex flex-col  w-full justify-end items-end ">
            <div className="max-w-[580px]  flex flex-col  gap-[49px]">
              <h1
                className="text-[#212A59] font-poppins text-[50px] font-bold   leading-[124%] tracking-[0px]
"
              >
                Un crédito personal <br /> te permite
                <span
                  className="text-[#FFC600] font-poppins text-[50px] font-bold leading-[62px] tracking-[0px]
"
                >
                  {" "}
                  obtener <br /> una cantidad mayor
                </span>
              </h1>
              <p
                className="text-[#606169] font-inter text-[25px]  font-[400] leading-[132%] tracking-[0px]
"
              >
                Obtén más dinero y flexibilidad en el uso y pagos de tu crédito.
                Sin necesidad de una fuente específica de ingresos como
                garantía.
              </p>
              
              <Link
                href="/form-two?form=credito-personal">
              <button
                className="text-[#212A59] text-center font-inter text-[16px] font-bold leading-normal
                rounded-lg border border-[#212A59] bg-[#FFF] w-fit px-8 py-3

"
              >
                Solicita un crédito personal{" "}
              </button>
              </Link>
            </div>
          </div>

          <div className="relative  flex justify-center items-center ">
            {/* Segunda imagen */}
            <Image
              src="/credito-personal-h.png"
              alt="Estatuas Image"
              width={600}
              height={600}
              className="bottom-0 transform object-contain "
              priority
            />
          </div>
        </div>
      </div>
      <div
        className="text-[#212A59] text-center font-poppins text-[40px] font-semibold leading-[52px] tracking-[0px] w-[80%] mx-auto px-10 h-[80vh]
        flex flex-col justify-center
"
      >
        <p>Ideal para tener liquidez sin</p>
        <p>comprometer tus bienes.</p>
      </div>
    </div>
  );
}
