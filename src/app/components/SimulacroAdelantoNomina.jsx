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

  return (
    <div id="simulacro-adelanto" className="w-full max-w-2xl mx-auto flex flex-col justify-center h-screen px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-[#212A59] text-center [leading-trim:both] [text-edge:cap] font-poppins text-[40px] font-bold leading-[48px] tracking-[0px]">
          Solicita tu adelanto tu nómina
        </h1>
        <p className="text-lg text-blue-600">
          Tu nómina flexible y con un mejor rendimiento.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6 space-y-6 w-full mx-auto py-20">
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
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      placeholder="Ingresa tu nombre"
                      className={`w-full bg-gray-50 border ${showValidation && formError && !formData.fullName ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5`}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="ejemplo@correo.com"
                      className={`w-full bg-gray-50 border ${showValidation && formError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="Ingresa tu número"
                      className={`w-full bg-gray-50 border ${showValidation && formError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Ingreso mensual bruto
                    </label>
                    <input
                      type="number"
                      placeholder="Ingresa números"
                      className={`w-full bg-gray-50 border ${showValidation && formError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5`}
                      value={formData.monthlyIncome}
                      onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Cantidad solicitada
                    </label>
                    <input
                      type="number"
                      placeholder="Ingresa números"
                      className={`w-full bg-gray-50 border ${showValidation && formError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5`}
                      value={formData.requestedAmount}
                      onChange={(e) => setFormData({ ...formData, requestedAmount: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      ¿Con qué frecuencia recibes tu pago?
                    </label>
                    <div className="relative">
                      <select
                        value={formData.frequency}
                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                        className={`block appearance-none w-full h-12 bg-gray-50 border ${showValidation && formError ? 'border-red-500' : 'border-gray-300'} text-gray-900 py-3 px-4 pr-8 rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="semanal">Semanal</option>
                        <option value="quincenal">Quincenal</option>
                        <option value="mensual">Mensual</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {showValidation && formError && (
                <p className="text-red-500 text-sm mt-1 text-center">{formError}</p>
              )}

              <button
                onClick={handleSubmit}
                className="w-1/2 mx-auto bg-[#212A59] hover:bg-[#1d1f37]/90 text-white py-3 px-4 rounded-lg flex items-center font-poppins text-[18px] font-normal flex-row justify-around mt-8"
              >
                <span>Solicita tu adelanto</span>
                <svg
                  width="34"
                  height="32"
                  viewBox="0 0 44 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.1923 1.5L42.5 16L28.1923 30.5M40.5128 16H1.5"
                    stroke="white"
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
