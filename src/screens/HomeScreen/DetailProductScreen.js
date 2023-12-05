import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { defaultImages } from '../../components/stylesCard';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { useCarrito } from './CarritoContext';
import { useNavigation } from '@react-navigation/native';
import { ProductContainer, ProductTitle, ProductPrice, ProductButton, ProductButtonText, ProductTextContainer } from '../../components/stylesProduct';

const DetailProductScreen = ({ route }) => {
  const { product } = route.params;
  const { agregarProducto } = useCarrito();
  const navigation =  useNavigation();

  function getRandomDefaultImage() {
    const randomIndex = Math.floor(Math.random() * defaultImages.length);
    return defaultImages[randomIndex];
  }

  const agregarProductoAlCarrito = () => {
    agregarProducto(product);
    navigation.navigate('ShoppingCart');
  };


  return (
    <KeyboardAvoidingWrapper>
      <View>
        <Image
          source={{ uri: product.url }}
          resizeMode="contain"
          onError={(e) => console.log("Error loading image:", e.nativeEvent.error)}
          style={{height:600, width:'100%'}}
        />
        <ProductContainer>
          <ProductButton onPress={() => agregarProductoAlCarrito(product)}>
          <ProductButtonText>Añadir</ProductButtonText>
          </ProductButton>
          <ProductTextContainer>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>PEN {product.price}</ProductPrice>
          </ProductTextContainer>
        </ProductContainer>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default DetailProductScreen;