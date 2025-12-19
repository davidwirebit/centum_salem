"use client";

import { useState } from "react";
import {
  CreditCard,
  Wallet,
  Building2,
  Users,
  ChevronRight,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Star,
} from "lucide-react";

export default function MoodboardPage() {
  const [copiedColor, setCopiedColor] = useState(null);
  const [activeBrand, setActiveBrand] = useState("salem-apple"); // "endless", "salem", or "salem-apple"
  const [activeFont, setActiveFont] = useState("poppins"); // "poppins", "satoshi", or "manrope"

  const fontClasses = {
    poppins: "font-poppins",
    satoshi: "font-satoshi",
    manrope: "font-manrope",
  };

  const brandColors = {
    endless: {
      primary: [
        { name: "Navy Dark", hex: "#212A59", usage: "Navbar, headings" },
        { name: "Navy", hex: "#1e2756", usage: "Footer, cards" },
        { name: "Navy Deep", hex: "#0e1d49", usage: "Gradients" },
        { name: "Dark", hex: "#080d14", usage: "Gradient start" },
      ],
      accent: [
        { name: "Gold", hex: "#FCC202", usage: "Highlights, CTAs" },
        { name: "Gold Bright", hex: "#FFC600", usage: "Buttons" },
        { name: "Gold Hover", hex: "#FFB800", usage: "Button hover" },
      ],
      neutral: [
        { name: "Gray Light", hex: "#B8BDD3", usage: "Footer text" },
        { name: "Gray", hex: "#9EA3BB", usage: "Secondary text" },
        { name: "Blue Accent", hex: "#386EB1", usage: "Decorative" },
      ],
    },
    salem: {
      primary: [
        { name: "Black", hex: "#0A0A0A", usage: "Navbar, headings" },
        { name: "Charcoal", hex: "#141414", usage: "Footer, cards" },
        { name: "Dark Gray", hex: "#1A1A1A", usage: "Gradients" },
        { name: "Soft Black", hex: "#0F0F0F", usage: "Gradient start" },
      ],
      accent: [
        { name: "Gold", hex: "#FCC202", usage: "Highlights, CTAs" },
        { name: "Gold Bright", hex: "#FFC600", usage: "Buttons" },
        { name: "Gold Hover", hex: "#FFB800", usage: "Button hover" },
      ],
      neutral: [
        { name: "Silver", hex: "#A0A0A0", usage: "Footer text" },
        { name: "Dim Gray", hex: "#6B6B6B", usage: "Secondary text" },
        { name: "White", hex: "#FFFFFF", usage: "Primary text" },
      ],
    },
    "salem-apple": {
      primary: [
        { name: "Black", hex: "#000000", usage: "Navbar, headings" },
        { name: "Rich Black", hex: "#1D1D1F", usage: "Footer, cards" },
        { name: "Dark Gray", hex: "#2D2D2D", usage: "Gradients" },
        { name: "Charcoal", hex: "#161617", usage: "Gradient end" },
      ],
      accent: [
        { name: "White", hex: "#FFFFFF", usage: "Primary CTA text" },
        { name: "Silver", hex: "#A1A1A6", usage: "Secondary elements" },
        { name: "Muted Gold", hex: "#D4A853", usage: "Links, interactive" },
      ],
      neutral: [
        { name: "Gray 1", hex: "#86868B", usage: "Body text" },
        { name: "Gray 2", hex: "#6E6E73", usage: "Secondary text" },
        { name: "Gray 3", hex: "#F5F5F7", usage: "Light backgrounds" },
      ],
    },
  };

  const colors = brandColors[activeBrand];

  // Theme colors based on active brand
  const theme = {
    endless: {
      headerBg: "#212A59",
      footerBg: "#1e2756",
      headingText: "#212A59",
      cardDarkBg: "#212A59",
      gradientFrom: "#080d14",
      gradientTo: "#0e1d49",
      outlineBg: "#212A59",
      accentColor: "#FFC600",
      accentHover: "#FFB800",
      accentText: "#FCC202",
      buttonText: "#FFFFFF",
    },
    salem: {
      headerBg: "#0A0A0A",
      footerBg: "#141414",
      headingText: "#0A0A0A",
      cardDarkBg: "#0A0A0A",
      gradientFrom: "#0A0A0A",
      gradientTo: "#1A1A1A",
      outlineBg: "#0A0A0A",
      accentColor: "#FFC600",
      accentHover: "#FFB800",
      accentText: "#FCC202",
      buttonText: "#FFFFFF",
    },
    "salem-apple": {
      headerBg: "#0A0A0A",
      footerBg: "#111111",
      headingText: "#1D1D1F",
      cardDarkBg: "#161616",
      gradientFrom: "#0A0A0A",
      gradientTo: "#161616",
      outlineBg: "#0A0A0A",
      accentColor: "#FFFFFF",
      accentHover: "#F5F5F7",
      accentText: "#D4A853",
      buttonText: "#000000",
    },
  }[activeBrand];

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Brand & Font Switcher */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
            {/* Brand Switcher */}
            <div className="flex items-center gap-3">
              <span className="font-inter text-sm text-gray-500">Brand:</span>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setActiveBrand("endless")}
                  className={`px-3 py-1.5 rounded-lg font-inter text-sm font-semibold transition-all ${
                    activeBrand === "endless"
                      ? "bg-[#212A59] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Endless
                </button>
                <button
                  onClick={() => setActiveBrand("salem")}
                  className={`px-3 py-1.5 rounded-lg font-inter text-sm font-semibold transition-all ${
                    activeBrand === "salem"
                      ? "bg-[#0A0A0A] text-[#FFC600]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Salem + Gold
                </button>
                <button
                  onClick={() => setActiveBrand("salem-apple")}
                  className={`px-3 py-1.5 rounded-lg font-inter text-sm font-semibold transition-all ${
                    activeBrand === "salem-apple"
                      ? "bg-[#000000] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Salem + Apple
                </button>
              </div>
            </div>

            {/* Font Switcher */}
            <div className="flex items-center gap-3">
              <span className="font-inter text-sm text-gray-500">Heading font:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveFont("poppins")}
                  className={`px-3 py-1.5 rounded-lg font-poppins text-sm font-semibold transition-all ${
                    activeFont === "poppins"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Poppins
                </button>
                <button
                  onClick={() => setActiveFont("satoshi")}
                  className={`px-3 py-1.5 rounded-lg font-satoshi text-sm font-semibold transition-all ${
                    activeFont === "satoshi"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Satoshi
                </button>
                <button
                  onClick={() => setActiveFont("manrope")}
                  className={`px-3 py-1.5 rounded-lg font-manrope text-sm font-semibold transition-all ${
                    activeFont === "manrope"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Manrope
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="py-8 px-6 transition-colors duration-300"
        style={{ backgroundColor: theme.headerBg }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className={`text-white ${fontClasses[activeFont]} text-4xl font-bold`}>
            {activeBrand === "endless" ? "Endless" : "Salem"} Brand Moodboard
            {activeBrand === "salem-apple" && " — Apple Style"}
          </h1>
          <p className="text-[#86868B] font-inter text-lg mt-2">
            {activeBrand === "endless" && "Current navy blue + gold palette"}
            {activeBrand === "salem" && "Dark black + gold palette"}
            {activeBrand === "salem-apple" && "Pure black + white/silver (Apple-inspired)"}
            {" • "}{activeFont.charAt(0).toUpperCase() + activeFont.slice(1)} headings
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* COLOR PALETTE */}
        <section>
          <h2
            className={`${fontClasses[activeFont]} text-3xl font-bold mb-8 transition-colors`}
            style={{ color: theme.headingText }}
          >
            Color Palette
          </h2>

          <div className="space-y-8">
            {Object.entries(colors).map(([category, colorList]) => (
              <div key={category}>
                <h3 className="font-inter text-lg font-semibold text-gray-600 mb-4 capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {colorList.map((color) => (
                    <div
                      key={color.hex}
                      className="group cursor-pointer"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      <div
                        className="h-24 rounded-xl shadow-md transition-transform group-hover:scale-105 flex items-end p-3"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className={`text-xs font-mono ${
                            category === "accent" ? "text-[#212A59]" : "text-white"
                          }`}
                        >
                          {copiedColor === color.hex ? "Copied!" : color.hex}
                        </span>
                      </div>
                      <p
                        className="mt-2 font-inter font-medium transition-colors"
                        style={{ color: theme.headingText }}
                      >
                        {color.name}
                      </p>
                      <p className="text-sm text-gray-500">{color.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section>
          <h2
            className={`${fontClasses[activeFont]} text-3xl font-bold mb-8 transition-colors`}
            style={{ color: theme.headingText }}
          >
            Typography
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Heading Font */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="font-inter text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {activeFont.charAt(0).toUpperCase() + activeFont.slice(1)} — Headings
              </h3>
              <div className="space-y-4">
                <p
                  className={`${fontClasses[activeFont]} text-5xl font-bold transition-colors`}
                  style={{ color: theme.headingText }}
                >
                  Innovando
                </p>
                <p
                  className={`${fontClasses[activeFont]} text-4xl font-bold transition-colors`}
                  style={{ color: theme.headingText }}
                >
                  Seriamente
                </p>
                <p
                  className={`${fontClasses[activeFont]} text-3xl font-semibold transition-colors`}
                  style={{ color: theme.headingText }}
                >
                  Soluciones financieras
                </p>
                <p
                  className={`${fontClasses[activeFont]} text-2xl font-medium transition-colors`}
                  style={{ color: theme.headingText }}
                >
                  Crédito y tecnología
                </p>
                <p
                  className={`${fontClasses[activeFont]} text-xl transition-colors`}
                  style={{ color: theme.headingText }}
                >
                  Para ti o tu empresa
                </p>
              </div>
            </div>

            {/* Inter */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="font-inter text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Inter — Body & UI
              </h3>
              <div className="space-y-4">
                <p
                  className="font-inter text-xl transition-colors"
                  style={{ color: theme.headingText }}
                >
                  Regular 20px — Navigation links
                </p>
                <p className="font-inter text-lg text-gray-600">
                  Regular 18px — Body text and descriptions for longer content
                  that needs to be readable.
                </p>
                <p className="font-inter text-base text-gray-600">
                  Regular 16px — Secondary body text, form labels, and helper
                  text.
                </p>
                <p
                  className="font-inter text-sm font-semibold transition-colors"
                  style={{ color: theme.headingText }}
                >
                  Semibold 14px — Buttons & labels
                </p>
                <p className="font-inter text-xs text-gray-500">
                  Regular 12px — Captions, footnotes, legal text
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUTTONS */}
        <section>
          <h2
            className={`${fontClasses[activeFont]} text-3xl font-bold mb-8 transition-colors`}
            style={{ color: theme.headingText }}
          >
            Buttons
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Buttons */}
              <div>
                <h3 className="font-inter text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Primary ({activeBrand === "salem-apple" ? "White" : "Gold"})
                </h3>
                <div className="space-y-4">
                  <button
                    className="px-8 py-4 text-lg rounded-lg transition-colors font-inter font-bold"
                    style={{
                      backgroundColor: theme.accentColor,
                      color: theme.buttonText,
                    }}
                  >
                    Contacta un agente
                  </button>
                  <br />
                  <button
                    className="px-6 py-3 rounded-lg transition-colors font-inter font-semibold"
                    style={{
                      backgroundColor: theme.accentColor,
                      color: theme.buttonText,
                    }}
                  >
                    Solicitar ahora
                  </button>
                  <br />
                  <button
                    className="px-4 py-2 text-sm rounded-lg transition-colors font-inter font-semibold"
                    style={{
                      backgroundColor: theme.accentColor,
                      color: theme.buttonText,
                    }}
                  >
                    Ver más
                  </button>
                </div>
              </div>

              {/* Outline Buttons */}
              <div>
                <h3 className="font-inter text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Outline & Links
                </h3>
                <div
                  className="space-y-4 p-6 rounded-xl transition-colors"
                  style={{ backgroundColor: theme.outlineBg }}
                >
                  <button className="flex items-center space-x-3 text-white px-4 py-2 rounded-2xl border-2 border-white hover:bg-white/10 transition-colors">
                    <span className="font-inter text-sm font-semibold">
                      Descargar App
                    </span>
                  </button>
                  <br />
                  <button
                    className="font-inter text-lg font-semibold flex items-center gap-2"
                    style={{ color: theme.accentText }}
                  >
                    Contacta un agente
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section>
          <h2
            className={`${fontClasses[activeFont]} text-3xl font-bold mb-8 transition-colors`}
            style={{ color: theme.headingText }}
          >
            Cards
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${theme.accentColor}20` }}
              >
                <CreditCard style={{ color: theme.accentColor }} size={24} />
              </div>
              <h3
                className={`${fontClasses[activeFont]} text-xl font-bold mb-2 transition-colors`}
                style={{ color: theme.headingText }}
              >
                Tarjetas Centum
              </h3>
              <p className="font-inter text-gray-600 mb-4">
                Descubre nuestras tarjetas con beneficios exclusivos para ti.
              </p>
              <button
                className="font-inter font-semibold flex items-center gap-1"
                style={{ color: theme.accentText }}
              >
                Conocer más <ChevronRight size={18} />
              </button>
            </div>

            {/* Dark Card */}
            <div
              className="rounded-2xl p-6 shadow-md transition-colors"
              style={{ backgroundColor: theme.cardDarkBg }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: theme.accentColor }}
              >
                <Wallet style={{ color: theme.buttonText }} size={24} />
              </div>
              <h3 className={`${fontClasses[activeFont]} text-xl font-bold text-white mb-2`}>
                Adelanto de Nómina
              </h3>
              <p className="font-inter text-[#86868B] mb-4">
                Obtén tu adelanto de nómina de forma rápida y sencilla.
              </p>
              <button
                className="font-inter font-semibold flex items-center gap-1"
                style={{ color: theme.accentText }}
              >
                Solicitar <ChevronRight size={18} />
              </button>
            </div>

            {/* Gradient Card */}
            <div
              className="rounded-2xl p-6 shadow-md transition-colors"
              style={{
                background: `linear-gradient(to bottom right, ${theme.gradientFrom}, ${theme.gradientTo})`,
              }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 style={{ color: theme.accentColor }} size={24} />
              </div>
              <h3 className={`${fontClasses[activeFont]} text-xl font-bold text-white mb-2`}>
                Crédito PyME
              </h3>
              <p className="font-inter text-[#86868B] mb-4">
                Impulsa tu negocio con nuestros créditos empresariales.
              </p>
              <button
                className="px-4 py-2 rounded-lg font-inter font-semibold"
                style={{ backgroundColor: theme.accentColor, color: theme.buttonText }}
              >
                Comenzar
              </button>
            </div>
          </div>
        </section>

        {/* ICONS */}
        <section>
          <h2
            className={`${fontClasses[activeFont]} text-3xl font-bold mb-8 transition-colors`}
            style={{ color: theme.headingText }}
          >
            Icons (Lucide React)
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {[
                { icon: CreditCard, name: "CreditCard" },
                { icon: Wallet, name: "Wallet" },
                { icon: Building2, name: "Building2" },
                { icon: Users, name: "Users" },
                { icon: ChevronRight, name: "ChevronRight" },
                { icon: Check, name: "Check" },
                { icon: ArrowRight, name: "ArrowRight" },
                { icon: Phone, name: "Phone" },
                { icon: Mail, name: "Mail" },
                { icon: Star, name: "Star" },
              ].map(({ icon: Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Icon style={{ color: theme.headingText }} size={24} />
                  </div>
                  <span className="text-xs text-gray-500 font-inter">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GRADIENTS */}
        <section>
          <h2
            className={`${fontClasses[activeFont]} text-3xl font-bold mb-8 transition-colors`}
            style={{ color: theme.headingText }}
          >
            Gradients
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="h-40 rounded-2xl flex items-end p-4 transition-colors"
              style={{
                background: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`,
              }}
            >
              <span className="text-white font-inter text-sm">
                Hero gradient: {theme.gradientFrom} → {theme.gradientTo}
              </span>
            </div>
            <div
              className="h-40 rounded-2xl flex items-end p-4 transition-colors"
              style={{
                background: `linear-gradient(to bottom, ${theme.headerBg}, ${theme.footerBg})`,
              }}
            >
              <span className="text-white font-inter text-sm">
                Vertical: {theme.headerBg} → {theme.footerBg}
              </span>
            </div>
          </div>
        </section>

        {/* SAMPLE COMPONENT */}
        <section>
          <h2
            className={`${fontClasses[activeFont]} text-3xl font-bold mb-8 transition-colors`}
            style={{ color: theme.headingText }}
          >
            Sample Hero Section
          </h2>

          <div
            className="rounded-2xl overflow-hidden p-12 transition-colors"
            style={{
              background: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`,
            }}
          >
            <div className="max-w-xl">
              <h1 className={`${fontClasses[activeFont]} text-5xl font-bold text-white mb-2`}>
                Innovando
              </h1>
              <h1
                className={`${fontClasses[activeFont]} text-5xl font-bold mb-6`}
                style={{ color: theme.accentText }}
              >
                Seriamente
              </h1>
              <p className="font-inter text-xl text-white/80 mb-8">
                Soluciones financieras, crédito y tecnología para ti o tu
                empresa.
              </p>
              <button
                className="px-8 py-4 rounded-lg transition-colors font-inter font-bold"
                style={{ backgroundColor: theme.accentColor, color: theme.buttonText }}
              >
                Contacta un agente
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-6 px-6 mt-12 transition-colors"
        style={{ backgroundColor: theme.footerBg }}
      >
        <p className="text-center text-[#9EA3BB] font-inter text-sm">
          {activeBrand === "salem" ? "Salem" : "Endless"} Brand Moodboard — For internal use
        </p>
      </footer>
    </div>
  );
}
