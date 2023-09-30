import React, { useState } from 'react';
import './App.css';
import logo from './components/logoOmega2.png';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import data from './Data'; // Importa los datos desde './data'

function App() {
  // Define el estado inicial para los elementos en el carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    // Busca si el producto ya existe en el carrito
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (itemId) => {
    // Filtra los elementos del carrito para quitar el producto con el ID dado
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Función para vaciar todo el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className='App'>
      <header className="App-header">
        {/* Muestra el logo en la parte superior del encabezado */}
        <img src={logo} className="Logo" alt="Logo" />
      </header>
      <div className="container">
        <header className="py-4">
          {/* Título principal de la aplicación */}
          <h1 className="text-center text-light">Punto de Venta</h1>
        </header>
        <main className="row">
          <div className="col-md-8">
            {/* Componente de lista de productos */}
            <ProductList products={data.products} addToCart={addToCart} />
          </div>
          <div className="col-md-4">
            {/* Componentes de carrito de compras y pago */}
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
            <Checkout cartItems={cartItems} clearCart={clearCart} />
          </div>
        </main>
      </div>
      <footer className="bg-dark p-3 mt-5">
        {/* Pie de página con derechos de autor */}
        <p className="text-center text-white">Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
