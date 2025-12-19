"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalSelectCard from "./ModalSelectCard";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navItems = {
    "Soluciones Empresariales": [
      { id: 1, title: "Pasarela de pagos", link: "/pasarela-pagos" },
      { id: 2, title: "Terminales TPV", link: "/form-two?form=terminales-tpv" },
    ],
  };

  const handleMobileSubmenu = (key) => {
    setActiveSubmenu(activeSubmenu === key ? null : key);
  };

  return (
    <>
      <nav className="bg-[#0A0A0A] h-[100px] flex">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/centum-logo.svg"
                alt="Centum Capital"
                width={160}
                height={100}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {Object.entries(navItems).map(([title, items]) => (
              <div
                key={title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-2 py-2">
                  <span className="text-white font-inter text-base font-medium group-hover:text-[#D4A853] transition-colors">
                    {title}
                  </span>
                  <Image
                    src="/arrow-down.svg"
                    width={8}
                    height={12}
                    alt="Arrow Down"
                    className={`transition-transform duration-200 ${activeDropdown === title ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full pt-2 w-56 z-50 transition-all duration-200 ${
                    activeDropdown === title
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-[#161616] rounded-lg shadow-xl py-2 border border-[#2D2D2D]">
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="block px-4 py-2.5 text-[#A1A1A6] hover:text-[#D4A853] hover:bg-[#1D1D1F] font-inter text-sm transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/tarjetas-centumpay"
              className="text-white font-inter text-base font-medium hover:text-[#D4A853] transition-colors cursor-pointer py-2"
            >
              Tarjetas Centum
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="hidden md:flex items-center bg-white text-[#0A0A0A] px-5 py-2.5 rounded-lg font-inter text-sm font-semibold hover:bg-[#F5F5F7] transition-colors"
              onClick={() => setDownloadModal(true)}
            >
              Descargar App
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-[#0A0A0A] z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#2D2D2D] min-h-[100px]">
            <Image
              src="/centum-logo.svg"
              alt="Centum Capital"
              width={120}
              height={40}
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-2">
            {Object.entries(navItems).map(([title, items]) => (
              <div key={title} className="border-b border-[#2D2D2D]">
                <div
                  className="flex items-center justify-between py-4 text-white cursor-pointer"
                  onClick={() => handleMobileSubmenu(title)}
                >
                  <span className="font-inter text-base">{title}</span>
                  <svg
                    className={`h-5 w-5 text-[#A1A1A6] transition-transform ${activeSubmenu === title ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSubmenu === title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 pb-4 space-y-3">
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="block py-2 text-[#A1A1A6] hover:text-[#D4A853] font-inter text-sm transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/tarjetas-centumpay"
              className="flex items-center justify-between py-4 text-white border-b border-[#2D2D2D] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
              }}
            >
              <span className="font-inter text-base">Tarjetas Centum</span>
              <svg className="h-5 w-5 text-[#A1A1A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="pt-6">
              <button
                className="w-full bg-white text-[#0A0A0A] py-3 rounded-lg font-inter font-semibold hover:bg-[#F5F5F7] transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setDownloadModal(true);
                }}
              >
                Descargar App
              </button>
            </div>
          </div>
        </div>
      {downloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#111111] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#2D2D2D] overflow-hidden">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setDownloadModal(false)}
                className="text-[#A1A1A6] hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 px-8 pb-10">
              <div className="w-full md:w-1/2">
                <Image
                  src="/centumpay-tarjetas.webp"
                  alt="Hero Tarjetas Centum"
                  width={400}
                  height={350}
                  className="w-full"
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <Image
                  src="/centum-logo.svg"
                  alt="Centum Capital"
                  width={120}
                  height={40}
                  className="mb-6 mx-auto md:mx-0"
                />

                <h2 className="text-white font-manrope text-2xl font-bold mb-2">
                  App Centum
                </h2>
                <p className="text-[#A1A1A6] font-inter text-base mb-6">
                  Descarga nuestra App y comienza ya
                </p>

                <div className="flex justify-center md:justify-start gap-4">
                  <Link href="https://apps.apple.com/mx/app/centum-capital/id6737005550" target="_blank">
                    <Image
                      src="/apple-gray.svg"
                      alt="App Store"
                      width={130}
                      height={44}
                    />
                  </Link>

                  <Link href="https://play.google.com/store/apps/details?id=efevoopay.centum.cardpay&hl=es_MX" target="_blank">
                    <Image
                      src="/google-gray.svg"
                      alt="Google Play"
                      width={130}
                      height={44}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
