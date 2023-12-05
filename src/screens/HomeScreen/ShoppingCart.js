// ShoppingCart.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useCarrito } from './CarritoContext';
import { InnerContainer, StyledContainer } from '../../components/styles';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { PageTitle } from '../../components/styles';
import { 
  ShoppingContainer,
  ShoppingImagen,
  ShoppingName,
  ShoppingPrice,
  ShoppingContainerButton,
  ShoppingButton,
  ShoppingButtonText,
  ShoppingContainerText,
  ShoppingContainerProduct,
  ShoppingPriceTotal
} from '../../components/stylesShopping';

const ShoppingCart = () => {
  const { productos, eliminarProducto } = useCarrito();

  const calcularPrecioTotal = () => {
    let total = 0;
    productos.forEach((producto) => {
      total += parseFloat(producto.price) 
    });
    return total;
  };


  return (
    <ImageBackground
      source={require('./../../assets/img/bgShopping.jpg')}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
    <ImageBackground
      source={require('./../../assets/img/Logo.png')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      resizeMode="contain"
    >
    <KeyboardAvoidingWrapper> 
        
        <StyledContainer>
        <InnerContainer>
            <PageTitle>Tu Carrito De Compras</PageTitle>
            <View style={{marginTop:50}}>
              {productos.map((producto, index) => (
                <ShoppingContainer key={`${producto.id}-${index}`}>
                  <ShoppingContainerProduct > 
                    <ShoppingImagen
                      source={{ uri: producto.url }}
                      resizeMode="contain"
                      onError={(e) => console.log("Error loading image:", e.nativeEvent.error)}
                    />
                    <ShoppingContainerText>
                      <ShoppingName>{producto.name}</ShoppingName>
                      <ShoppingPrice>PEN {producto.price}</ShoppingPrice>
                    </ShoppingContainerText>
                  </ShoppingContainerProduct>
                  <ShoppingContainerButton>
                    <ShoppingButton title="Eliminar" onPress={() => eliminarProducto(producto.id)} >
                        <ShoppingButtonText>Eliminar</ShoppingButtonText>
                    </ShoppingButton>
                  </ShoppingContainerButton>
                </ShoppingContainer>
              ))}
            <ShoppingPriceTotal>Precio total: {calcularPrecioTotal()}</ShoppingPriceTotal>
            </View>
        </InnerContainer>
        </StyledContainer>
        
    </KeyboardAvoidingWrapper>
    </ImageBackground>
    </ImageBackground>
  );
};

export default ShoppingCart;