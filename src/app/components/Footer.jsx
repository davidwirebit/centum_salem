import Link from "next/link";
import Image from "next/image";
import { phone, email, linkedin, facebook, instagram, whatsapp } from "../data.js";

export default function Footer() {
  const navLinks = {
    "Soluciones": [
      { title: "Pasarela de pagos", href: "/pasarela-pagos" },
      { title: "Terminales TPV", href: "/form-two?form=terminales-tpv" },
      { title: "Tarjetas", href: "/tarjetas-centumpay" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: linkedin, icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.983 2.12 4.983 3.5ZM0.269 8.5H4.731V24H0.269V8.5ZM8.654 8.5H12.913V10.603H12.969C13.583 9.548 14.978 8.435 17.073 8.435C21.19 8.435 21.999 10.967 21.999 14.803V24H17.53V15.687C17.53 13.657 17.487 11.126 14.997 11.126C12.465 11.126 12.092 13.304 12.092 15.538V24H7.629V8.5H8.654Z"/>
      </svg>
    )},
    { name: "Facebook", href: facebook, icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )},
    { name: "Instagram", href: instagram, icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )},
    { name: "WhatsApp", href: whatsapp, icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )},
  ];

  return (
    <footer className="bg-[#111111] border-t border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/centum-logo.svg"
                alt="Centum Logo"
                width={120}
                height={40}
                className="mb-6"
              />
            </Link>
            <p className="text-[#6E6E73] font-inter text-sm leading-relaxed mb-6">
              Soluciones financieras, crédito y tecnología para ti o tu empresa.
            </p>
            {/* App Store Links */}
            <div className="flex gap-3">
              <Link href="https://apps.apple.com/mx/app/centum-capital/id6737005550" target="_blank">
                <Image
                  src="/apple-gray.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=efevoopay.centum.cardpay&hl=es_MX" target="_blank">
                <Image
                  src="/google-gray.svg"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
          </div>

          {/* Nav Links Columns */}
          {Object.entries(navLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-manrope font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#A1A1A6] hover:text-[#D4A853] font-inter text-sm transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-manrope font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-[#A1A1A6] font-inter text-sm">
              <li>{phone}</li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-[#D4A853] transition-colors">
                  {email}
                </a>
              </li>
              <li className="pt-4">
                <span className="text-white font-semibold">Horario</span>
                <br />
                Lunes a Viernes
                <br />
                9am a 6pm
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-[#2D2D2D]">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="text-[#6E6E73] hover:text-[#D4A853] transition-colors"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-8 border-t border-[#2D2D2D]">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link href="/aviso-privacidad-salem" className="text-[#6E6E73] hover:text-[#D4A853] font-inter text-xs transition-colors">
              Aviso de privacidad
            </Link>
            <Link href="/terminos-condiciones-salem" className="text-[#6E6E73] hover:text-[#D4A853] font-inter text-xs transition-colors">
              Términos y condiciones
            </Link>
            <Link href="#" className="text-[#6E6E73] hover:text-[#D4A853] font-inter text-xs transition-colors">
              Política de Seguridad
            </Link>
          </div>

          <div className="text-center text-[#6E6E73] font-inter text-xs">
            Salem Internacional {new Date().getFullYear()} © Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}
