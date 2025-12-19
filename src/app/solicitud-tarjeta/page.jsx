import { Suspense } from 'react';
import CardStepper from "../components/CardStepper";

export default function SolicitudTarjeta() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardStepper />
    </Suspense>
  );
}
