// ShoppingCart.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCarrito } from './CarritoContext';
import { InnerContainer, StyledContainer } from '../../components/styles';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const ShoppingCart = () => {
  const { productos, eliminarProducto } = useCarrito();

  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
      <InnerContainer>
        <View>
          <Text>Tu carrito de compras</Text>
          {productos.map((producto) => (
            <View key={producto.id}> 
              <Text>{producto.name}</Text>
              <Text>Cantidad: {producto.cantidad}</Text>
              <Button title="Eliminar" onPress={() => eliminarProducto(producto.id)} />
            </View>
          ))}
        </View>
      </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default ShoppingCart;