// CarritoContext.js
import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (productoId) => {
    setProductos(productos.filter((p) => p.id !== productoId));
  };

  const value = {
    productos,
    agregarProducto,
    eliminarProducto,
  };

  return <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>;
};