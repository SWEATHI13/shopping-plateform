import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart items from sessionStorage
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const handleRemoveItem = (index) => {
        // Remove item from cart
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {cartItems.map((item, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
                            <img src={item.src} alt={item.name} style={{ width: '100px', marginRight: '16px' }} />
                            <div>
                                <div>{item.name}</div>
                                <div>{item.description}</div>
                                <div>Price: {item.price}</div>
                                <div>Quantity: {item.quantity}</div>
                                <button
                                    onClick={() => handleRemoveItem(index)}
                                    style={{ backgroundColor: 'red', color: 'white', padding: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                                >
                                    Remove from cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
