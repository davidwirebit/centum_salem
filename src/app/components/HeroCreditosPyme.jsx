import Image from "next/image";
import Link from "next/link";

export default function HeroCreditosPyme() {
  return (
    <div className="">
      <div className="container mx-auto  px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
          <div className=" flex flex-col  w-full justify-end items-end ">
            <div className="max-w-[580px] flex flex-col gap-[29px]">
              <h1
                className="text-[#212A59] font-poppins text-[50px] font-bold   leading-[124%] tracking-[0px]
"
              >
                La solución para <br /> invertir en tu
                <br />
                crecimiento,
                <span
                  className="text-[#386EB1] font-poppins text-[50px] font-bold leading-[62px] tracking-[0px]
"
                >
                  {" "}
                  con <br /> créditos pyme
                </span>
              </h1>
              <p
                className="text-[#606169] font-inter text-[25px]  font-[400] leading-[132%] tracking-[0px]
"
              >
                Accede a fondos para invertir en tu operación, expansión, compra
                de inventario, o cualquier necesidad financiera que te ayude a
                crecer y prosperar.
              </p>
              <Link href="/form-one?form=creditos-pyme">

              <button
                className="text-[#212A59] text-center font-inter text-[16px] font-bold leading-normal
                rounded-[80px] border border-[#212A59] bg-[#FFF] w-fit px-8  h-[70px]

"
              >
                Regístrate Gratis
              </button>
              </Link>
            </div>
          </div>

          <div className="relative  h-[400px] md:h-[70vh] flex flex-col justify-start items-center  ">
            {/* Segunda imagen */}
            <Image
              src="/hero-creditos-pyme-img.webp"
              alt="Estatuas Image"
              width={1000}
              height={1000}
              className="relative bottom-0 transform w-fit h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
