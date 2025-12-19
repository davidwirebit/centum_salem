import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Email and phone are required' },
        { status: 400 }
      );
    }

    // Generate submission ID
    const submissionId = generateSubmissionId();
    
    // Log the form submission
    console.log('Credit Card Application Submission:', {
      submissionId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      timestamp: new Date().toISOString()
    });

    // Send email using Nodemailer
    await sendEmail(data, submissionId);


    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud de tarjeta de crédito enviada exitosamente',
        submissionId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing credit card application:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}

// Create transporter
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
    },
  });
}

async function sendEmail(data, submissionId) {
  const transporter = createTransporter();

  const htmlContent = generateHTMLEmailContent(data, submissionId);

  const mailOptions = {
    from: {
      name: 'Centum Solicitudes',
      address: process.env.GMAIL_USER || 'noreply@centum.com'
    },
    to: process.env.EMAIL_RECIPIENT || 'contacto@centum.mx',
    subject: `Nueva Solicitud Tarjeta de Crédito - ${data.firstName || ''} ${data.lastName || ''} [${submissionId}]`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}




function generateHTMLEmailContent(data, submissionId) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nueva Solicitud de Tarjeta de Crédito</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1E3A8A, #3B82F6); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .section { background: #f8f9fa; margin: 20px 0; padding: 25px; border-radius: 8px; border-left: 5px solid #FFD700; }
        .section h2 { color: #1E3A8A; margin-top: 0; padding-bottom: 10px; border-bottom: 2px solid #FFD700; }
        .data-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #e0e0e0; }
        .data-label { font-weight: bold; color: #555; }
        .data-value { color: #333; }
        .footer { background: #1E3A8A; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; margin-top: 20px; }
        .submission-id { background: #FFD700; color: #1E3A8A; padding: 10px 15px; border-radius: 5px; font-weight: bold; display: inline-block; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🏦 Centum</div>
        <h1>Nueva Solicitud de Tarjeta de Crédito</h1>
        <div class="submission-id">ID: ${submissionId}</div>
      </div>

      <div class="section">
        <h2>📧 Información de Contacto</h2>
        <div class="data-row">
          <span class="data-label">Correo electrónico:</span>
          <span class="data-value">${data.email || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Teléfono:</span>
          <span class="data-value">+52 ${data.phone || 'No proporcionado'}</span>
        </div>
      </div>

      <div class="section">
        <h2>👤 Información Personal</h2>
        <div class="data-row">
          <span class="data-label">Nombre completo:</span>
          <span class="data-value">${data.firstName || ''} ${data.lastName || ''} ${data.secondLastName || ''}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Género:</span>
          <span class="data-value">${data.gender === 'mujer' ? 'Mujer' : data.gender === 'hombre' ? 'Hombre' : 'No especificado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Fecha de nacimiento:</span>
          <span class="data-value">${data.birthDay || ''}/${data.birthMonth || ''}/${data.birthYear || ''}</span>
        </div>
        <div class="data-row">
          <span class="data-label">País de nacimiento:</span>
          <span class="data-value">${data.birthCountry || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Estado de nacimiento:</span>
          <span class="data-value">${data.birthState || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">CURP:</span>
          <span class="data-value">${data.curp || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">RFC:</span>
          <span class="data-value">${data.rfc || 'No proporcionado'}</span>
        </div>
      </div>

      <div class="section">
        <h2>🏠 Dirección</h2>
        <div class="data-row">
          <span class="data-label">Código Postal:</span>
          <span class="data-value">${data.postalCode || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Estado:</span>
          <span class="data-value">${data.state || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Municipio/Alcaldía:</span>
          <span class="data-value">${data.municipality1 || 'No proporcionado'}</span>
        </div>  
        <div class="data-row">
          <span class="data-label">Colonia:</span>
          <span class="data-value">${data.colony || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Calle:</span>
          <span class="data-value">${data.street || 'No proporcionado'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Número Exterior:</span>
          <span class="data-value">${data.exteriorNumber || 'No proporcionado'}</span>
        </div>
        ${data.interiorNumber ? `
        <div class="data-row">
          <span class="data-label">Número Interior:</span>
          <span class="data-value">${data.interiorNumber}</span>
        </div>
        ` : ''}
      </div>

      <div class="section">
        <h2>✅ Consentimientos</h2>
        <div class="data-row">
          <span class="data-label">Acepta Aviso de Privacidad:</span>
          <span class="data-value">${data.acceptPrivacy ? '✅ SÍ' : '❌ NO'}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Acepta Consulta a Buró:</span>
          <span class="data-value">${data.buroAccept ? '✅ SÍ' : '❌ NO'}</span>
        </div>
      </div>

      <div class="footer">
        <p><strong>📅 Fecha de Solicitud:</strong><br>
        ${new Date().toLocaleString('es-MX', { 
          timeZone: 'America/Mexico_City',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
        <p style="margin-top: 20px; font-size: 14px; opacity: 0.9;">
          Este correo fue generado automáticamente por el sistema de solicitudes de Centum
        </p>
      </div>
    </body>
    </html>
  `;
}


function generateSubmissionId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `CC-${timestamp}-${random}`;
}

export async function GET() {
  return NextResponse.json(
    { message: 'Business form API endpoint' },
    { status: 200 }
  );
}
