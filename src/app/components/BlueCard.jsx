import { Check } from "lucide-react";

export default function BlueCard({ title, children }) {
  return (
    <div className="w-full p-4">
      <div className="relative">
        {/* Círculo desenfocado */}
        <div className="absolute -left-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#D4A853] opacity-30 blur-md"></div>

        {/* Tarjeta principal */}
        <div className="relative flex items-center gap-4 rounded-2xl bg-[#161616] border border-[#2D2D2D] p-6 min-h-[200px]">
          {/* Círculo con ícono */}
          <div className="absolute -left-10 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4A853]/20 blur-md"></div>
          <div className="absolute -left-7 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4A853]">
            <Check className="h-6 w-6 text-[#0A0A0A]" />
          </div>

          {/* Contenido de texto */}
          <div className="ml-8 space-y-1">
            <h2 className="text-xl font-semibold text-white font-manrope">{title}:</h2>
            <p className="text-lg leading-relaxed text-[#A1A1A6] font-inter">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
