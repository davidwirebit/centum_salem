import CardOneStepper from "../components/CardOneStepper";
import { Suspense } from "react";

export default function TerminalesPago() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <CardOneStepper />
            </Suspense>
        </div>
    )
}