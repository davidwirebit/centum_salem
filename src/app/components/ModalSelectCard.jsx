"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ModalSelectCard({ setIsModalSelectCardOpen }) {
  const [selectedOption, setSelectedOption] = useState(
    "Tarjeta de crédito Centum"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();

  const options = ["Tarjeta de crédito Centum", "Tarjeta de nómina"];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#111111] rounded-2xl max-w-md w-full border border-[#2D2D2D]">
        <div className="p-6 flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="mb-4 flex flex-row justify-between w-full">
            <div className="w-[35px] h-[35px]"></div>
            <Image
              src="/centum-logo.svg"
              alt="Centum Logo"
              width={150}
              height={150}
            />

            <button
              className="text-[#A1A1A6] hover:text-white transition-colors"
              onClick={() => setIsModalSelectCardOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Title */}
          <h2 className="text-white text-center font-manrope text-[24px] font-semibold tracking-[0px]">
            Elige entre nuestras <br /> opciones para solicitar tu <br />
            tarjeta Centum
          </h2>

          {/* Dropdown */}
          <div className="w-full mb-4">
            <div
              className="relative w-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="w-full p-4 border border-[#2D2D2D] rounded-lg bg-[#161616] flex justify-between items-center">
                <span className="text-[#A1A1A6] font-inter">{selectedOption}</span>
                <svg
                  className={`w-5 h-5 text-[#D4A853] transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-[#161616] border border-[#2D2D2D] rounded-lg shadow-lg z-50">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="p-4 hover:bg-[#1D1D1F] cursor-pointer text-[#A1A1A6] hover:text-[#D4A853] font-inter transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => {
                        setSelectedOption(option);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Next Button */}
          <button
            className="px-12 bg-white hover:bg-[#F5F5F7] text-[#0A0A0A] py-3 rounded-lg text-lg font-semibold transition-colors font-inter"
            onClick={() => {
              const formParam = selectedOption === "Tarjeta de crédito Centum"
                ? "tarjeta-centum"
                : "tarjeta-nomina";
              router.push(`/form-two?form=${formParam}`);
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
