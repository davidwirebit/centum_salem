"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import municipalitiesData from '../data/municipios.json';
import countriesData from '../data/paises.json';

export default function CardOneStepper() {
  const searchParams = useSearchParams();
  const formType = searchParams.get('form') || 'default';
  const [privacyAccepted, setPrivacyAccepted] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [showValidation, setShowValidation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(formType === 'creditos-pyme' ? 'Creditos pyme' : 'Pasarela de Pagos');
  const [selectedCountry, setSelectedCountry] = useState({
    code: "mx",
    name: "México",
    dialCode: "52"
  });

  useEffect(() => {
    // Load intl-tel-input CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css';
    document.head.appendChild(link);

    // Load intl-tel-input script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const input = document.querySelector("#phone-input");
      if (input && window.intlTelInput) {
        const iti = window.intlTelInput(input, {
          initialCountry: "mx",
          separateDialCode: true,
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });

        // Set initial value
        setFormData(prev => ({
          ...prev,
          phone: ''
        }));

        // Update phone number when country changes
        input.addEventListener("countrychange", function () {
          const countryData = iti.getSelectedCountryData();
          const currentNumber = input.value.replace(/\D/g, '');
          setSelectedCountry({
            code: countryData.iso2,
            name: countryData.name,
            dialCode: countryData.dialCode
          });
          setFormData(prev => ({
            ...prev,
            phone: currentNumber
          }));
        });

        // Update phone number when input changes
        input.addEventListener("input", function () {
          const number = input.value.replace(/\D/g, '');
          setFormData(prev => ({
            ...prev,
            phone: number
          }));
        });
      }
    };

    return () => {
      // Cleanup
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = useMemo(() => {
    if (!privacyAccepted) {
      setEmailError('Debes aceptar el aviso de privacidad para continuar');
      return false;
    }
    if (!formData.businessName) {
      setEmailError('El nombre del negocio es obligatorio');
      return false;
    }
    if (!formData.email) {
      setEmailError('El correo electrónico es obligatorio');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setEmailError('Ingresa un correo electrónico válido');
      return false;
    }
    if (formData.email !== formData.confirmEmail) {
      setEmailError('Los correos electrónicos no coinciden');
      return false;
    }
    if (!formData.phone) {
      setEmailError('El número de teléfono es obligatorio');
      return false;
    }
    // if (formData.phone.length !== 10) {
    //   setEmailError('El número de teléfono debe tener 10 dígitos');
    //   return false;
    // }
    setEmailError('');
    return true;
  }, [formData.businessName, formData.email, formData.confirmEmail, formData.phone, privacyAccepted]);

  const handleSubmit = async () => {
    setShowValidation(true);
    if (!isFormValid) {
      return;
    }

    try {
      const response = await fetch('/api/unpaso-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company: formData.businessName,
          email: formData.email,
          product: selectedProduct,
          phone: `+${selectedCountry.dialCode}${formData.phone}`
        })
      });

      if (response.ok) {
        console.log('Formulario enviado exitosamente');
        setIsSubmitted(true);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const errorData = await response.json();
        console.error('Error al enviar formulario:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen inset-0 z-20 flex items-center justify-center py-8 px-4 bg-[#0A0A0A]">
      <div className="max-w-3xl w-full mx-auto bg-[#111111] rounded-2xl border border-[#2D2D2D] relative">
        <div className="p-4 md:p-6">
          {/* Logo */}
          <div className="flex flex-row justify-center mb-8">
            <Image
              src="/centum-logo.svg"
              alt="Centum Capital"
              width={150}
              height={40}
            />
          </div>

          {isSubmitted ? (
            <div className="text-center space-y-6">
              <h2 className="text-white font-manrope text-center text-[24px] md:text-[32px] font-semibold leading-[120%] md:leading-[40px]">
                ¡Gracias por tu solicitud!
              </h2>
              <p className="text-[#A1A1A6] text-lg font-inter">
                Hemos recibido tu información correctamente. Nos pondremos en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full md:w-auto px-8 py-3 rounded-lg font-inter text-base font-semibold leading-normal transition-all duration-200 bg-white text-[#0A0A0A] hover:bg-[#F5F5F7]"
              >
                Ir a la página principal
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 md:mb-8">
                <h2 className="text-white font-manrope text-center text-[22px] md:text-[32px] font-semibold leading-[28px] md:leading-[40px] mb-4 md:mb-6">
                  Completa tu solicitud ingresando tus datos
                </h2>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="block mt-4">
                      <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] mb-2 block">
                        Nombre del negocio *
                      </span>
                      <input
                        type="text"
                        className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showValidation && emailError && !formData.businessName ? 'border-red-500' : ''}`}
                        placeholder="Ingresa el nombre de tu negocio"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      />
                    </label>

                    <label className="block">
                      <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] mb-2 block">
                        ¿De qué producto busca información? *
                      </span>
                      <select
                        className="w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:border-[#D4A853]"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                      >
                        <option value="Creditos PYME" className="bg-[#161616]">Créditos Pyme</option>
                        <option value="Pasarela de Pagos" className="bg-[#161616]">Pasarela de Pagos</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] mb-2 block">
                        Escribe tu correo electrónico *
                      </span>
                      <input
                        type="email"
                        className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showValidation && emailError ? 'border-red-500' : ''}`}
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </label>

                    <label className="block">
                      <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] mb-2 block">
                        Confirma tu correo electrónico *
                      </span>
                      <input
                        type="email"
                        className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showValidation && emailError ? 'border-red-500' : ''}`}
                        placeholder="ejemplo@correo.com"
                        value={formData.confirmEmail}
                        onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                      />
                    </label>

                    <label className="block">
                      <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] mb-2 block">
                        Escribe tu número de celular *
                      </span>
                      <div className="w-full transition-all duration-300">
                        <input
                          id="phone-input"
                          type="tel"
                          className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showValidation && emailError ? 'border-red-500' : ''}`}
                          placeholder="22 2234 5670"
                          value={formData.phone}
                          onChange={(e) => {
                            const number = e.target.value.replace(/\D/g, '');
                            setFormData(prev => ({
                              ...prev,
                              phone: number
                            }));
                          }}
                          maxLength={14}
                        />
                      </div>
                    </label>

                    {showValidation && emailError && (
                      <p className="text-red-400 text-sm mt-1">{emailError}</p>
                    )}

                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="mt-1 w-6 h-6 accent-[#D4A853]"
                        id="privacy"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      />
                      <label
                        htmlFor="privacy"
                        className="text-[#A1A1A6] font-inter text-[12px] font-normal leading-[20px]"
                      >
                        Al continuar aceptas <br /> nuestro{" "}
                        <a
                          target="_blank"
                          href="/aviso-privacidad-salem"
                          className="text-[#D4A853] underline underline-offset-2 hover:text-white transition-colors"
                        >
                          Aviso de Privacidad
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center md:items-end gap-2">
                <button
                  onClick={handleSubmit}
                  className="w-full md:w-auto px-8 py-3 rounded-lg font-inter text-base font-semibold leading-normal transition-all duration-200 bg-white text-[#0A0A0A] hover:bg-[#F5F5F7]"
                >
                  Enviar
                </button>
                {!privacyAccepted && (
                  <span className="text-sm text-red-400">
                    Debes aceptar el aviso de privacidad para continuar
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
