import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple validation
function validateFormData(data: unknown): data is ContactFormData {
  if (typeof data !== 'object' || data === null) return false;

  const obj = data as Record<string, unknown>;
  return (
    typeof obj.name === 'string' &&
    obj.name.trim().length > 0 &&
    typeof obj.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) &&
    typeof obj.subject === 'string' &&
    obj.subject.trim().length > 0 &&
    typeof obj.message === 'string' &&
    obj.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data
    if (!validateFormData(body)) {
      return NextResponse.json(
        { error: 'Érvénytelen adatok' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email using a service like Nodemailer, SendGrid, etc.
    // 2. Store the message in a database
    // 3. Implement rate limiting and spam protection

    console.log('Contact form submission:', body);

    // For now, we'll just log it and return success
    // In production, implement email sending here

    return NextResponse.json(
      { success: true, message: 'Üzenet sikeresen elküldve' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Szerver hiba' },
      { status: 500 }
    );
  }
}
