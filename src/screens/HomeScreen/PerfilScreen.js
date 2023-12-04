import {React, useState} from 'react';
import { View, Text,TextInput, Button, TouchableOpacity } from 'react-native';
import { InnerContainer, StyledContainer } from '../../components/styles';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { useFirebase } from '../Auth/FirebaseContext';
import { useNavigation } from '@react-navigation/native';

const ShoppingCart = () => {
    const { user } = useFirebase();
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState('');
  
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
        <Text>TUS DATOS DE USUARIO</Text>
        <View>
            <Text>Nombre:</Text>
            <TextInput
                value={name}
                onChangeText={setName}
            />
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
            />
            <Text>Nueva contraseña:</Text>
            <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
            />
            <Button title="Guardar" onPress={handleSave} />
        </View>
        </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default ShoppingCart;