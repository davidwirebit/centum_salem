import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardLanding({
  icon,
  title,
  children,
  link = "#",
}) {
  return (
    <div
      className="w-full max-w-[370px] h-auto min-h-[350px] md:h-[400px] p-6 md:p-8 rounded-3xl bg-[#161616] border border-[#2D2D2D]
        hover:border-[#D4A853]/50 backdrop-blur-sm transition-all duration-300
        hover:scale-105"
    >
      <Link href={link} className="w-full h-full">
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div
            className="w-[114px] h-[114px] mb-6 rounded-full bg-[#1D1D1F] flex items-center justify-center
            transition-transform duration-300 hover:scale-110"
          >
            <Image src={icon} alt={title} width={50} height={50} />
          </div>

          <h2 className="text-white font-manrope text-xl font-bold leading-[52px] tracking-[0px]">
            {title}
          </h2>

          <p className="text-[#A1A1A6] text-center font-inter text-lg font-normal leading-[30px]">
            {children}
          </p>
        </div>
      </Link>
    </div>
  );
}
