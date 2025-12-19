import { Check } from "lucide-react";

export default function BlueCard({ title, children }) {
  return (
    <div className="w-full p-4">
      <div className="relative pl-6 md:pl-0">
        {/* Círculo desenfocado */}
        <div className="absolute left-0 md:-left-10 top-1/2 h-16 md:h-20 w-16 md:w-20 -translate-y-1/2 rounded-full bg-[#D4A853] opacity-30 blur-md"></div>

        {/* Tarjeta principal */}
        <div className="relative flex items-center gap-4 rounded-2xl bg-[#161616] border border-[#2D2D2D] p-4 md:p-6 min-h-[160px] md:min-h-[200px]">
          {/* Círculo con ícono */}
          <div className="absolute left-0 md:-left-10 top-1/2 flex h-16 md:h-20 w-16 md:w-20 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4A853]/20 blur-md"></div>
          <div className="absolute left-1 md:-left-7 top-1/2 flex h-10 md:h-14 w-10 md:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4A853]">
            <Check className="h-5 w-5 md:h-6 md:w-6 text-[#0A0A0A]" />
          </div>

          {/* Contenido de texto */}
          <div className="ml-8 md:ml-8 space-y-1">
            <h2 className="text-lg md:text-xl font-semibold text-white font-manrope">{title}:</h2>
            <p className="text-base md:text-lg leading-relaxed text-[#A1A1A6] font-inter">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
