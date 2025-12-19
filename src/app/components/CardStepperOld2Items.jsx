"use client";

import { useState, useMemo } from "react";
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
    birthState: "",
    curp: "",
    rfc: "",
    privacyAccepted: "",
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
    if (formData.phone.length !== 10) {
      setEmailError('El número de teléfono debe tener 10 dígitos');
      return false;
    }
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
    if (!formData.curp) {
      setStep2Error('El CURP es obligatorio');
      return false;
    }
    if (!formData.rfc) {
      setStep2Error('El RFC es obligatorio');
      return false;
    }

    setStep2Error('');
    return true;
  }, [formData.firstName, formData.lastName, formData.gender, formData.birthDate, 
      formData.birthCountry, formData.birthState, formData.curp, formData.rfc]);

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

  const steps = [
    {
      title: "Completa tu solicitud ingresando tus datos",
      fields: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-navy-700 mt-4">
              <span
                className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]"
              >
                Escribe tu correo electrónico
              </span>
              <input
                type="email"
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep1Validation && emailError ? 'border-red-500' : ''}`}
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label className="block text-navy-700">
              <span
                className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]"
              >
                Confirma tu correo electrónico
              </span>
              <input
                type="email"
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep1Validation && emailError ? 'border-red-500' : ''}`}
                placeholder="ejemplo@correo.com"
                value={formData.confirmEmail}
                onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
              />
            </label>
            <label className="block text-navy-700">
              <span
                className="text-[#212A59] [margin-trim:both] [text-edge:cap] font-poppins text-[18px] font-normal leading-[20px] tracking-[0px]"
              >
                Escribe los 10 dígitos de tu número celular *
              </span>
              <div className="flex">
                <div className="flex items-center px-3 border rounded-l bg-gray-50">
                  <Image
                    src="/mexico-flag.svg"
                    alt="MX"
                    width={30}
                    height={20}
                    className="mr-2"
                  />
                  <span>+52</span>
                </div>
                <input
                  type="tel"
                  className={`flex-1 p-2 border border-l-0 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep1Validation && emailError ? 'border-red-500' : ''}`}
                  placeholder="22 2234 5670"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                  maxLength={10}
                />
              </div>
            </label>
            {showStep1Validation && emailError && (
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
      ),
    },
    {
      title: "Ingresa tu nombre e información personal",
      fields: (
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block">
              <span className="block mb-2">Nombre(s) *</span>
              <input
                type="text"
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep2Validation && step2Error && !formData.firstName ? 'border-red-500' : ''}`}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="block mb-2">Primer Apellido *</span>
              <input
                type="text"
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep2Validation && step2Error && !formData.lastName ? 'border-red-500' : ''}`}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="block mb-2">Segundo Apellido</span>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.secondLastName}
                onChange={(e) => setFormData({ ...formData, secondLastName: e.target.value })}
              />
            </label>
            <div>
              <span className="block mb-2">Género *</span>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="mujer"
                    checked={formData.gender === "mujer"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  />
                  Mujer
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="hombre"
                    checked={formData.gender === "hombre"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  />
                  Hombre
                </label>
              </div>
            </div>
            <div>
              <span className="block mb-2">Fecha de nacimiento *</span>
              <input
                type="date"
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep2Validation && step2Error && !formData.birthDate ? 'border-red-500' : ''}`}
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>
            <label className="block">
              <span className="block mb-2">País de nacimiento *</span>
              <select
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep2Validation && step2Error && !formData.birthCountry ? 'border-red-500' : ''}`}
                value={formData.birthCountry}
                onChange={(e) => setFormData({ ...formData, birthCountry: e.target.value, birthState: e.target.value !== 'MX' ? '' : formData.birthState })}
              >
                <option value="">Selecciona tu país de nacimiento</option>
                {countriesData
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
              </select>
            </label>

            {formData.birthCountry === 'MX' && (
              <label className="block">
                <span className="block mb-2">Estado de nacimiento *</span>
                <select
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep2Validation && step2Error && !formData.birthState ? 'border-red-500' : ''}`}
                  value={formData.birthState}
                  onChange={(e) => setFormData({ ...formData, birthState: e.target.value })}
                >
                  <option value="">Selecciona tu estado de nacimiento</option>
                  <option value="AGS">Aguascalientes</option>
                  <option value="BC">Baja California</option>
                  <option value="BCS">Baja California Sur</option>
                  <option value="CAMP">Campeche</option>
                  <option value="CHIS">Chiapas</option>
                  <option value="CHIH">Chihuahua</option>
                  <option value="CDMX">Ciudad de México</option>
                  <option value="COAH">Coahuila</option>
                  <option value="COL">Colima</option>
                  <option value="DGO">Durango</option>
                  <option value="GTO">Guanajuato</option>
                  <option value="GRO">Guerrero</option>
                  <option value="HGO">Hidalgo</option>
                  <option value="JAL">Jalisco</option>
                  <option value="MEXSTATE">Estado de México</option>
                  <option value="MICH">Michoacán</option>
                  <option value="MOR">Morelos</option>
                  <option value="NAY">Nayarit</option>
                  <option value="NL">Nuevo León</option>
                  <option value="OAX">Oaxaca</option>
                  <option value="PUE">Puebla</option>
                  <option value="QRO">Querétaro</option>
                  <option value="QROO">Quintana Roo</option>
                  <option value="SLP">San Luis Potosí</option>
                  <option value="SIN">Sinaloa</option>
                  <option value="SON">Sonora</option>
                  <option value="TAB">Tabasco</option>
                  <option value="TAMPS">Tamaulipas</option>
                  <option value="TLAX">Tlaxcala</option>
                  <option value="VER">Veracruz</option>
                  <option value="YUC">Yucatán</option>
                  <option value="ZAC">Zacatecas</option>
                </select>
              </label>
            )}

            <div className="space-y-4">
              <span className="block mb-2">
                Valida tu identidad ingresando tu CURP y RFC
              </span>

              <label className="block">
                <span className="block mb-2">CURP *</span>
                <input
                  type="text"
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep2Validation && step2Error && !formData.curp ? 'border-red-500' : ''}`}
                  value={formData.curp}
                  onChange={(e) => setFormData({ ...formData, curp: e.target.value })}
                  maxLength={18}
                />
              </label>

              <label className="block">
                <span className="block mb-2">RFC *</span>
                <input
                  type="text"
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${showStep2Validation && step2Error && !formData.rfc ? 'border-red-500' : ''}`}
                  value={formData.rfc}
                  onChange={(e) => setFormData({ ...formData, rfc: e.target.value })}
                  maxLength={13}
                />
              </label>
            </div>
            {showStep2Validation && step2Error && (
              <p className="text-red-500 text-sm mt-1">{step2Error}</p>
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
          const emailSubject = `Formulario Completado (${formType})`;
          
          const transformedData = {
            ...formData,
            birthCountry: countriesData.find(country => country.code === formData.birthCountry)?.name || formData.birthCountry,
            birthState: formData.birthCountry === 'MX' ? {
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
            }[formData.birthState] || formData.birthState : ''
          };

          const activationResponse = await fetch('https://formsubmit.co/ajax/d42c5ed18b4650c1a0ca6f246856dcff', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: emailSubject,
              _template: 'table',
              ...transformedData,
              privacyAccepted
            })
          });

          if (activationResponse.ok) {
            console.log('Formulario enviado exitosamente');
            setCurrentStep(currentStep + 1);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else {
            console.error('Error al enviar formulario');
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

          {currentStep > 1 && currentStep < steps.length && (
            <button
              onClick={handlePrevious}
              className="absolute top-6 left-6 p-2 text-[#212A59]  rounded-full transition-colors duration-200"
              aria-label="Volver al paso anterior"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6719 24.375L25.1719 34.875L22.5 37.5L7.5 22.5L22.5 7.5L25.1719 10.125L14.6719 20.625H37.5V24.375H14.6719Z"
                  fill="#212A59"
                />
              </svg>
            </button>
          )}

          <div className="flex items-center justify-center mb-8">
            {Array.from({ length: 2 }, (_, i) => i + 1).map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold ${
                    step === currentStep
                      ? "bg-[#212A59] text-white"
                      : step < currentStep
                      ? "bg-[#212A59] text-white"
                      : "bg-[#B8BDD3] text-white"
                  }`}
                >
                  {step < currentStep ? step : step}
                </div>
                {step < 2 && (
                  <div
                    className={`w-24 h-0.5 ${
                      step < currentStep ? "bg-[#212A59]" : "bg-[#B8BDD3]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2
              className="text-[#212A59] [margin-trim:both] text-center text-xl font-poppins text-[40px] font-normal leading-[48px] tracking-[0px]
"
            >
              {steps[currentStep - 1].title}
            </h2>
            {steps[currentStep - 1].fields}
          </div>

          {/* Next Button */}
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={currentStep === steps.length ? () => window.location.href = '/' : handleNext}
              className="px-6 py-1 rounded font-poppins text-base leading-normal transition-all duration-200 bg-[#212A59] text-white hover:bg-[#1a2247]"
            >
              {currentStep === steps.length ? 'Ir al Inicio' : 'Siguiente'}
            </button>
            {currentStep === 1 && !privacyAccepted && (
              <span className="text-sm text-red-500">
                Debes aceptar el aviso de privacidad para continuar
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
