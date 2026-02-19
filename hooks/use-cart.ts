import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    name: string;
    variety: string;
    price: string;
    image: string;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (name: string) => void;
    updateQuantity: (name: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((i) => i.name === item.name);

                if (existingItem) {
                    set({
                        items: currentItems.map((i) =>
                            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    });
                } else {
                    set({ items: [...currentItems, { ...item, quantity: 1 }] });
                }
            },
            removeItem: (name) => {
                set({ items: get().items.filter((i) => i.name !== name) });
            },
            updateQuantity: (name, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(name);
                    return;
                }
                set({
                    items: get().items.map((i) =>
                        i.name === name ? { ...i, quantity } : i
                    ),
                });
            },
            clearCart: () => set({ items: [] }),
            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },
            getTotalPrice: () => {
                return get().items.reduce((total, item) => {
                    const price = parseFloat(item.price.replace('$', ''));
                    return total + price * item.quantity;
                }, 0);
            },
        }),
        {
            name: 'sunrise-seedlings-cart',
        }
    )
);
