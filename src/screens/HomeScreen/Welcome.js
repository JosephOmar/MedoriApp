import {React, useLayoutEffect, useState, useEffect} from 'react'
import { Text } from 'react-native'
import { StyledContainer, InnerContainer} from '../../components/styles'
import { 
  Navbar, 
  NavbarImagen, 
  NavbarSubText, 
  NavbarText, 
  NavbarTextContainer,
  SearchContainer,
  SearchButton, 
  SearchInput,
  SearchText,
  SearchIcon,
} from '../../components/stylesHome'
import { 
  CardContainer,
  CardImage,
  CardName,
  CardPriceContainer,
  CardPriceText,
  CardPriceIcon,
  CardContainerWrapper
} from '../../components/stylesCard'
import { useNavigation } from '@react-navigation/native'
import { useFirebase } from '../Auth/FirebaseContext'
import {Octicons, Ionicons} from '@expo/vector-icons';
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from '@firebase/firestore'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper'
import { defaultImages } from '../../components/stylesCard'

const Welcome = () => {

  const { user } = useFirebase();
  const userName = user?.displayName || 'Usuario';
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "files"));
        console.log("Query snapshot:", querySnapshot.docs); // Agregado para verificar el snapshot
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log("Productos recuperados:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  function getRandomDefaultImage() {
    const randomIndex = Math.floor(Math.random() * defaultImages.length);
    return defaultImages[randomIndex];
  }

  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
      <InnerContainer>
        <Navbar>
          <NavbarImagen
          source={require('../../assets/img/avatar.jpg')}
          resizeMode = "contain"
          />
          <NavbarTextContainer>
            <NavbarText>Hi {userName} 👋</NavbarText>
            <NavbarSubText>Descubre un nuevo mundo en moda</NavbarSubText>
          </NavbarTextContainer>
        </Navbar>
        <SearchContainer>
          <SearchInput placeholder="Buscar Productos ..." />
          <SearchButton>
            <SearchIcon>
              <Octicons name="search" size={20} color="#fff" />
            </SearchIcon>
          </SearchButton>
        </SearchContainer>
        <CardContainerWrapper>
        {products.map((product, index) => (
          
          <CardContainer 
            key={index}
            onPress={() => navigation.navigate('DetalleProducto', { product: product })}
          >
            <CardImage
              source={{ uri: product.url }}
              resizeMode="cover"
              onError={(e) => console.log("Error loading image:", e.nativeEvent.error)}
            />
          <CardName>{product.name}</CardName>
          <CardPriceContainer>
            <CardPriceText>
            {product.price}
            </CardPriceText>
            <CardPriceIcon>
              <Ionicons name="cart" size={20} color="#fff"/>
            </CardPriceIcon>
          </CardPriceContainer>
          </CardContainer>
        ))}
        </CardContainerWrapper>
      </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}


export default Welcome