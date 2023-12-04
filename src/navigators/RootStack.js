import Login from './../screens/Auth/Login';
import Signup from './../screens/Auth/Signup';
import Welcome from './../screens/HomeScreen/Welcome';
import AddProduct from '../screens/HomeScreen/AddProduct';
import PaymentMethods from '../screens/HomeScreen/PaymentMethods';
import PerfilScreen from '../screens/HomeScreen/PerfilScreen';
import ShoppingCart from '../screens/HomeScreen/ShoppingCart';
import MainScreen from '../screens/HomeScreen/MainScreen';
import DetallProductScreen from '../screens/HomeScreen/DetailProductScreen';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirebaseProvider } from '../screens/Auth/FirebaseContext';
import { CarritoProvider } from '../screens/HomeScreen/CarritoContext';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <FirebaseProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'transparent'
                        },
                        headerTintColor: tertiary,
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeftContainerStyle: {
                            paddingLeft: 20
                        }
                    }}
                    initialRouteName="Login"
                >
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
                    <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }}/>
                    <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }}/>
                    <Stack.Screen name="PerfilScreen" component={PerfilScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }}/>
                    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
                    <Stack.Screen name="DetalleProducto" component={DetallProductScreen} options={{ headerShown: false }}/>

                    <Stack.Screen options={{headerTintColor: primary,  headerShown: false}} name="MainScreen" component={MainScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </FirebaseProvider>
    )
}

export default RootStack;