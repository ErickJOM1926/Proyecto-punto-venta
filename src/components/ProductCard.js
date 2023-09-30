import React from 'react';

function ProductCard({ product, addToCart }) {
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
