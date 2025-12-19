import { CheckSquare } from "lucide-react";

export default function Section1Nomina() {
  return (
    <section className="bg-[#F2F4F7] h-screen pt-[150px] pb-[92px] ">
      <div
        className=" w-[80%] mx-auto bg-white
rounded-2xl shadow-2xl "
      >
        <div className="text-center space-y-6 w-[80%] mx-auto  py-[70px] ">
          <h2
            className="text-[#212A59] font-poppins text-[40px] font-semibold leading-[52px] tracking-[0px]
"
          >
            Más beneficios con nosotros
          </h2>

          <div className="w-[90%] mx-auto">
            <p
              className="text-[#212A59] text-center font-inter text-[25px] font-normal leading-[40px] tracking-[0px] text-balance
"
            >
              Tu bienestar financiero es nuestra prioridad. Estamos aquí para
              impulsarte a conquistar tus metas en los momentos más importantes
              de tu vida. Administra mejor tu salario para lograr la estabilidad
              que mereces. Estamos aquí para impulsarte a alcanzar tus metas y
              acompañarte en cada uno de los momentos más importantes de tu
              vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-[#F3F3F3] h-18 w-18 p-6 rounded-full">
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.63874 18.327L11 19.5917L12.3613 18.327L29.15 2.7299L30.0615 3.57674L11 21.2854L2.93846 13.796L3.85 12.9492L9.63874 18.327Z"
                    fill="#386EB1"
                    stroke="#386EB1"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              <h3
                className="text-[#606169] font-inter text-[25px] font-normal tracking-[0px]
"
              >
                Paga deudas con tu nómina
              </h3>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-[#F3F3F3] h-18 w-18 p-6 rounded-full">
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.63874 18.327L11 19.5917L12.3613 18.327L29.15 2.7299L30.0615 3.57674L11 21.2854L2.93846 13.796L3.85 12.9492L9.63874 18.327Z"
                    fill="#386EB1"
                    stroke="#386EB1"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              <h3
                className="text-[#606169] font-inter text-[25px] font-normal  tracking-[0px]
"
              >
                Sin correr riesgos de pagos interminables
              </h3>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <div className="bg-[#F3F3F3] h-18 w-18 p-6 rounded-full">
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.63874 18.327L11 19.5917L12.3613 18.327L29.15 2.7299L30.0615 3.57674L11 21.2854L2.93846 13.796L3.85 12.9492L9.63874 18.327Z"
                    fill="#386EB1"
                    stroke="#386EB1"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              <h3
                className="text-[#606169] font-inter text-[25px] font-normal tracking-[0px]
"
              >
                Tu dinero disponible en el momento
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
