import { NextResponse } from "next/server";

export async function POST(req) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
        const body = await req.json();
        
        const response = await fetch(
            `${API_URL}/api/centum/email/two-step`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  
                },
                body: JSON.stringify(body),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();

            console.log("Error al enviar el formulario de dos pasos", errorData.errors[0].detail);
            const theError = errorData.errors[0].detail;
            
            throw new Error(theError);
        }

        const text = await response.text();
        const res = text ? JSON.parse(text) : {};
        const data = res.data;

        return NextResponse.json({
            message: "Emails enviados exitosamente",
            data,
        });
    } catch (error) {
        console.error("Error al enviar el formulario de dos pasos:", error);

        return NextResponse.json(
            { error: "Error al enviar el formulario de dos pasos", detail: error.message },
            { status: 500 }
        );
    }
}
