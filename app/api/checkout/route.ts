import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
    try {
        const { items } = await req.json();

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item: any) => ({
                price_data: {
                    currency: 'cad',
                    product_data: {
                        name: item.name,
                        images: item.image ? [new URL(item.image, process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000').toString()] : [],
                    },
                    unit_amount: Math.round(parseFloat(item.price.replace('$', '')) * 100),
                },
                quantity: item.quantity || 1,
            })),
            mode: 'payment',
            shipping_address_collection: {
                allowed_countries: ['CA'], // Support Canadian shipping addresses
            },
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/#catalog`,
        });

        return NextResponse.json({ sessionId: session.id, url: session.url });
    } catch (err: any) {
        console.error('Stripe Session Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
