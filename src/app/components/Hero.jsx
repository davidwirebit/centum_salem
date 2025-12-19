"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] overflow-hidden flex items-end">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#D4A853]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#D4A853]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Left Content */}
          <div className="text-center lg:text-left pb-16 lg:pb-24 pt-24">
            <h1 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Innovando</span>
              <br />
              <span className="text-[#D4A853]">Seriamente</span>
            </h1>

            <p className="text-[#A1A1A6] font-inter text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Soluciones de pago y tecnología financiera para impulsar tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.wa.link/4ia4ul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#0A0A0A] px-8 py-4 rounded-lg font-inter font-semibold hover:bg-[#F5F5F7] transition-colors"
              >
                Contactar ahora
              </a>
              <Link
                href="/pasarela-pagos"
                className="inline-flex items-center justify-center border border-[#2D2D2D] text-white px-8 py-4 rounded-lg font-inter font-medium hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
              >
                Ver soluciones
              </Link>
            </div>
          </div>

          {/* Right Content - Image anchored to bottom */}
          <div className="relative hidden lg:flex justify-end items-end">
            <Image
              src="/hero-principal.png"
              alt="Salem Internacional"
              width={650}
              height={550}
              priority
              className="relative z-10 object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
