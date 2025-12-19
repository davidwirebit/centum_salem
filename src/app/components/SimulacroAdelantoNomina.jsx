"use client";

import { useState, useMemo } from "react";

export default function SimulacroAdelantoNomina() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    monthlyIncome: "",
    requestedAmount: "",
    frequency: ""
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = useMemo(() => {
    if (!formData.fullName) {
      setFormError('El nombre completo es obligatorio');
      return false;
    }
    if (!formData.email) {
      setFormError('El correo electrónico es obligatorio');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setFormError('Ingresa un correo electrónico válido');
      return false;
    }
    if (!formData.phone) {
      setFormError('El número de teléfono es obligatorio');
      return false;
    }
    if (!formData.monthlyIncome) {
      setFormError('El ingreso mensual es obligatorio');
      return false;
    }
    if (!formData.requestedAmount) {
      setFormError('La cantidad solicitada es obligatoria');
      return false;
    }
    if (!formData.frequency) {
      setFormError('La frecuencia de pago es obligatoria');
      return false;
    }
    setFormError('');
    return true;
  }, [formData]);

  const handleSubmit = async () => {
    setShowValidation(true);
    if (!isFormValid) {
      return;
    }

    try {
      const response = await fetch('/api/adelanto-nomina', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          fullName: formData.fullName,
          phone: formData.phone,
          grossIncome: formData.monthlyIncome,
          amountRequested: formData.requestedAmount,
          paymentFrequency: formData.frequency
        })
      });

      if (response.ok) {
        console.log('Formulario enviado exitosamente');
        setIsSubmitted(true);
      } else {
        console.error('Error al enviar formulario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const inputClasses = `w-full bg-[#1D1D1F] border border-[#2D2D2D] text-white text-sm rounded-lg
    focus:ring-[#D4A853] focus:border-[#D4A853] block p-3 placeholder-[#6E6E73] transition-colors`;

  const selectClasses = `block appearance-none w-full h-12 bg-[#1D1D1F] border border-[#2D2D2D]
    text-white py-3 px-4 pr-8 rounded-lg focus:ring-[#D4A853] focus:border-[#D4A853] transition-colors`;

  return (
    <div id="simulacro-adelanto" className="w-full bg-[#0A0A0A] py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-white font-manrope text-[26px] md:text-[40px] font-bold leading-[130%] md:leading-[48px] tracking-[0px]">
            Solicita tu adelanto de nómina
          </h1>
          <p className="text-[#D4A853] font-inter text-base md:text-lg mt-3">
            Tu nómina flexible y con un mejor rendimiento.
          </p>
        </div>

        <div className="bg-[#161616] border border-[#2D2D2D] rounded-3xl p-6 md:p-10">
          {isSubmitted ? (
            <div className="text-center space-y-6 py-8">
              <h2 className="text-white font-manrope text-[24px] md:text-[32px] font-bold leading-[130%] tracking-[0px]">
                ¡Gracias por tu solicitud!
              </h2>
              <p className="text-[#A1A1A6] font-inter text-base md:text-lg">
                Hemos recibido tu información correctamente. Nos pondremos en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full md:w-auto px-8 py-4 rounded-lg font-inter text-base font-semibold leading-normal transition-colors bg-white text-[#0A0A0A] hover:bg-[#F5F5F7]"
              >
                Ir a la página principal
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A1A1A6] font-inter">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      placeholder="Ingresa tu nombre"
                      className={`${inputClasses} ${showValidation && !formData.fullName ? 'border-red-500' : ''}`}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A1A1A6] font-inter">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="ejemplo@correo.com"
                      className={`${inputClasses} ${showValidation && formError.includes('correo') ? 'border-red-500' : ''}`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A1A1A6] font-inter">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="Ingresa tu número"
                      className={`${inputClasses} ${showValidation && !formData.phone ? 'border-red-500' : ''}`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A1A1A6] font-inter">
                      Ingreso mensual bruto
                    </label>
                    <input
                      type="number"
                      placeholder="Ingresa números"
                      className={`${inputClasses} ${showValidation && !formData.monthlyIncome ? 'border-red-500' : ''}`}
                      value={formData.monthlyIncome}
                      onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A1A1A6] font-inter">
                      Cantidad solicitada
                    </label>
                    <input
                      type="number"
                      placeholder="Ingresa números"
                      className={`${inputClasses} ${showValidation && !formData.requestedAmount ? 'border-red-500' : ''}`}
                      value={formData.requestedAmount}
                      onChange={(e) => setFormData({ ...formData, requestedAmount: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A1A1A6] font-inter">
                      ¿Con qué frecuencia recibes tu pago?
                    </label>
                    <div className="relative">
                      <select
                        value={formData.frequency}
                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                        className={`${selectClasses} ${showValidation && !formData.frequency ? 'border-red-500' : ''}`}
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="semanal">Semanal</option>
                        <option value="quincenal">Quincenal</option>
                        <option value="mensual">Mensual</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#A1A1A6]">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {showValidation && formError && (
                <p className="text-red-500 text-sm mt-4 text-center font-inter">{formError}</p>
              )}

              <button
                onClick={handleSubmit}
                className="w-full md:w-auto md:min-w-[200px] mx-auto bg-white hover:bg-[#F5F5F7] text-[#0A0A0A] py-4 px-8 rounded-lg flex items-center font-inter text-[16px] font-semibold justify-center gap-3 mt-8 transition-colors"
              >
                <span>Solicita tu adelanto</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 44 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.1923 1.5L42.5 16L28.1923 30.5M40.5128 16H1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
