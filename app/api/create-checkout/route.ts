import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
    if (!process.env.STRIPE_SECRET_KEY) {
        console.error('STRIPE_SECRET_KEY is missing');
        return NextResponse.json(
            { error: 'Stripe is not configured on the server.' },
            { status: 500 }
        );
    }

    try {
        const { items } = await req.json();

        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

        const line_items = items.map((item: any) => {
            const priceValue = typeof item.price === 'string'
                ? parseFloat(item.price.replace('$', ''))
                : item.price;

            return {
                price_data: {
                    currency: 'cad',
                    product_data: {
                        name: item.name,
                        images: item.image ? [new URL(item.image, baseUrl).toString()] : [],
                        description: item.variety,
                    },
                    unit_amount: Math.round(priceValue * 100),
                },
                quantity: item.quantity || 1,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            shipping_address_collection: {
                allowed_countries: ['CA'],
            },
            success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/#catalog`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error('Stripe Session Error:', err);
        return NextResponse.json(
            { error: err.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
