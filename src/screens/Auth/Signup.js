import {FunctionComponent, useEffect, useState, useLayoutEffect} from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/core";
import { auth } from "../../../firebase";
import { 
    InnerContainer, 
    StyledContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    Colors,
    LefIcon, 
    RightIcon, 
    StyledInputLabel, 
    StyledTextInput,
    StyledButton,
    ButtonText,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from "../../components/styles";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

const {brand,darkLight, primary} = Colors;

const Signup = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');  
    const [Message, setMessage] = useState(''); 
    const [Registered, setRegistered] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    },[]);

    useEffect(() => {
        setEmail('');
        setPassword('');
    }, []);

    useEffect(() => {
      if (Registered) {
         navigation.navigate('Signup');
         auth.signOut();
      }
    }, [Registered]);

    const handleSignUp = async () => {
        try {
          const userCreds = await auth.createUserWithEmailAndPassword(email, password);
          const user = userCreds.user;
      
          // Actualiza el perfil del usuario con el nombre de usuario
          await user.updateProfile({
            displayName: username,
          });
      
          console.log('Registered with:', user?.email);
          setMessage('Usuario Registrado Correctamente');
          
          setRegistered(true);
        } catch (error) {
          setErrorMessage('Usuario ya registrado. Inténtalo nuevamente');
        }
    };


    return (
        <KeyboardAvoidingWrapper>          
            <StyledContainer>
                <InnerContainer>
                    <PageTitle>Medori App</PageTitle>
                    <SubTitle>Account Signup</SubTitle>
                    <MyTextInput
                        label="Username"
                        icon="person"
                        placeholder="Nombre"
                        placeholderTextColor={darkLight}
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                    <MyTextInput 
                        label="Email Address"
                        icon="mail"
                        placeholder="Email"
                        placeholderTextColor={darkLight}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        keyboradType="email-address"
                    />
                    <MyTextInput 
                        label="Password"
                        icon="lock"
                        placeholder="*********"
                        placeholderTextColor={darkLight}
                        onChangeText={pwd => setPassword(pwd)}
                        value={password}
                        secureTextEntry = {hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    {errorMessage ? (
                    <Text style={{ color: 'red' }}>{errorMessage}</Text>
                    ) : null}
                    {Message ? (
                    <Text style={{ color: 'green' }}>{Message}</Text>
                    ) : null}
                    <StyledButton onPress={handleSignUp}>
                        <ButtonText>
                            SignUp
                        </ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText>Already have an account?</ExtraText>
                        <TextLink onPress={() => navigation.navigate("Login")}>
                            <TextLinkContent>Login</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
        );
}

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


export default Signup;

