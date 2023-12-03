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

    const Login = () => {

        const [hidePassword, setHidePassword] = useState(true);
        const [errorMessage, setErrorMessage] = useState('');  
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
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    navigation.navigate("MainScreen");
                }
        })
        return unsubscribe
        }, [])

        const handleLogin = () => {
            auth
                .signInWithEmailAndPassword(email, password)
                .then(userCrds => {
                    const user = userCrds.user;
                    console.log('LoggedIn with: ', user?.email);
                })
                .catch(error => {
                    setErrorMessage('Usuario incorrecto. Verifica tu email y contraseña.');
                })
        };


        return (
            <KeyboardAvoidingWrapper>          
                <StyledContainer>
                    <InnerContainer>
                        <PageLogo resizeMode="contain" source={require('./../../assets/img/Logo1.png')}/>
                        <PageTitle>Medori App</PageTitle>
                        <SubTitle>Account Login</SubTitle>
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
                        <StyledButton onPress={handleLogin}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Dont' have an account already?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent>Signup</TextLinkContent>
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

    export default Login;

