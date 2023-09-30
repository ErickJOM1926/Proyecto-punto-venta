import React from 'react';
import CartItem from './CartItem';
import './styles/ShoppingCart.css'; // Importa tus estilos CSS personalizados

function ShoppingCart({ cartItems, removeFromCart }) {
    return (
        <div className="shopping-cart">
            <h2 className="cart-title">Carrito de Compras</h2>
            <ul className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
