// ShoppingCart.js
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useCarrito } from './CarritoContext';
import { InnerContainer, StyledContainer } from '../../components/styles';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const ShoppingCart = () => {
  const { productos, eliminarProducto } = useCarrito();

  const calcularPrecioTotal = () => {
    let total = 0;
    productos.forEach((producto) => {
      total += producto.price * producto.cantidad;
    });
    return total;
  };


  return (
    <KeyboardAvoidingWrapper>
        <StyledContainer>
        <InnerContainer>
            <View>
            <Text>Tu carrito de compras</Text>
            {productos.map((producto, index) => (
              <View key={`${producto.id}-${index}`}> 
                <Text>{producto.name}</Text>
                <Text>Cantidad: {producto.cantidad}</Text>
                <TouchableOpacity title="Eliminar" onPress={() => eliminarProducto(producto.id)} >
                    <Text>Eliminar</Text>
                </TouchableOpacity>
              </View>
            ))}
            <Text>Precio total: {calcularPrecioTotal()}</Text>
            </View>
        </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default ShoppingCart;