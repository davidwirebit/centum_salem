import Image from "next/image";
import CardsSectionOne from "../components/CardsSectionOne";
import {  email, facebook, instagram, whatsapp, linkedin } from "../data.js";
import Link from "next/link";

export default function Business() {
  return (
    <main className="w-full">
    <CardsSectionOne cardImage="/clasica-card.svg"/>

   

    <section className="relative  font-interbg-[#212A59] min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute left-0 top-0 w-1/2 h-full">
    
        <Image src="/section-two-card-bg.svg" alt="Tarjeta" width={650} height={650} className="h-full w-auto object-contain" />
      </div>

      
      <div className="relative z-10 text-center text-white px-6 max-w-2xl
       mx-auto flex flex-col   min-h-[60vh] gap-14">
        <div className="flex flex-col "> 

        <h2 className="text-[#FFF] text-center text-5xl font-bold leading-[62px]">¿Necesitas ayuda?</h2>

        <p className="text-[#FFF] text-center text-xl font-base leading-[29px] tracking-normal">¡Estamos aquí para ti!</p>
        </div>

        <div className="flex flex-col gap-12">
        
          <div>
            <a
              href="tel:+528114949267"
              className="text-white text-center text-4xl font-bold leading-[48px] tracking-normal"
            >
              <span className="text-[#386EB1]">+52</span> 81 1494 9267
            </a>
          </div>

          <div className="">
            <a
              href={`mailto:${email}`}
              className="text-[#FFF] text-center text-3xl font-normal leading-[48px] tracking-[1px]"
            >
              {email}
            </a>
            <p className="text-[#FFF] text-center text-3xl font-normal leading-[48px] tracking-[1px]">Lunes a viernes de 9:00 a.m. a 6:00 p.m.</p>

          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href={facebook}
              target="_blank"
              className="p-3 rounded-full transition-colors"
              aria-label="Facebook"
            >
                <Image src="/icons/facebook-icon.svg" alt="Facebook" width={13} height={32} />
            </a>
            <a
              href={instagram}
              target="_blank"
              className="p-3 rounded-full  transition-colors"
              aria-label="Instagram"
            >
              
                <Image src="/icons/instagram-icon.svg" alt="Instagram" width={32} height={32} />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              className="p-3 rounded-full  transition-colors"
              aria-label="WhatsApp"
            >
             <Image src="/icons/whatsapp-icon.svg" alt="WhatsApp" width={32} height={32} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              className="p-3 rounded-full  transition-colors"
              aria-label="Linkedin"
            >
             <Image src="/icons/linkedin-icon.svg" alt="Linkedin" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </section>


    <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute right-0 bottom-0  h-[80%] ">
    
        <Image src="/section-three-card-bg.svg" alt="Tarjeta"
         width={650} height={650} className="h-full  w-auto object-contain" />
      </div>

      
      <div className="relative z-10 text-center 
      text-[#212A59] px-6 max-w-2xl mx-auto flex flex-col
        flex-between items-center gap-10 ">
     
     <Image src="/section-three-centum-logo.svg" alt="Centum Logo"
     width={203} height={203}
     className=""
     />

     <div className="flex flex-col gap-2">

<h2 className="text-[#212A59]  text-center text-[40px] font-bold leading-[48px] tracking-normal">App Centum</h2>
     <p className="text-[#212A59] text-center text-xl font-normal leading-[29px] tracking-normal">Descarga nuestra App y comienza ya</p>
     </div>


     <div className="flex justify-center md:justify-start gap-6 mt-4">
              <Link href="https://apps.apple.com/mx/app/centum-capital/id6737005550" target="_blank">
                <Image
                  src="/apple-white.svg"
                  alt="Apple Centum Store"
                  width={200}
                  height={80}
                  className="mb-6"
                />
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=efevoopay.centum.cardpay&hl=es_MX" target="_blank">
                <Image
                  src="/google-white.svg"
                  alt="Google Centum Playstore"
                  width={200}
                  height={80}
                  className="mb-6"
                />
              </Link>
            </div>

      </div>
    </section>
    
    <footer className="bg-[#1e2756] text-gray-300 py-8 px-4">
      <div className="container mx-auto max-w-[70%]">
        <div className="flex flex-col items-center gap-8">
    
            <Image
              src="/logo-amarillo.svg"
              alt="Centum Logo"
              width={140}
              height={80}
              className="mb-6"
            />
        

      
          <div className="flex flex-wrap justify-center gap-10 text-sm text-[#9EA3BB] font-inter text-[12px] font-normal leading-[24px] tracking-[0px]">
            <Link href="/aviso-privacidad" className="hover:text-white transition-colors">
              Aviso de privacidad ENDLESS MONEY, S.A.P.I.
            </Link>
            <Link href="/terminos-condiciones" className="hover:text-white transition-colors">
              Términoss y condiciones ENDLESS MONEY, S.A.P.I.
            </Link>
          </div>
        </div>
      </div>
    </footer>

    </main>
  );
} 
