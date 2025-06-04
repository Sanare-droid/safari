// src/app/api/newsletter-signup/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Basic email validation regex (not exhaustive, but good for a start)
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
    }

    // For now, just log the email to the console
    // In a real application, you would save this to a database, Mailchimp, etc.
    console.log(`Newsletter signup: ${email}`);

    // Simulate some processing time (optional)
    // await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({ message: 'Successfully subscribed! Thank you for joining our newsletter.' }, { status: 200 });

  } catch (error) {
    console.error('API newsletter-signup error:', error);
    // Check if it's a JSON parsing error
    if (error instanceof SyntaxError && error.message.includes('JSON')) {
        return NextResponse.json({ message: 'Invalid request format. Please send JSON.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
