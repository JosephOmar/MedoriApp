import {React, useLayoutEffect, useState, useEffect} from 'react'
import { Text, View} from 'react-native'
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
  ButtonGender,
  ButtonGenderText
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
import { RadioButton } from 'react-native-paper'; 


const Welcome = () => {

  const { user } = useFirebase();
  const userName = user?.displayName || 'Usuario';
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [searchValue, setSearchValue] = useState('');
  const [selectedGender, setSelectedGender] = useState('male');
  const handleGenderChange = (gender) => {
  setSelectedGender(gender);
  };
  //TOMA LOS PRODUCTOS DE LA FIREBASE
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "files"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  //FILTRO SEARCH
  const handleSearch = (e) => {
    const value = e.nativeEvent.text;
    setSearchValue(value);
    const filtered = products.filter(product =>
      product.name && product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  //FILTRO GENDER
  useEffect(() => {
    const filtered = products.filter(product =>
      product.gender.toLowerCase() === selectedGender.toLowerCase()
    );
    setFilteredProducts(filtered);
  }, [products, selectedGender]);


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
          <SearchInput placeholder="Buscar Productos ..." value={searchValue} onChange={handleSearch}/>
        </SearchContainer>
        <View style={{flexDirection:'row',gap:10}}>
        <ButtonGender
        title="Hombre"
        value="Hombre"
        selected={selectedGender === 'Hombre'}
        onPress={() => handleGenderChange('Hombre')}>
          <ButtonGenderText>Hombre</ButtonGenderText>
        </ButtonGender>
        <ButtonGender
        title="Mujer"
        value="Mujer"
        selected={selectedGender === 'Mujer'}
        onPress={() => handleGenderChange('Mujer')}>
          <ButtonGenderText>Mujer</ButtonGenderText>
        </ButtonGender>
        <ButtonGender
        title="Niño"
        value="Niño"
        selected={selectedGender === 'Niño'}
        onPress={() => handleGenderChange('Niño')}>
          <ButtonGenderText>Niño</ButtonGenderText>
        </ButtonGender>
        <ButtonGender
        title="Niña"
        value="Niña"
        selected={selectedGender === 'Niña'}
        onPress={() => handleGenderChange('Niña')}>
          <ButtonGenderText>Niña</ButtonGenderText>
        </ButtonGender>
        </View>
        <CardContainerWrapper>
          {filteredProducts.length > 0 ? ( 
                filteredProducts.map((product) => (
                  <CardContainer 
                    key={product.id}
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
                      <Ionicons name="cart" size={20} color="#000"/>
                    </CardPriceIcon>
                  </CardPriceContainer>
                  </CardContainer>
                ))
              ) : (
                products.map((product) => ( 
                  <CardContainer 
                    key={product.id}
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
                      <Ionicons name="cart" size={20} color="#000"/>
                    </CardPriceIcon>
                  </CardPriceContainer>
                  </CardContainer>
                ))
          )}
        </CardContainerWrapper>
      </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}


export default Welcome;