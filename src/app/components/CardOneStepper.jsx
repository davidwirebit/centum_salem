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
    <div className="min-h-screen inset-0 z-20 flex items-center justify-center py-8">
      <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow-xl relative">
        <div className="p-6">
          {/* Logo */}
          <div className="flex flex-row justify-center mb-8">
            <Image
              src="/centum-logo-blue.svg"
              alt="Centum Capital"
              width={150}
              height={40}
            />
          </div>

          {isSubmitted ? (
            <div className="text-center space-y-6">
              <h2 className="text-[#212A59] [margin-trim:both] text-center text-xl font-poppins text-[40px] font-normal leading-[48px] tracking-[0px]">
                ¡Gracias por tu solicitud!
              </h2>
              <p className="text-[#212A59] text-lg">
                Hemos recibido tu información correctamente. Nos pondremos en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-2 rounded font-poppins text-base leading-normal transition-all duration-200 bg-[#212A59] text-white hover:bg-[#1a2247]"
              >
                Ir a la página principal
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-[#212A59] [margin-trim:both] text-center text-xl font-poppins text-[40px] font-normal leading-[48px] tracking-[0px]">
                  Completa tu solicitud ingresando tus datos
                </h2>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-navy-700 mt-4">
                      <span className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]">
                        Nombre del negocio *
                      </span>
                      <input
                        type="text"
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showValidation && emailError && !formData.businessName ? 'border-red-500' : ''}`}
                        placeholder="Ingresa el nombre de tu negocio"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      />
                    </label>

                    <label className="block text-navy-700">
                      <span className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]">
                        ¿De qué producto busca información? *
                      </span>
                      <select
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                      >
                        <option value="Creditos PYME">Créditos Pyme</option>
                        <option value="Pasarela de Pagos">Pasarela de Pagos</option>
                      </select>
                    </label>

                    <label className="block text-navy-700">
                      <span className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]">
                        Escribe tu correo electrónico *
                      </span>
                      <input
                        type="email"
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showValidation && emailError ? 'border-red-500' : ''}`}
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </label>

                    <label className="block text-navy-700">
                      <span className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]">
                        Confirma tu correo electrónico *
                      </span>
                      <input
                        type="email"
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showValidation && emailError ? 'border-red-500' : ''}`}
                        placeholder="ejemplo@correo.com"
                        value={formData.confirmEmail}
                        onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                      />
                    </label>

                    <label className="block text-navy-700">
                      <span className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]">
                        Escribe tu número de celular *
                      </span>
                      <div className="flex">
                        {/* <div className="flex items-center px-3 border rounded-l bg-gray-50">
                          <div id="selected-flag" className="mr-2"></div>
                          <span id="dial-code">+52</span>
                        </div> */}
                        <input
                          id="phone-input"
                          type="tel"
                          className={`flex-1 p-2 border border-l-0 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500 ${showValidation && emailError ? 'border-red-500' : ''}`}
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
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}

                    <div className="flex items-center gap-4">
                      <input 
                        type="checkbox" 
                        className="mt-1 w-6 h-6" 
                        id="privacy" 
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      />
                      <label
                        htmlFor="privacy"
                        className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[12px] font-normal leading-[20px] tracking-[0px]"
                      >
                        Al continuar aceptas <br /> nuestro{" "}
                        <a
                          target="_blank"
                          href="/aviso-privacidad"
                          className="underline underline-offset-2"
                        >
                          Aviso de Privacidad
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-1 rounded font-poppins text-base leading-normal transition-all duration-200 bg-[#212A59] text-white hover:bg-[#1a2247]"
                >
                  Enviar
                </button>
                {!privacyAccepted && (
                  <span className="text-sm text-red-500">
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
