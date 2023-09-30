import React, { useState } from 'react';
import './styles/Checkout.css'; // Importa los estilos CSS personalizados
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD3oNY6WuaVKsAfzevls_IhJi_2__ZbiV4",
    authDomain: "punto-venta-ea5dc.firebaseapp.com",
    projectId: "punto-venta-ea5dc",
    storageBucket: "punto-venta-ea5dc.appspot.com",
    messagingSenderId: "409503339598",
    appId: "1:409503339598:web:fa4b13e6d245411e0b5f1f"
};

// Inicializa Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

function Checkout({ cartItems, clearCart }) {
    const [checkoutComplete, setCheckoutComplete] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: 'tarjeta',
        cardNumber: '',
        expirationDate: new Date(),
        cvv: '',
        paypalEmail: ''
    });

    // Calcula el costo total de la venta
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            expirationDate: date
        });
    };

    const handleCheckout = async () => {
        if (formData.name && formData.address && formData.paymentMethod) {
            if (
                (formData.paymentMethod === 'tarjeta' && formData.cardNumber && formData.cvv) ||
                (formData.paymentMethod === 'paypal' && formData.paypalEmail)
            ) {
                try {
                    const orderData = {
                        buyer: {
                            name: formData.name,
                            address: formData.address,
                        },
                        paymentMethod: formData.paymentMethod,
                        totalCost: totalCost,
                        items: cartItems.map((item) => ({
                            id: item.id,
                            name: item.name,
                            quantity: item.quantity,
                            price: item.price,
                        })),
                        timestamp: new Date(),
                    };

                    const docRef = await addDoc(collection(db, 'ventas'), orderData);
                    console.log('Pedido registrado con ID:', docRef.id);

                    clearCart();
                    setCheckoutComplete(true);
                } catch (error) {
                    alert('Ocurrió un error al confirmar el pedido.');
                    console.error('Error al guardar el pedido:', error);
                }
            } else {
                alert('Por favor, completa todos los campos del formulario según el método de pago seleccionado.');
            }
        } else {
            alert('Por favor, completa todos los campos del formulario.');
        }
    };

    const handleNewOrder = () => {
        setCheckoutComplete(false);
    };

    return (
        <div className="checkout">
            <h2 className="checkout-title">Checkout</h2>
            {checkoutComplete ? (
                <div>
                    <p className="checkout-message">¡Gracias por tu compra!</p>
                    <Button onClick={handleNewOrder} variant="primary" className="checkout-button">
                        Realizar Nuevo Pedido
                    </Button>
                </div>
            ) : (
                <div>
                    <div className="checkout-summary">
                        <h3 className="checkout-subtitle">Resumen del Pedido</h3>
                        <ul className="checkout-items">
                            {cartItems.map((item) => (
                                <li key={item.id} className="checkout-item">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-quantity">Cantidad: {item.quantity}</span>
                                    <span className="item-price">${item.price.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="total-cost">Costo Total: ${totalCost.toFixed(2)}</div>
                    </div>
                    <div className="checkout-form-container">
                        <h3 className="checkout-subtitle">Información del Comprador</h3>
                        <Form className="checkout-form">
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Nombre del Comprador"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder="Dirección de Envío"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='label'>Método de Pago</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleChange}
                                >
                                    <option value="tarjeta">Tarjeta de Crédito</option>
                                    <option value="paypal">PayPal</option>
                                </Form.Control>
                            </Form.Group>
                            {formData.paymentMethod === 'tarjeta' && (
                                <div className="credit-card-info">
                                    <h3 className="checkout-subtitle">Información de Tarjeta de Crédito</h3>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            name="cardNumber"
                                            placeholder="Número de Tarjeta"
                                            value={formData.cardNumber}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className='label'>Fecha de Expiración</Form.Label>
                                        <br />
                                        <DatePicker
                                            selected={formData.expirationDate}
                                            onChange={handleDateChange}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                            name="expirationDate"
                                            className="form-control"
                                            placeholderText="Fecha de Expiración"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            name="cvv"
                                            placeholder="CVV"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            )}
                            {formData.paymentMethod === 'paypal' && (
                                <div className="paypal-info">
                                    <h3 className="checkout-subtitle">Información de PayPal</h3>
                                    <Form.Group>
                                        <Form.Control
                                            type="email"
                                            name="paypalEmail"
                                            placeholder="Correo Electrónico de PayPal"
                                            value={formData.paypalEmail}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                            )}
                            {cartItems.length ? (
                                <Button onClick={handleCheckout} variant="primary" className="checkout-button">
                                    Confirmar Pedido
                                </Button>
                            ) : (
                                <Button className='btn btn-secondary'>Confirmar Pedido</Button>
                            )}
                        </Form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
