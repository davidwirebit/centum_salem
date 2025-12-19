"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import municipalitiesData from '../data/municipios.json';
import countriesData from '../data/paises.json';

export default function CardStepper() {
  const searchParams = useSearchParams();
  const formType = searchParams.get('form') || 'default';
  const [currentStep, setCurrentStep] = useState(1);
  const [privacyAccepted, setPrivacyAccepted] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [step2Error, setStep2Error] = useState('');
  const [showStep1Validation, setShowStep1Validation] = useState(false);
  const [showStep2Validation, setShowStep2Validation] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "mx",
    name: "México",
    dialCode: "52"
  });
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    phone: "",
    firstName: "",
    lastName: "",
    secondLastName: "",
    gender: "",
    birthDate: "",
    birthCountry: "",
    // birthState: "",
    // curp: "",
    // rfc: "",
    privacyAccepted: "",
    product: formType === 'credito-personal' ? 'Credito Personal' :
             (formType === 'credito-nomina' || formType === 'credito-nominas') ? 'Credito de Nómina' :
             formType === 'pasarela-pagos' ? 'Pasarela de Pagos' :
             formType === 'terminales-tpv' ? 'Terminales TPV' :
             formType === 'tarjeta-centum' ? 'Tarjetas Centum' : 'Adelanto Nómina'
  });

  const [municipalities, setMunicipalities] = useState([]);

  
  const states = Object.keys(municipalitiesData);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStep1Valid = useMemo(() => {
    if (!privacyAccepted) {
      setEmailError('Debes aceptar el aviso de privacidad para continuar');
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
  }, [formData.email, formData.confirmEmail, formData.phone, privacyAccepted]);

  const isStep2Valid = useMemo(() => {
    if (!formData.firstName) {
      setStep2Error('El nombre es obligatorio');
      return false;
    }
    if (!formData.lastName) {
      setStep2Error('El primer apellido es obligatorio');
      return false;
    }
    if (!formData.gender) {
      setStep2Error('Debes seleccionar un género');
      return false;
    }
    if (!formData.birthDate) {
      setStep2Error('La fecha de nacimiento es obligatoria');
      return false;
    }
    if (!formData.birthCountry) {
      setStep2Error('El país de nacimiento es obligatorio');
      return false;
    }
    if (formData.birthCountry === 'MX' && !formData.birthState) {
      setStep2Error('El estado de nacimiento es obligatorio para México');
      return false;
    }

    setStep2Error('');
    return true;
  }, [formData.firstName, formData.lastName, formData.gender, formData.birthDate, 
      formData.birthCountry, formData.birthState]);

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setFormData(prev => ({ 
      ...prev, 
      state: newState, 
      municipality: '',
      colony: '' 
    }));
    
    if (newState) {
      setMunicipalities(municipalitiesData[newState] || []);
    } else {
      setMunicipalities([]);
    }
  };

  const handleMunicipalityChange = (e) => {
    const newMunicipality = e.target.value;
    setFormData(prev => ({ 
      ...prev, 
      municipality: newMunicipality,
      colony: '' 
    }));
  };

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

  const steps = [
    {
      title: "Completa tu solicitud ingresando tus datos",
      fields: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block mt-4">
              <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] tracking-[0px] mb-2 block">
                Escribe tu correo electrónico
              </span>
              <input
                type="email"
                className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showStep1Validation && emailError ? 'border-red-500' : ''}`}
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] tracking-[0px] mb-2 block">
                Confirma tu correo electrónico
              </span>
              <input
                type="email"
                className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showStep1Validation && emailError ? 'border-red-500' : ''}`}
                placeholder="ejemplo@correo.com"
                value={formData.confirmEmail}
                onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="text-[#A1A1A6] font-inter text-[16px] font-normal leading-[20px] tracking-[0px] mb-2 block">
                Escribe tu número de teléfono *
              </span>
              <div className="w-full transition-all duration-300">
                <input
                  id="phone-input"
                  type="tel"
                  className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showStep1Validation && emailError ? 'border-red-500' : ''}`}
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
            {showStep1Validation && emailError && (
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
                className="text-[#A1A1A6] font-inter text-[12px] font-normal leading-[20px] tracking-[0px]"
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
      ),
    },
    {
      title: "Ingresa tu nombre e información personal",
      fields: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block">
              <span className="block mb-2 text-[#A1A1A6] font-inter">Nombre(s) *</span>
              <input
                type="text"
                className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showStep2Validation && step2Error && !formData.firstName ? 'border-red-500' : ''}`}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="block mb-2 text-[#A1A1A6] font-inter">Primer Apellido *</span>
              <input
                type="text"
                className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853] ${showStep2Validation && step2Error && !formData.lastName ? 'border-red-500' : ''}`}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="block mb-2 text-[#A1A1A6] font-inter">Segundo Apellido</span>
              <input
                type="text"
                className="w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white placeholder-[#6E6E73] focus:outline-none focus:border-[#D4A853]"
                value={formData.secondLastName}
                onChange={(e) => setFormData({ ...formData, secondLastName: e.target.value })}
              />
            </label>
            <div>
              <span className="block mb-2 text-[#A1A1A6] font-inter">Género *</span>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-white font-inter">
                  <input
                    type="radio"
                    name="gender"
                    value="mujer"
                    className="accent-[#D4A853]"
                    checked={formData.gender === "mujer"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  />
                  Mujer
                </label>
                <label className="flex items-center gap-2 text-white font-inter">
                  <input
                    type="radio"
                    name="gender"
                    value="hombre"
                    className="accent-[#D4A853]"
                    checked={formData.gender === "hombre"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  />
                  Hombre
                </label>
              </div>
            </div>
            <div>
              <span className="block mb-2 text-[#A1A1A6] font-inter">Fecha de nacimiento *</span>
              <input
                type="date"
                className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:border-[#D4A853] ${showStep2Validation && step2Error && !formData.birthDate ? 'border-red-500' : ''}`}
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>
            <label className="block">
              <span className="block mb-2 text-[#A1A1A6] font-inter">País de nacimiento *</span>
              <select
                className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:border-[#D4A853] ${showStep2Validation && step2Error && !formData.birthCountry ? 'border-red-500' : ''}`}
                value={formData.birthCountry}
                onChange={(e) => setFormData({ ...formData, birthCountry: e.target.value, birthState: e.target.value !== 'MX' ? '' : formData.birthState })}
              >
                <option value="" className="bg-[#161616]">Selecciona tu país de nacimiento</option>
                {countriesData
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country) => (
                    <option key={country.code} value={country.code} className="bg-[#161616]">
                      {country.name}
                    </option>
                  ))}
              </select>
            </label>

            {formData.birthCountry === 'MX' && (
              <label className="block">
                <span className="block mb-2 text-[#A1A1A6] font-inter">Estado de nacimiento *</span>
                <select
                  className={`w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:border-[#D4A853] ${showStep2Validation && step2Error && !formData.birthState ? 'border-red-500' : ''}`}
                  value={formData.birthState}
                  onChange={(e) => setFormData({ ...formData, birthState: e.target.value })}
                >
                  <option value="" className="bg-[#161616]">Selecciona tu estado de nacimiento</option>
                  <option value="AGS" className="bg-[#161616]">Aguascalientes</option>
                  <option value="BC" className="bg-[#161616]">Baja California</option>
                  <option value="BCS" className="bg-[#161616]">Baja California Sur</option>
                  <option value="CAMP" className="bg-[#161616]">Campeche</option>
                  <option value="CHIS" className="bg-[#161616]">Chiapas</option>
                  <option value="CHIH" className="bg-[#161616]">Chihuahua</option>
                  <option value="CDMX" className="bg-[#161616]">Ciudad de México</option>
                  <option value="COAH" className="bg-[#161616]">Coahuila</option>
                  <option value="COL" className="bg-[#161616]">Colima</option>
                  <option value="DGO" className="bg-[#161616]">Durango</option>
                  <option value="GTO" className="bg-[#161616]">Guanajuato</option>
                  <option value="GRO" className="bg-[#161616]">Guerrero</option>
                  <option value="HGO" className="bg-[#161616]">Hidalgo</option>
                  <option value="JAL" className="bg-[#161616]">Jalisco</option>
                  <option value="MEXSTATE" className="bg-[#161616]">Estado de México</option>
                  <option value="MICH" className="bg-[#161616]">Michoacán</option>
                  <option value="MOR" className="bg-[#161616]">Morelos</option>
                  <option value="NAY" className="bg-[#161616]">Nayarit</option>
                  <option value="NL" className="bg-[#161616]">Nuevo León</option>
                  <option value="OAX" className="bg-[#161616]">Oaxaca</option>
                  <option value="PUE" className="bg-[#161616]">Puebla</option>
                  <option value="QRO" className="bg-[#161616]">Querétaro</option>
                  <option value="QROO" className="bg-[#161616]">Quintana Roo</option>
                  <option value="SLP" className="bg-[#161616]">San Luis Potosí</option>
                  <option value="SIN" className="bg-[#161616]">Sinaloa</option>
                  <option value="SON" className="bg-[#161616]">Sonora</option>
                  <option value="TAB" className="bg-[#161616]">Tabasco</option>
                  <option value="TAMPS" className="bg-[#161616]">Tamaulipas</option>
                  <option value="TLAX" className="bg-[#161616]">Tlaxcala</option>
                  <option value="VER" className="bg-[#161616]">Veracruz</option>
                  <option value="YUC" className="bg-[#161616]">Yucatán</option>
                  <option value="ZAC" className="bg-[#161616]">Zacatecas</option>
                </select>
              </label>
            )}

            <div className="space-y-4">
              <label className="block">
                <span className="block mb-2 text-[#A1A1A6] font-inter">¿De qué producto desea solicitar servicio? *</span>
                <select
                  className="w-full p-3 bg-[#161616] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:border-[#D4A853]"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="Terminales TPV" className="bg-[#161616]">Terminales TPV</option>
                  <option value="Tarjetas Centum" className="bg-[#161616]">Tarjetas Centum</option>
                  <option value="Pasarela de Pagos" className="bg-[#161616]">Pasarela de Pagos</option>
                </select>
              </label>
            </div>
            {showStep2Validation && step2Error && (
              <p className="text-red-400 text-sm mt-1">{step2Error}</p>
            )}
          </div>
        </div>
      ),
    },
    {
      title:
        "Gracias por tu solicitud, pronto te enviaremos un correo con más información",
      fields: (
        <div className="space-y-6">

        </div>
      ),
    },
  ];

  const handleNext = async () => {
    if (currentStep === 1) {
      setShowStep1Validation(true);
      if (!isStep1Valid) {
        return;
      }
    } else if (currentStep === 2) {
      setShowStep2Validation(true);
      if (!isStep2Valid) {
        return;
      }
    }

    if (currentStep < steps.length) {
      if (currentStep === 2) {
        try {
          const formattedData = {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            secondLastName: formData.secondLastName,
            phone: `+${selectedCountry.dialCode}${formData.phone}`,
            gender: formData.gender === "hombre" ? "Masculino" : "Femenino",
            birthDate: formData.birthDate,
            birthCountry: countriesData.find(country => country.code === formData.birthCountry)?.name || formData.birthCountry,
            product: formData.product,
            stateBirth: formData.birthCountry === 'MX' ? {
              'AGS': 'Aguascalientes',
              'BC': 'Baja California',
              'BCS': 'Baja California Sur',
              'CAMP': 'Campeche',
              'CHIS': 'Chiapas',
              'CHIH': 'Chihuahua',
              'CDMX': 'Ciudad de México',
              'COAH': 'Coahuila',
              'COL': 'Colima',
              'DGO': 'Durango',
              'GTO': 'Guanajuato',
              'GRO': 'Guerrero',
              'HGO': 'Hidalgo',
              'JAL': 'Jalisco',
              'MEXSTATE': 'Estado de México',
              'MICH': 'Michoacán',
              'MOR': 'Morelos',
              'NAY': 'Nayarit',
              'NL': 'Nuevo León',
              'OAX': 'Oaxaca',
              'PUE': 'Puebla',
              'QRO': 'Querétaro',
              'QROO': 'Quintana Roo',
              'SLP': 'San Luis Potosí',
              'SIN': 'Sinaloa',
              'SON': 'Sonora',
              'TAB': 'Tabasco',
              'TAMPS': 'Tamaulipas',
              'TLAX': 'Tlaxcala',
              'VER': 'Veracruz',
              'YUC': 'Yucatán',
              'ZAC': 'Zacatecas'
            }[formData.birthState] || null : null
          };

          const response = await fetch('/api/dospasos-formulario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedData)
          });

          if (response.ok) {
            console.log('Formulario enviado exitosamente');
            setCurrentStep(currentStep + 1);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else {
            const errorData = await response.json();
            console.error('Error al enviar formulario:', errorData);
            throw new Error(errorData.error || 'Error al enviar el formulario');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        setCurrentStep(currentStep + 1);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
    if (currentStep === steps.length) {
      window.location.href = '/';
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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

          {currentStep > 1 && currentStep < steps.length && (
            <button
              onClick={handlePrevious}
              className="absolute top-4 left-4 md:top-6 md:left-6 p-1 md:p-2 text-[#A1A1A6] hover:text-white rounded-full transition-colors duration-200"
              aria-label="Volver al paso anterior"
            >
              <svg
                className="w-6 h-6 md:w-9 md:h-9"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6719 24.375L25.1719 34.875L22.5 37.5L7.5 22.5L22.5 7.5L25.1719 10.125L14.6719 20.625H37.5V24.375H14.6719Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}

          <div className="flex items-center justify-center mb-6 md:mb-8">
            {Array.from({ length: 2 }, (_, i) => i + 1).map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-lg md:text-xl font-bold ${
                    step === currentStep
                      ? "bg-[#D4A853] text-[#0A0A0A]"
                      : step < currentStep
                      ? "bg-[#D4A853] text-[#0A0A0A]"
                      : "bg-[#2D2D2D] text-[#6E6E73]"
                  }`}
                >
                  {step < currentStep ? step : step}
                </div>
                {step < 2 && (
                  <div
                    className={`w-12 md:w-24 h-0.5 ${
                      step < currentStep ? "bg-[#D4A853]" : "bg-[#2D2D2D]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-white text-center font-manrope text-[22px] md:text-[32px] font-semibold leading-[28px] md:leading-[40px] tracking-[0px] mb-4 md:mb-6">
              {steps[currentStep - 1].title}
            </h2>
            {steps[currentStep - 1].fields}
          </div>

          {/* Next Button */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <button
              onClick={currentStep === steps.length ? () => window.location.href = '/' : handleNext}
              className="w-full md:w-auto px-8 py-3 rounded-lg font-inter text-base font-semibold leading-normal transition-all duration-200 bg-white text-[#0A0A0A] hover:bg-[#F5F5F7]"
            >
              {currentStep === steps.length ? 'Ir al Inicio' : 'Siguiente'}
            </button>
            {currentStep === 1 && !privacyAccepted && (
              <span className="text-sm text-red-400">
                Debes aceptar el aviso de privacidad para continuar
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
