import {useEffect, useMemo, useState} from "react";
import { db } from "../data/db.ts";
import type { Guitar, CartItem } from "../types";

export const useCart = () => {

    const initialCart = (): CartItem[] => {
    const cartFromStorage = localStorage.getItem('cart');
    return cartFromStorage ? JSON.parse(cartFromStorage) : [];
};


    // State
    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);
    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item : Guitar) {
        const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

        if (itemExists >= 0) { // existe en el carrito
            if (cart[itemExists].quantity >= MAX_ITEMS) return; // no se puede agregar mas items
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        } else {
            const newItem : CartItem = { ...item, quantity: 1 };
            setCart([...cart, newItem]);
        }
    }

    function removeFromCart(id : Guitar['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
    }

    function increaseQuantity(id : Guitar['id']) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        });

        setCart(updatedCart);
    }

    function decreaseQuantity(id : Guitar['id']) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        });

        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }

    // State derivado
    const isEmpty : boolean = useMemo(() => cart.length === 0, [cart]);
    const cartTotal : number = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
};