// src/app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Readable } from 'stream';

// Initialize Stripe with a placeholder secret key
// IMPORTANT: Replace with your actual secret key stored in environment variables for production
const stripe = new Stripe('sk_test_YOUR_STRIPE_SECRET_KEY_PLACEHOLDER', {
  apiVersion: '2024-06-20',
  typescript: true,
});

// Placeholder for your Stripe webhook secret
// IMPORTANT: Replace with your actual webhook signing secret from the Stripe dashboard
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_YOUR_STRIPE_WEBHOOK_SECRET_PLACEHOLDER';

// Helper function to buffer the request stream
async function buffer(readable: Readable): Promise<Buffer> {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  if (!req.body) {
    return NextResponse.json({ error: 'No request body' }, { status: 400 });
  }
  const buf = await buffer(req.body as unknown as Readable); // Type assertion
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    console.error('Webhook Error: Missing stripe-signature header');
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(`Webhook signature verification failed: ${errorMessage}`, err);
    return NextResponse.json({ error: `Webhook signature verification failed: ${errorMessage}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: Fulfill the purchase (e.g., save order to database, send confirmation email)
      // For now, we'll just log the session ID.
      console.log(`Checkout session completed: ${session.id}`);
      // Example: Accessing metadata if you passed it during session creation
      // if (session.metadata) {
      //   console.log('Metadata:', session.metadata);
      //   const workshopId = session.metadata.workshopId;
      //   const userId = session.metadata.userId;
      //   // Process booking with workshopId and userId
      // }
      break;
    // Add other event types you want to handle
    // case 'payment_intent.succeeded':
    //   const paymentIntent = event.data.object as Stripe.PaymentIntent;
    //   console.log(`PaymentIntent succeeded: ${paymentIntent.id}`);
    //   break;
    default:
      console.log(`Received event: ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return NextResponse.json({ received: true }, { status: 200 });
}
