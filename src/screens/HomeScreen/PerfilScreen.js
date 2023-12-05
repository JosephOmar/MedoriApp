import {React, useState} from 'react';
import { View, Text,TextInput, Button, TouchableOpacity } from 'react-native';
import { InnerContainer, StyledContainer } from '../../components/styles';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { useFirebase } from '../Auth/FirebaseContext';
import { useNavigation } from '@react-navigation/native';
import { PageTitle } from '../../components/styles';
import { 
  StyledTextInput,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  RightIcon,
  LefIcon,
  Colors
 } from '../../components/styles';

 const {brand,darkLight, primary} = Colors;
 import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


const ShoppingCart = () => {
    const { user } = useFirebase();
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
  
    const handleSave = () => {
      // Guardar los cambios en el perfil del usuario
      user.updateProfile({
        displayName: name,
      }).then(() => {
        // Actualizar el email del usuario
        user.updateEmail(email).then(() => {
          // Enviar correo de verificación al nuevo email
          user.sendEmailVerification();
        }).catch((error) => {
          console.log(error);
        });
        // Cambiar la contraseña del usuario
        user.updatePassword(newPassword);
      }).catch((error) => {
        if (error.code === 'auth/user-token-expired') {
            // Mostrar un mensaje al usuario indicando que sus credenciales han expirado y solicitarle que inicie sesión nuevamente
          } else {
            console.log(error);
        }
      });
    };

  return (
    <KeyboardAvoidingWrapper>
        <StyledContainer>
        <InnerContainer>
        <PageTitle>Tus Datos De Usuario</PageTitle>
        <View>
            <MyTextInput 
              label="Name"
              icon="person"
              placeholder="Name"
              placeholderTextColor={darkLight}
              onChangeText={setName}
              value={name}
            />
            <MyTextInput 
              label="Emai"
              icon="mail"
              placeholder="Email"
              placeholderTextColor={darkLight}
              onChangeText={setEmail}
              value={email}
              keyboradType="email-address"
            />
            <MyTextInput 
              label="Password"
              icon="lock"
              placeholder="*********"
              placeholderTextColor={darkLight}
              onChangeText={setNewPassword}
              value={newPassword}
              secureTextEntry = {hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <StyledButton onPress={handleSave}> 
              <ButtonText>Actualizar</ButtonText>
            </StyledButton>
        </View>
        </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (
      <View>
          <LefIcon>
              <Octicons name={icon} size={30} color={brand}/>
          </LefIcon>
          <StyledInputLabel>{label}</StyledInputLabel>
          <StyledTextInput {...props}/>
          {isPassword && (
              <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                  <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
              </RightIcon>
          )}
      </View>
  )
}

export default ShoppingCart;