import React from 'react';
import './styles/CartItem.css'; // Importa los estilos CSS personalizados

function CartItem({ item, removeFromCart }) {
    return (
        <div className="cart-item">
            <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">Precio: ${item.price}</p>
                <p className="item-quantity">Cantidad: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Eliminar
            </button>
        </div>
    );
}

export default CartItem;
