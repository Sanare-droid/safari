// src/app/api/checkout_sessions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with a placeholder secret key
// IMPORTANT: Replace with your actual secret key stored in environment variables for production
const stripe = new Stripe('sk_test_YOUR_STRIPE_SECRET_KEY_PLACEHOLDER', {
  apiVersion: '2024-06-20', // Use the latest API version
  typescript: true, // Enable TypeScript support
});

export async function POST(req: NextRequest) {
  try {
    // For now, we'll use mock data directly in the handler.
    // In a real application, you might receive product/price IDs or amounts from the request body.
    // const body = await req.json();
    // const { priceId, quantity } = body; // Example: if you pass these from client

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Workshop Booking',
              description: 'Placeholder description for a workshop booking.',
              // images: ['https://example.com/your-product-image.jpg'], // Optional
            },
            unit_amount: 5000, // Amount in cents (e.g., $50.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/booking/cancel`,
      // automatic_tax: { enabled: true } // Optional: enable automatic tax calculation
    });

    if (session.url) {
      // If you want to redirect the user directly from the backend (less common for API routes)
      // return NextResponse.redirect(session.url, 303);

      // More commonly, return the session ID or the full session URL for the client to handle redirection
      return NextResponse.json({ sessionId: session.id, url: session.url }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Stripe session URL not found.' }, { status: 500 });
    }

  } catch (error) {
    console.error('Stripe Checkout Session creation failed:', error);
    // Stripe errors often have a 'message' property
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
