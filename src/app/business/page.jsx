
import Image from "next/image";
import CardsSectionOne from "../components/CardsSectionOne";
import {  email, facebook, instagram, whatsapp, linkedin } from "../data.js";
import Link from "next/link";

export default function Business() {
  return (
    <main className="w-full">
    <CardsSectionOne cardImage="/business-card.svg"/>

   

    <section className="relative font-inter bg-[#212A59] min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12">

      {/* Background image - hidden on mobile, shown on larger screens */}
      <div className="absolute left-0 top-0 w-1/2 h-full hidden lg:block">
        <Image src="/section-two-card-bg.svg" alt="Tarjeta" width={650} height={650} className="h-full w-auto object-contain" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center min-h-[60vh] gap-6 sm:gap-8 md:gap-10 lg:gap-14">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4"> 
          <h2 className="text-[#FFF] text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">¿Necesitas ayuda?</h2>
          <p className="text-[#FFF] text-center text-base sm:text-lg md:text-xl font-normal leading-relaxed tracking-normal px-2">¡Estamos aquí para ti!</p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div>
            <a
              href="tel:+528114949267"
              className="text-white text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-normal block hover:text-[#FFD700] transition-colors px-2"
            >
              <span className="text-[#386EB1]">+52</span> 81 1494 9267
            </a>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <a
              href={`mailto:${email}`}
              className="text-[#FFF] text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed tracking-wide block hover:text-[#FFD700] transition-colors px-2 break-all"
            >
              {email}
            </a>
            <p className="text-[#FFF] text-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-wide px-2">Lunes a viernes de 9:00 a.m. a 6:00 p.m.</p>
          </div>

          <div className="flex justify-center space-x-3 xs:space-x-4 sm:space-x-6 pt-2 sm:pt-4 md:pt-6 lg:pt-8">
            <a
              href={facebook}
              target="_blank"
              className="p-2 sm:p-3 rounded-full transition-colors hover:bg-white/10"
              aria-label="Facebook"
            >
              <Image src="/icons/facebook-icon.svg" alt="Facebook" width={13} height={32} className="w-3 h-6 xs:w-3 xs:h-8 sm:w-4 sm:h-8" />
            </a>
            <a
              href={instagram}
              target="_blank"
              className="p-2 sm:p-3 rounded-full transition-colors hover:bg-white/10"
              aria-label="Instagram"
            >
              <Image src="/icons/instagram-icon.svg" alt="Instagram" width={32} height={32} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              className="p-2 sm:p-3 rounded-full transition-colors hover:bg-white/10"
              aria-label="WhatsApp"
            >
              <Image src="/icons/whatsapp-icon.svg" alt="WhatsApp" width={32} height={32} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              className="p-2 sm:p-3 rounded-full transition-colors hover:bg-white/10"
              aria-label="Linkedin"
            >
              <Image src="/icons/linkedin-icon.svg" alt="Linkedin" width={32} height={32} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>


    <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">

      {/* Background image - hidden on mobile, shown on larger screens */}
      <div className="absolute right-0 bottom-0 h-[50%] sm:h-[60%] md:h-[70%] lg:h-[80%] hidden md:block">
        <Image src="/section-three-card-bg.svg" alt="Tarjeta" width={650} height={650} className="h-full w-auto object-contain" />
      </div>

      <div className="relative z-10 text-center text-[#212A59] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
     
        <Image 
          src="/section-three-centum-logo.svg" 
          alt="Centum Logo"
          width={203} 
          height={203}
          className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52"
        />

        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h2 className="text-[#212A59] text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-normal px-2">App Centum</h2>
          <p className="text-[#212A59] text-center text-base xs:text-lg sm:text-xl md:text-2xl font-normal leading-relaxed tracking-normal px-2">Descarga nuestra App y comienza ya</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 xs:gap-4 sm:gap-6 mt-2 sm:mt-4 w-full max-w-xs xs:max-w-sm sm:max-w-none px-4 sm:px-0">
          <Link href="https://apps.apple.com/mx/app/centum-capital/id6737005550" target="_blank" className="w-full sm:w-auto">
            <Image
              src="/apple-white.svg"
              alt="Apple Centum Store"
              width={200}
              height={80}
              className="w-full xs:w-44 sm:w-48 md:w-52 lg:w-56 h-auto hover:scale-105 transition-transform"
            />
          </Link>

          <Link href="https://play.google.com/store/apps/details?id=efevoopay.centum.cardpay&hl=es_MX" target="_blank" className="w-full sm:w-auto">
            <Image
              src="/google-white.svg"
              alt="Google Centum Playstore"
              width={200}
              height={80}
              className="w-full xs:w-44 sm:w-48 md:w-52 lg:w-56 h-auto hover:scale-105 transition-transform"
            />
          </Link>
        </div>

      </div>
    </section>
    

      
    <footer className="bg-[#1e2756] text-gray-300 py-6 xs:py-8 sm:py-10 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 xs:gap-5 sm:gap-6 md:gap-8">
    
          <Image
            src="/logo-amarillo.svg"
            alt="Centum Logo"
            width={140}
            height={80}
            className="w-24 h-14 xs:w-28 xs:h-16 sm:w-32 sm:h-18 md:w-36 md:h-20"
          />
        
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-center px-2">
            <Link href="/aviso-privacidad-salem" className="text-[#9EA3BB] font-inter text-xs sm:text-sm font-normal leading-5 sm:leading-6 hover:text-white transition-colors">
              Aviso de privacidad Salem Internacional
            </Link>
            <Link href="/terminos-condiciones-salem" className="text-[#9EA3BB] font-inter text-xs sm:text-sm font-normal leading-5 sm:leading-6 hover:text-white transition-colors">
              Términos y condiciones Salem Internacional
            </Link>
          </div>
        </div>
      </div>
    </footer>


    </main>
  );
}