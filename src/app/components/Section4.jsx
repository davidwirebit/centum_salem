import Image from "next/image";
import Link from "next/link";
import { email,phone } from "../data"; 

export default function Section4() {
  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-6 relative mt-[130px]">
      {/* WhatsApp Button */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Image
              src="/centum-logo-allblue.svg"
              alt="Centum Capital"
              width={200}
              height={80}
              className="mb-6"
            />
            <h3
              className="text-[#212A59] font-inter text-[18px] font-bold leading-[40px] tracking-[0px]
"
            >
              Recursos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]
"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]
"
                >
                  Simulador de Nómina
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-[#212A59] font-inter text-[18px] font-bold leading-[40px] tracking-[0px]
"
            >
              Cotizar en línea
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]
"
                >
                  Crédito de Nómina
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]
"
                >
                  Terminales TPV
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]
"
                >
                  Crédito Pyme
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]
"
                >
                  Tarjetas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-[#212A59] font-inter text-[18px] font-bold leading-[40px] tracking-[0px]">
                Llámanos:
              </h3>
              <p className="text-[#212A59] font-inter text-[18px] font-bold leading-[40px] tracking-[0px]">
                {phone}
              </p>
            </div>

            <div>
              <h3 className="text-[#212A59] font-inter text-[18px] font-bold leading-[40px] tracking-[0px]">
                Horario:
              </h3>
              <p className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]">
                Lunes a Viernes
              </p>
              <p className="text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]">
                9am a 6pm
              </p>
            </div>
          </div>

          <div>
            <div>
              <a
                href="mailto:contacto@centum.mx"
                className="text-[#212A59] font-inter text-[18px] font-bold leading-[40px] tracking-[0px]"
              >
                {email}
              </a>
            </div>

            <address className="not-italic text-[#212A59] font-inter text-[18px] font-normal leading-[40px] tracking-[0px]">
              Av. Lázaro Cárdenas 303,
              <br />
              Haciendas de La Sierra,
              <br />
              66260 SPGG, N.L. Torre
              <br />
              Malva Piso 15 oficina 1501
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
