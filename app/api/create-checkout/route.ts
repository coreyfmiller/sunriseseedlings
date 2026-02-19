import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
    if (!stripe) {
        console.error('STRIPE_SECRET_KEY is missing or invalid on the server.');
        return NextResponse.json(
            { error: 'Server configuration error: Stripe key is missing.' },
            { status: 500 }
        );
    }

    try {
        const { items } = await req.json();

        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
        }

        // Get the base URL dynamically
        let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl && process.env.VERCEL_URL) {
            baseUrl = `https://${process.env.VERCEL_URL}`;
        }
        if (!baseUrl) {
            baseUrl = 'http://localhost:3000';
        }

        console.log('Using baseUrl for Checkout:', baseUrl);

        const line_items = items.map((item: any) => {
            const priceValue = typeof item.price === 'string'
                ? parseFloat(item.price.replace('$', ''))
                : item.price;

            let imageUrls: string[] = [];
            if (item.image) {
                try {
                    // Stripe requires absolute URLs for images
                    const imgUrl = new URL(item.image, baseUrl).toString();
                    // Only add if it's not a localhost URL (Stripe can't reach localhost)
                    if (!imgUrl.includes('localhost')) {
                        imageUrls = [imgUrl];
                    }
                } catch (e) {
                    console.error('Failed to format image URL:', e);
                }
            }

            return {
                price_data: {
                    currency: 'cad',
                    product_data: {
                        name: item.name,
                        images: imageUrls,
                        description: item.variety,
                    },
                    unit_amount: Math.round(priceValue * 100),
                },
                quantity: item.quantity || 1,
            };
        });

        console.log('Creating Stripe session with line_items count:', line_items.length);

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

        console.log('Stripe session created successfully:', session.id);
        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error('Full Stripe Session Error:', err);
        return NextResponse.json(
            { error: err.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
