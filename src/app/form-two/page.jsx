import { Suspense } from 'react';
import CardStepper from "../components/CardStepper";

export default function FormTwo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardStepper />
    </Suspense>
  );
}
