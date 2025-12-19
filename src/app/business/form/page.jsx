'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const BusinessFormComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    email: '',
    confirmEmail: '',
    phone: '',
    acceptPrivacy: false,
    // Step 2
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
    // Step 3
    postalCode: '',
    state: '',
    municipality1: '',
    colony: '',
    street: '',
    exteriorNumber: '',
    interiorNumber: '',

    // step 4

    buroAccept: false,
  });

  const [errors, setErrors] = useState({});




  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'El nombre es requerido';
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'El primer apellido es requerido';
      }
      
      if (!formData.secondLastName.trim()) {
        newErrors.secondLastName = 'El segundo apellido es requerido';
      }
      
      if (!formData.gender) {
        newErrors.gender = 'Selecciona tu género';
      }
      
      if (!formData.birthDay || !formData.birthMonth || !formData.birthYear) {
        newErrors.birthDate = 'La fecha de nacimiento es requerida';
      }
      
      if (!formData.birthCountry.trim()) {
        newErrors.birthCountry = 'El país de nacimiento es requerido';
      }
      
      if (!formData.birthState.trim()) {
        newErrors.birthState = 'El estado de nacimiento es requerido';
      }
      
      if (!formData.curp.trim()) {
        newErrors.curp = 'El CURP es requerido';
      }
      
      if (!formData.rfc.trim()) {
        newErrors.rfc = 'El RFC es requerido';
      }
    } else if (currentStep === 3) {
      if (!formData.postalCode.trim()) {
        newErrors.postalCode = 'El código postal es requerido';
      }
      
      if (!formData.state.trim()) {
        newErrors.state = 'El estado es requerido';
      }
      
      if (!formData.municipality1.trim()) {
        newErrors.municipality1 = 'La alcaldía o municipio es requerida';
      }
      
      if (!formData.colony.trim()) {
        newErrors.colony = 'La colonia es requerida';
      }
      
      if (!formData.street.trim()) {
        newErrors.street = 'La calle es requerida';
      }
      
      if (!formData.exteriorNumber.trim()) {
        newErrors.exteriorNumber = 'El número exterior es requerido';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    try {
      const response = await fetch('/api/business-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(`¡Solicitud enviada exitosamente!\nID de solicitud: ${result.submissionId}\n\n`);
        window.location.href = "/"
        // Opcional: redirect a página de éxito
        // window.location.href = '/solicitud-exitosa';
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
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        submitForm();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };


  const renderProgressBar = () => (
    <div className="w-full mb-12">
      <div className="flex items-center md:justify-evenly space-x-12 md:space-x-16">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex flex-col items-center relative">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
              step <= currentStep 
                ? 'bg-[#1E3A8A] text-white' 
                : 'bg-gray-300 text-gray-500'
            }`}>
              {step}
            </div>
            {step < 4 && (
              <div className={`absolute top-6 left-12 w-12 md:w-52 h-0.5 ${
                step === 1 ? 'bg-gray-300' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-8">
      {/* Title and Subtitle */}
      <div className="text-center mb-8 py-10">
        <h2 className="text-3xl md:text-4xl font-inter text-[#1E3A8A] mb-4 font-">
          Completa tu solicitud<br />
          ingresando tus datos
        </h2>
      </div>
      
      {/* Email Input */}
      <div className="relative mb-8">
        <label className="block text-base font-medium text-gray-700 mb-3">
          Escribe tu correo electrónico
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="ejemplo@correo.com"
        />
        {errors.email && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.email}</p>}
      </div>

      {/* Confirm Email Input */}
      <div className="relative mb-8">
        <label className="block text-base font-medium text-gray-700 mb-3">
          Confirma tu correo electrónico
        </label>
        <input
          type="email"
          value={formData.confirmEmail}
          onChange={(e) => updateFormData('confirmEmail', e.target.value)}
          className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
            errors.confirmEmail ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="ejemplo@correo.com"
        />
        {errors.confirmEmail && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.confirmEmail}</p>}
      </div>

      {/* Phone Input with Flag */}
      <div className="relative mb-8">
        <label className="block text-base font-medium text-gray-700 mb-3">
          Escribe los 10 dígitos de tu número celular
        </label>
        <div className="flex items-center border-b-2 border-gray-300 focus-within:border-[#1E3A8A] transition-colors">
          <div className="flex items-center px-3 py-4 border-r border-gray-200 cursor-pointer hover:bg-gray-50">
            <div className="w-6 h-4 mr-2 flex overflow-hidden rounded-sm border border-gray-200">
              <div className="w-1/3 bg-green-600"></div>
              <div className="w-1/3 bg-white flex items-center justify-center relative">
                <div className="w-1 h-1 bg-green-600 rounded-full absolute"></div>
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14 8H10L12 2Z" fill="#8B4513"/>
                  <circle cx="12" cy="12" r="2" fill="#FFD700"/>
                  <path d="M8 16L12 14L16 16L12 18L8 16Z" fill="#8B4513"/>
                </svg>
              </div>
              <div className="w-1/3 bg-red-600"></div>
            </div>
            <span className="text-sm text-gray-600">+52</span>
          </div>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 10) {
                updateFormData('phone', value);
              }
            }}
            className={`flex-1 px-4 py-4 bg-transparent text-lg focus:outline-none ${
              errors.phone ? 'text-red-500' : 'text-gray-900'
            }`}
            placeholder="22 2234 5670"
            maxLength="10"
          />
        </div>
        {errors.phone && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.phone}</p>}
      </div>

      {/* Privacy Checkbox */}
      <div className="relative flex items-start space-x-3 mt-8">
        <input
          type="checkbox"
          id="acceptPrivacy"
          checked={formData.acceptPrivacy}
          onChange={(e) => updateFormData('acceptPrivacy', e.target.checked)}
          className="w-5 h-5 text-[#1E3A8A] border-gray-300 rounded focus:ring-[#1E3A8A] mt-0.5"
        />
        <label htmlFor="acceptPrivacy" className="text-sm text-gray-700 cursor-pointer">
          Al continuar aceptas nuestro{' '}
          <a href="/aviso-de-privacidad" className="text-[#1E3A8A] underline hover:text-[#2563EB]">
            Aviso de Privacidad
          </a>
        </label>
        {errors.acceptPrivacy && <p className="absolute text-red-500 text-sm mt-1 left-0 top-8">{errors.acceptPrivacy}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      {/* Back Arrow and Title */}
      <div className="flex items-center mb-8">
        <button onClick={prevStep} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-8 py-6">
        <h2 className="text-2xl md:text-3xl font-inter text-[#1E3A8A] mb-4">
          Ingresa tu nombre e<br />
          información personal
        </h2>
      </div>
      
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative mb-6">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Nombre (s)
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nombre"
          />
          {errors.firstName && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.firstName}</p>}
        </div>

        <div className="relative mb-6">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Primer Apellido
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder=" Primer apellido"
          />
          {errors.lastName && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.lastName}</p>}
        </div>

        <div className="relative mb-6 md:col-span-2">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Segundo Apellido
          </label>
          <input
            type="text"
            value={formData.secondLastName}
            onChange={(e) => updateFormData('secondLastName', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.secondLastName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Segundo apellido"
          />
          {errors.secondLastName && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.secondLastName}</p>}
        </div>
      </div>

      {/* Gender */}
      <div className="relative mb-8">
        <label className="block text-base font-medium text-gray-700 mb-4">Género</label>
        <div className="flex space-x-8">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="mujer"
              checked={formData.gender === 'mujer'}
              onChange={(e) => updateFormData('gender', e.target.value)}
              className="w-5 h-5 text-[#1E3A8A] border-gray-300 focus:ring-[#1E3A8A]"
            />
            <span className="ml-3 text-gray-700">Mujer</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="hombre"
              checked={formData.gender === 'hombre'}
              onChange={(e) => updateFormData('gender', e.target.value)}
              className="w-5 h-5 text-[#1E3A8A] border-gray-300 focus:ring-[#1E3A8A]"
            />
            <span className="ml-3 text-gray-700">Hombre</span>
          </label>
        </div>
        {errors.gender && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.gender}</p>}
      </div>

      {/* Birth Date */}
      <div className="relative mb-8">
        <label className="block text-base font-medium text-gray-700 mb-3">
          Fecha de nacimiento
        </label>
        <div className="grid grid-cols-3 gap-4">
          <select
            value={formData.birthDay}
            onChange={(e) => updateFormData('birthDay', e.target.value)}
            className="w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors border-gray-300"
          >
            <option value="">Día</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select
            value={formData.birthMonth}
            onChange={(e) => updateFormData('birthMonth', e.target.value)}
            className="w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors border-gray-300"
          >
            <option value="">Mes</option>
            {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((month, i) => (
              <option key={i + 1} value={i + 1}>{month}</option>
            ))}
          </select>
          <select
            value={formData.birthYear}
            onChange={(e) => updateFormData('birthYear', e.target.value)}
            className="w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors border-gray-300"
          >
            <option value="">Año</option>
            {Array.from({ length: 80 }, (_, i) => {
              const year = new Date().getFullYear() - 18 - i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
        </div>
        {errors.birthDate && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.birthDate}</p>}
      </div>

      {/* Birth Country and State */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative mb-6">
          <label className="block text-base font-medium text-gray-700 mb-3">
            País de nacimiento
          </label>
          <input
            type="text"
            value={formData.birthCountry}
            onChange={(e) => updateFormData('birthCountry', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.birthCountry ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="País"
          />
          {errors.birthCountry && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.birthCountry}</p>}
        </div>

        <div className="relative mb-6">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Estado de nacimiento
          </label>
          <input
            type="text"
            value={formData.birthState}
            onChange={(e) => updateFormData('birthState', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.birthState ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Estado"
          />
          {errors.birthState && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.birthState}</p>}
        </div>
      </div>

      {/* CURP and RFC */}
      <div className="mb-8">
        <p className="text-base font-medium text-gray-700 mb-6">
          Valida tu identidad ingresando tu CURP y RFC
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative mb-6">
            <input
              type="text"
              value={formData.curp}
              onChange={(e) => updateFormData('curp', e.target.value)}
              className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
                errors.curp ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="CURP"
            />
            {errors.curp && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.curp}</p>}
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              value={formData.rfc}
              onChange={(e) => updateFormData('rfc', e.target.value)}
              className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
                errors.rfc ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="RFC"
            />
            {errors.rfc && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.rfc}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      {/* Back Arrow */}
      <div className="flex items-center mb-8">
        <button onClick={prevStep} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-8 py-16">
        <h2 className="text-2xl md:text-3xl font-inter text-[#1E3A8A] mb-16 leading-relaxed">
          Dentro de poco obtendrás tu<br />
          tarjeta, acepta la consulta a buró<br />
          para continuar
        </h2>
        
        {/* Accept Button */}
        <div className="flex justify-center">
          <button
            onClick={() => {
                updateFormData('buroAccept', true);
                setTimeout(() => {
                  submitForm();
                }, 100);
            }}
            className="px-12 py-4 bg-[#1E3A8A] text-white rounded-lg text-lg font-medium hover:bg-[#1E40AF] transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      {/* Back Arrow */}
      <div className="flex items-center mb-8">
        <button onClick={prevStep} className="mr-4 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-8 py-6">
        <h2 className="text-2xl md:text-3xl font-inter text-[#1E3A8A] mb-4">
          Escribe tu dirección para validar<br />
          que te encuentras en México
        </h2>
      </div>
      
      {/* Address Fields */}
      <div className="space-y-8">
        {/* Postal Code */}
        <div className="relative mb-8">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Código Postal
          </label>
          <input
            type="text"
            value={formData.postalCode}
            onChange={(e) => updateFormData('postalCode', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.postalCode ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Número de Código Postal"
          />
          {errors.postalCode && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.postalCode}</p>}
        </div>

        {/* State */}
        <div className="relative mb-8">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Estado
          </label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.state ? 'border-red-500' : 'border-blue-500'
            }`}
            placeholder="Estado"
          />
          {errors.state && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.state}</p>}
        </div>

        {/* Municipality 1 */}
        <div className="relative mb-8">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Alcaldía o Municipio
          </label>
          <input
            type="text"
            value={formData.municipality1}
            onChange={(e) => updateFormData('municipality1', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.municipality1 ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Alcaldía o Municipio"
          />
          {errors.municipality1 && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.municipality1}</p>}
        </div>

 

        {/* Colony */}
        <div className="relative mb-8">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Colonia
          </label>
          <input
            type="text"
            value={formData.colony}
            onChange={(e) => updateFormData('colony', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.colony ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Colonia"
          />
          {errors.colony && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.colony}</p>}
        </div>

        {/* Street */}
        <div className="relative mb-8">
          <label className="block text-base font-medium text-gray-700 mb-3">
            Calle
          </label>
          <input
            type="text"
            value={formData.street}
            onChange={(e) => updateFormData('street', e.target.value)}
            className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
              errors.street ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Calle"
          />
          {errors.street && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.street}</p>}
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative mb-6">
            <label className="block text-base font-medium text-gray-700 mb-3">
              Número Exterior
            </label>
            <input
              type="text"
              value={formData.exteriorNumber}
              onChange={(e) => updateFormData('exteriorNumber', e.target.value)}
              className={`w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors ${
                errors.exteriorNumber ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Número"
            />
            {errors.exteriorNumber && <p className="absolute text-red-500 text-sm mt-1 left-0">{errors.exteriorNumber}</p>}
          </div>

          <div className="relative mb-6">
            <label className="block text-base font-medium text-gray-700 mb-3">
              Número Int. (Opcional)
            </label>
            <input
              type="text"
              value={formData.interiorNumber}
              onChange={(e) => updateFormData('interiorNumber', e.target.value)}
              className="w-full px-4 py-4 border-b-2 bg-transparent text-lg focus:outline-none focus:border-[#1E3A8A] transition-colors border-gray-300"
              placeholder="Número"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };




  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <p className="text-sm text-center">Solicitud tarjeta Crédito online</p>
      </div>

      {/* Main Content */}
      <main className="flex items-center justify-center py-8">
        <div className="bg-white rounded-lg  max-w-5xl w-full mx-4 p-8">
          {/* Centum Logo */}
          <div className="text-center mb-8  flex justify-center">
            <img
            src="/logo-amarillo.svg"
            alt="Centum Logo"
          
            className="w-24 h-14 xs:w-28 xs:h-16 sm:w-32 sm:h-18 md:w-36 md:h-20"
          />
          </div>

          {/* Progress Bar */}
          {renderProgressBar()}

          {/* Form Content */}
          {renderCurrentStep()}

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between items-center mt-12 pt-6">
              {currentStep > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 px-6 py-3 text-[#1E3A8A] border border-[#1E3A8A] rounded-lg font-medium hover:bg-[#1E3A8A] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Anterior</span>
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={nextStep}
                className="px-8 py-3 bg-[#1E3A8A] text-white rounded-lg font-medium hover:bg-[#1E40AF] transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center w-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A] mx-auto"></div>
        <p className="mt-4 text-gray-600">Cargando formulario...</p>
      </div>
    </div>
  )
});

export default BusinessForm;
