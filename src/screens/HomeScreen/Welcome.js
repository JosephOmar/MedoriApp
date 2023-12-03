import {React, useLayoutEffect} from 'react'
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
  CardPriceIcon
} from '../../components/stylesCard'
import { useNavigation } from '@react-navigation/native'
import { useFirebase } from '../Auth/FirebaseContext'
import {Octicons, Ionicons} from '@expo/vector-icons';

const Welcome = () => {

  const navigation = useNavigation();
  const { user } = useFirebase();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  },[]);

  const userName = user?.displayName || 'Usuario';
  return (
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
        <CardContainer>
          <CardImage
            source={require('../../assets/img/2.jpg')}
            resizeMode="contain"
          />
          <CardName>
            Producto de Zara
          </CardName>
          <CardPriceContainer>
            <CardPriceText>
              S/1.400
            </CardPriceText>
            <CardPriceIcon>
              <Ionicons name="cart" size={20} color="#fff"/>
            </CardPriceIcon>
          </CardPriceContainer>
        </CardContainer>
      </InnerContainer>
    </StyledContainer>
  )
}


export default Welcome