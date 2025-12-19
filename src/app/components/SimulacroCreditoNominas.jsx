"use client";

import { useState } from "react";

export default function SimulacroCreditoNominas() {
  const [frequency, setFrequency] = useState("");

  return (
    <div className="w-full   h-[100vh] flex flex-col justify-center items-center  mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1
          className="text-[#212A59] text-center [leading-trim:both] [text-edge:cap] font-poppins text-[40px] font-bold leading-[48px] tracking-[0px]
"
        >
          Simula tu crédito personal
        </h1>
        <p
          className="text-[#386EB1] text-center font-poppins text-[22px] font-normal leading-[33px] tracking-[0px]
"
        >
          Descubre cuánto puedes obtener en segundos, fácil y sin compromisos.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg px-8 w-full max-w-[900px]">
        <div className="grid md:grid-cols-2 gap-8 w-full  py-32">
          {/* Left Column - Form Inputs */}
          <div className="space-y-1">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Ingreso mensual bruto
              </label>
              <input
                type="number"
                placeholder="Ingresa números"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Cantidad solicitada
              </label>
              <input
                type="number"
                placeholder="Ingresa números"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              />
            </div>

            <div className="space-y-2 ">
              <label className="text-sm font-medium text-gray-700">
                ¿Con qué frecuencia recibes tu pago?
              </label>
              <div className="relative">
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-900 py-3 px-4 pr-8 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="weekly">Semanal</option>
                  <option value="biweekly">Quincenal</option>
                  <option value="monthly">Mensual</option>
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

          {/* Right Column - Credit Info */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-[#212A59] [leading-trim:both] [text-edge:cap] font-poppins text-[20px] font-normal leading-[29px] tracking-[0px]
"
              >
                Crédito máximo según tus ingresos
                <br />
                <span className="font-normal">$9,500 MXN</span>
              </h3>
            </div>

            <div>
              <h3
                className="text-[#212A59] [leading-trim:both] [text-edge:cap] font-poppins text-[20px] font-normal leading-[29px] tracking-[0px]
"
              >
                Tasa de interés fija
                <br />
                <span>25%</span>
              </h3>
            </div>

            <button
              className="w-full bg-[#212A59] hover:bg-[#1d1f37]/90 text-white  py-3 px-4 rounded-lg flex items-center  font-poppins text-[18px] font-normal flex-row  justify-between 
"
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
            <p
              className="text-[#212A59] text-right font-poppins text-[14px] font-normal leading-normal
"
            >
              Comisión por apertura del 8% más IVA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
