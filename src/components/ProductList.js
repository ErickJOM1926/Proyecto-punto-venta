import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './styles/ProductList.css';

function ProductList({ products, addToCart }) {
    function groupProductsByModelAndType(products) {
        const groupedProducts = {};

        products.forEach((product) => {
            const { marca, tipo } = product;
            if (!groupedProducts[marca]) {
                groupedProducts[marca] = {};
            }
            if (!groupedProducts[marca][tipo]) {
                groupedProducts[marca][tipo] = [];
            }
            groupedProducts[marca][tipo].push(product);
        });

        return groupedProducts;
    }

    const groupedProducts = groupProductsByModelAndType(products);

    return (
        <div className="product-list">
            {Object.keys(groupedProducts).map((marca) => (
                <div key={marca} className="product-group">
                    <h1 className="elegante" class='fw-bold text-light'>{marca}</h1>
                    {Object.keys(groupedProducts[marca]).map((tipo) => (
                        <div key={tipo}>
                            <h3 className="category-title" class='text-light'>{tipo}</h3>
                            <Carousel className="product-carousel">
                                {groupedProducts[marca][tipo].map((product, index) => (
                                    (index % 3 === 0) && (
                                        <Carousel.Item key={index} className="carousel-item">
                                            <div className="row">
                                                {groupedProducts[marca][tipo].slice(index, index + 3).map((p) => (
                                                    <div className="col-md-4" key={p.id}>
                                                        <ProductCard product={p} addToCart={addToCart} />
                                                    </div>
                                                ))}
                                            </div>
                                        </Carousel.Item>
                                    )
                                ))}
                            </Carousel>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ProductList;
