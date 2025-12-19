'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const BusinessFormComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    phone: '',
    acceptPrivacy: false,
    firstName: '',
    lastName: '',
    secondLastName: '',
    gender: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthCountry: '',
    birthState: '',
    curp: '',
    rfc: '',
    postalCode: '',
    state: '',
    municipality1: '',
    colony: '',
    street: '',
    exteriorNumber: '',
    interiorNumber: '',
    buroAccept: false,
  });

  const [errors, setErrors] = useState({});

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.email.trim()) {
        newErrors.email = 'El correo electrónico es requerido';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'El correo electrónico no es válido';
      }
      if (!formData.confirmEmail.trim()) {
        newErrors.confirmEmail = 'Confirma tu correo electrónico';
      } else if (formData.email !== formData.confirmEmail) {
        newErrors.confirmEmail = 'Los correos electrónicos no coinciden';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'El número de teléfono es requerido';
      } else if (formData.phone.replace(/\D/g, '').length !== 10) {
        newErrors.phone = 'Ingresa 10 dígitos del número celular';
      }
      if (!formData.acceptPrivacy) {
        newErrors.acceptPrivacy = 'Debes aceptar el Aviso de Privacidad';
      }
    } else if (currentStep === 2) {
      if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
      if (!formData.lastName.trim()) newErrors.lastName = 'El primer apellido es requerido';
      if (!formData.secondLastName.trim()) newErrors.secondLastName = 'El segundo apellido es requerido';
      if (!formData.gender) newErrors.gender = 'Selecciona tu género';
      if (!formData.birthDay || !formData.birthMonth || !formData.birthYear) newErrors.birthDate = 'La fecha de nacimiento es requerida';
      if (!formData.birthCountry.trim()) newErrors.birthCountry = 'El país de nacimiento es requerido';
      if (!formData.birthState.trim()) newErrors.birthState = 'El estado de nacimiento es requerido';
      if (!formData.curp.trim()) newErrors.curp = 'El CURP es requerido';
      if (!formData.rfc.trim()) newErrors.rfc = 'El RFC es requerido';
    } else if (currentStep === 3) {
      if (!formData.postalCode.trim()) newErrors.postalCode = 'El código postal es requerido';
      if (!formData.state.trim()) newErrors.state = 'El estado es requerido';
      if (!formData.municipality1.trim()) newErrors.municipality1 = 'La alcaldía o municipio es requerida';
      if (!formData.colony.trim()) newErrors.colony = 'La colonia es requerida';
      if (!formData.street.trim()) newErrors.street = 'La calle es requerida';
      if (!formData.exteriorNumber.trim()) newErrors.exteriorNumber = 'El número exterior es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    try {
      const response = await fetch('/api/business-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert(`¡Solicitud enviada exitosamente!\nID de solicitud: ${result.submissionId}`);
        window.location.href = "/";
      } else {
        alert('Error al enviar la solicitud. Por favor intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < 4) setCurrentStep(currentStep + 1);
      else submitForm();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Common classes for dark theme
  const inputClasses = `w-full px-4 py-4 bg-[#1D1D1F] border-b-2 border-[#2D2D2D] text-white text-lg
    focus:outline-none focus:border-[#D4A853] transition-colors placeholder-[#6E6E73]`;

  const labelClasses = "block text-sm font-medium text-[#A1A1A6] mb-3 font-inter";

  const selectClasses = `w-full px-4 py-4 bg-[#1D1D1F] border-b-2 border-[#2D2D2D] text-white text-lg
    focus:outline-none focus:border-[#D4A853] transition-colors`;

  const renderProgressBar = () => (
    <div className="w-full mb-8 md:mb-12">
      <div className="flex items-center justify-between md:justify-evenly">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex flex-col items-center relative">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base md:text-lg font-bold transition-colors ${
              step <= currentStep
                ? 'bg-[#D4A853] text-[#0A0A0A]'
                : 'bg-[#2D2D2D] text-[#6E6E73]'
            }`}>
              {step}
            </div>
            {step < 4 && (
              <div className={`absolute top-5 md:top-6 left-10 md:left-12 h-0.5 transition-colors ${
                step < currentStep ? 'bg-[#D4A853]' : 'bg-[#2D2D2D]'
              }`} style={{ width: 'calc((100vw - 10rem) / 4)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center mb-6 md:mb-8 py-6 md:py-10">
        <h2 className="text-2xl md:text-4xl font-manrope text-white mb-4 font-bold">
          Completa tu solicitud<br />
          <span className="text-[#D4A853]">ingresando tus datos</span>
        </h2>
      </div>

      <div className="relative mb-8">
        <label className={labelClasses}>Escribe tu correo electrónico</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
          placeholder="ejemplo@correo.com"
        />
        {errors.email && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.email}</p>}
      </div>

      <div className="relative mb-8">
        <label className={labelClasses}>Confirma tu correo electrónico</label>
        <input
          type="email"
          value={formData.confirmEmail}
          onChange={(e) => updateFormData('confirmEmail', e.target.value)}
          className={`${inputClasses} ${errors.confirmEmail ? 'border-red-500' : ''}`}
          placeholder="ejemplo@correo.com"
        />
        {errors.confirmEmail && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.confirmEmail}</p>}
      </div>

      <div className="relative mb-8">
        <label className={labelClasses}>Escribe los 10 dígitos de tu número celular</label>
        <div className="flex items-center bg-[#1D1D1F] border-b-2 border-[#2D2D2D] focus-within:border-[#D4A853] transition-colors">
          <div className="flex items-center px-4 py-4 border-r border-[#2D2D2D]">
            <span className="text-sm text-[#A1A1A6]">+52</span>
          </div>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 10) updateFormData('phone', value);
            }}
            className={`flex-1 px-4 py-4 bg-transparent text-lg text-white focus:outline-none placeholder-[#6E6E73] ${
              errors.phone ? 'text-red-500' : ''
            }`}
            placeholder="22 2234 5670"
            maxLength="10"
          />
        </div>
        {errors.phone && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.phone}</p>}
      </div>

      <div className="relative flex items-start space-x-3 mt-8">
        <input
          type="checkbox"
          id="acceptPrivacy"
          checked={formData.acceptPrivacy}
          onChange={(e) => updateFormData('acceptPrivacy', e.target.checked)}
          className="w-5 h-5 bg-[#1D1D1F] border-[#2D2D2D] rounded focus:ring-[#D4A853] mt-0.5 accent-[#D4A853]"
        />
        <label htmlFor="acceptPrivacy" className="text-sm text-[#A1A1A6] cursor-pointer font-inter">
          Al continuar aceptas nuestro{' '}
          <a href="/aviso-de-privacidad" className="text-[#D4A853] underline hover:text-white">
            Aviso de Privacidad
          </a>
        </label>
        {errors.acceptPrivacy && <p className="absolute text-red-500 text-sm mt-1 left-0 top-8">{errors.acceptPrivacy}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="flex items-center mb-8">
        <button onClick={prevStep} className="mr-4 text-[#A1A1A6] hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-6 md:mb-8 py-4 md:py-6">
        <h2 className="text-xl md:text-3xl font-manrope text-white mb-4 leading-tight font-bold">
          Ingresa tu nombre e<br />
          <span className="text-[#D4A853]">información personal</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative mb-6">
          <label className={labelClasses}>Nombre (s)</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className={`${inputClasses} ${errors.firstName ? 'border-red-500' : ''}`}
            placeholder="Nombre"
          />
          {errors.firstName && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.firstName}</p>}
        </div>

        <div className="relative mb-6">
          <label className={labelClasses}>Primer Apellido</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className={`${inputClasses} ${errors.lastName ? 'border-red-500' : ''}`}
            placeholder="Primer apellido"
          />
          {errors.lastName && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.lastName}</p>}
        </div>

        <div className="relative mb-6 md:col-span-2">
          <label className={labelClasses}>Segundo Apellido</label>
          <input
            type="text"
            value={formData.secondLastName}
            onChange={(e) => updateFormData('secondLastName', e.target.value)}
            className={`${inputClasses} ${errors.secondLastName ? 'border-red-500' : ''}`}
            placeholder="Segundo apellido"
          />
          {errors.secondLastName && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.secondLastName}</p>}
        </div>
      </div>

      <div className="relative mb-8">
        <label className={labelClasses}>Género</label>
        <div className="flex space-x-8">
          {['mujer', 'hombre'].map((g) => (
            <label key={g} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={formData.gender === g}
                onChange={(e) => updateFormData('gender', e.target.value)}
                className="w-5 h-5 accent-[#D4A853]"
              />
              <span className="ml-3 text-[#A1A1A6] capitalize">{g}</span>
            </label>
          ))}
        </div>
        {errors.gender && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.gender}</p>}
      </div>

      <div className="relative mb-8">
        <label className={labelClasses}>Fecha de nacimiento</label>
        <div className="grid grid-cols-3 gap-4">
          <select value={formData.birthDay} onChange={(e) => updateFormData('birthDay', e.target.value)} className={selectClasses}>
            <option value="">Día</option>
            {Array.from({ length: 31 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
          </select>
          <select value={formData.birthMonth} onChange={(e) => updateFormData('birthMonth', e.target.value)} className={selectClasses}>
            <option value="">Mes</option>
            {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((month, i) => (
              <option key={i + 1} value={i + 1}>{month}</option>
            ))}
          </select>
          <select value={formData.birthYear} onChange={(e) => updateFormData('birthYear', e.target.value)} className={selectClasses}>
            <option value="">Año</option>
            {Array.from({ length: 80 }, (_, i) => {
              const year = new Date().getFullYear() - 18 - i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
        </div>
        {errors.birthDate && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.birthDate}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative mb-6">
          <label className={labelClasses}>País de nacimiento</label>
          <input
            type="text"
            value={formData.birthCountry}
            onChange={(e) => updateFormData('birthCountry', e.target.value)}
            className={`${inputClasses} ${errors.birthCountry ? 'border-red-500' : ''}`}
            placeholder="País"
          />
          {errors.birthCountry && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.birthCountry}</p>}
        </div>

        <div className="relative mb-6">
          <label className={labelClasses}>Estado de nacimiento</label>
          <input
            type="text"
            value={formData.birthState}
            onChange={(e) => updateFormData('birthState', e.target.value)}
            className={`${inputClasses} ${errors.birthState ? 'border-red-500' : ''}`}
            placeholder="Estado"
          />
          {errors.birthState && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.birthState}</p>}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm font-medium text-[#A1A1A6] mb-6 font-inter">
          Valida tu identidad ingresando tu CURP y RFC
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative mb-6">
            <input
              type="text"
              value={formData.curp}
              onChange={(e) => updateFormData('curp', e.target.value.toUpperCase())}
              className={`${inputClasses} ${errors.curp ? 'border-red-500' : ''}`}
              placeholder="CURP"
            />
            {errors.curp && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.curp}</p>}
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              value={formData.rfc}
              onChange={(e) => updateFormData('rfc', e.target.value.toUpperCase())}
              className={`${inputClasses} ${errors.rfc ? 'border-red-500' : ''}`}
              placeholder="RFC"
            />
            {errors.rfc && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.rfc}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="flex items-center mb-8">
        <button onClick={prevStep} className="mr-4 text-[#A1A1A6] hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-6 md:mb-8 py-4 md:py-6">
        <h2 className="text-xl md:text-3xl font-manrope text-white mb-4 leading-tight font-bold">
          Escribe tu dirección para<br />
          <span className="text-[#D4A853]">validar que te encuentras en México</span>
        </h2>
      </div>

      <div className="space-y-6">
        {[
          { key: 'postalCode', label: 'Código Postal', placeholder: 'Número de Código Postal' },
          { key: 'state', label: 'Estado', placeholder: 'Estado' },
          { key: 'municipality1', label: 'Alcaldía o Municipio', placeholder: 'Alcaldía o Municipio' },
          { key: 'colony', label: 'Colonia', placeholder: 'Colonia' },
          { key: 'street', label: 'Calle', placeholder: 'Calle' },
        ].map(({ key, label, placeholder }) => (
          <div key={key} className="relative mb-6">
            <label className={labelClasses}>{label}</label>
            <input
              type="text"
              value={formData[key]}
              onChange={(e) => updateFormData(key, e.target.value)}
              className={`${inputClasses} ${errors[key] ? 'border-red-500' : ''}`}
              placeholder={placeholder}
            />
            {errors[key] && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors[key]}</p>}
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative mb-6">
            <label className={labelClasses}>Número Exterior</label>
            <input
              type="text"
              value={formData.exteriorNumber}
              onChange={(e) => updateFormData('exteriorNumber', e.target.value)}
              className={`${inputClasses} ${errors.exteriorNumber ? 'border-red-500' : ''}`}
              placeholder="Número"
            />
            {errors.exteriorNumber && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.exteriorNumber}</p>}
          </div>
          <div className="relative mb-6">
            <label className={labelClasses}>Número Int. (Opcional)</label>
            <input
              type="text"
              value={formData.interiorNumber}
              onChange={(e) => updateFormData('interiorNumber', e.target.value)}
              className={inputClasses}
              placeholder="Número"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      <div className="flex items-center mb-8">
        <button onClick={prevStep} className="mr-4 text-[#A1A1A6] hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-6 md:mb-8 py-10 md:py-16">
        <h2 className="text-xl md:text-3xl font-manrope text-white mb-10 md:mb-16 leading-relaxed font-bold">
          Dentro de poco obtendrás tu<br />
          tarjeta, <span className="text-[#D4A853]">acepta la consulta a buró</span><br />
          para continuar
        </h2>

        <div className="flex justify-center">
          <button
            onClick={() => {
              updateFormData('buroAccept', true);
              setTimeout(() => submitForm(), 100);
            }}
            className="w-full md:w-auto px-8 md:px-12 py-4 bg-white text-[#0A0A0A] rounded-lg text-base md:text-lg font-semibold hover:bg-[#F5F5F7] transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] w-full">
      {/* Header */}
      <div className="bg-[#111111] border-b border-[#2D2D2D] text-white py-3 px-4">
        <p className="text-sm text-center text-[#A1A1A6] font-inter">Solicitud tarjeta Crédito online</p>
      </div>

      {/* Main Content */}
      <main className="flex items-center justify-center py-6 md:py-10">
        <div className="bg-[#161616] border border-[#2D2D2D] rounded-3xl max-w-5xl w-full mx-2 md:mx-4 p-6 md:p-10">
          {/* Centum Logo */}
          <div className="text-center mb-8 flex justify-center">
            <Image
              src="/centum-logo.svg"
              alt="Centum Logo"
              width={140}
              height={50}
              className="w-28 md:w-36 h-auto"
            />
          </div>

          {renderProgressBar()}
          {renderCurrentStep()}

          {currentStep < 4 && (
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 mt-8 md:mt-12 pt-4 md:pt-6">
              {currentStep > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center justify-center space-x-2 w-full md:w-auto px-6 py-3 text-white border border-[#2D2D2D] rounded-lg font-medium hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Anterior</span>
                </button>
              ) : (
                <div className="hidden md:block"></div>
              )}

              <button
                onClick={nextStep}
                className="w-full md:w-auto px-8 py-3 bg-white text-[#0A0A0A] rounded-lg font-semibold hover:bg-[#F5F5F7] transition-colors"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const BusinessForm = dynamic(() => Promise.resolve(BusinessFormComponent), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center w-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4A853] mx-auto"></div>
        <p className="mt-4 text-[#A1A1A6] font-inter">Cargando formulario...</p>
      </div>
    </div>
  )
});

export default BusinessForm;
