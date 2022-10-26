import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

const CartsContext = ({ children }) => {

    const [cart, setCart] = useState(null);

    const addToCart = (id, quantity, price) => {
        const storageCart = localStorage.getItem('eshiki_cart', true);
        if (storageCart) {
            const parseCart = JSON.parse(storageCart);
            const courseCart = [...parseCart, { id, quantity, price }];
            const stringifyCourse = JSON.stringify(courseCart);
            localStorage.setItem('eshiki_cart', stringifyCourse);
            setCart(courseCart);
        } else {
            const stringifyCourse = JSON.stringify([{ id, quantity, price }]);
            localStorage.setItem('eshiki_cart', stringifyCourse);
            setCart([{ id, quantity, price }]);
        }

    }

    const deleteCart = (id) => {
        const storageCart = localStorage.getItem('eshiki_cart', true);
        if (storageCart) {
            const parseCart = JSON.parse(storageCart);
            const findCourse = parseCart.find(item => parseInt(item.id) === parseInt(id));
            if (findCourse) {
                const remainingCourseCart = parseCart.filter(item => parseInt(item.id) !== parseInt(id));
                const stringifyRemainingCart = JSON.stringify(remainingCourseCart);
                localStorage.setItem('eshiki_cart', stringifyRemainingCart);
                setCart(remainingCourseCart);
            }
        }
    }

    useEffect(() => {
        const storageCart = localStorage.getItem('eshiki_cart', true);
        if (storageCart) {
            const parseCart = JSON.parse(storageCart);
            setCart(parseCart);
        } else {
            setCart(null);
        }
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartsContext;
