import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AddProduct from '../screens/HomeScreen/AddProduct';
import PaymentMethods from '../screens/HomeScreen/PaymentMethods';
import PerfilScreen from '../screens/HomeScreen/PerfilScreen';
import ShoppingCart from '../screens/HomeScreen/ShoppingCart';
import Welcome from '../screens/HomeScreen/Welcome';
import { auth } from '../../firebase';
import { CarritoProvider } from '../screens/HomeScreen/CarritoContext';

const Tab = createBottomTabNavigator();

const NavbarBottom = () => {

  const user = auth.currentUser;

  const email = user.email;

  return (
    <CarritoProvider>
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTransparent: true,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}>
      <Tab.Screen
        name="Products"
        component={Welcome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      {email === 'admin@gmail.com' && (
        <Tab.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" color={color} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
    </CarritoProvider>
  );
};

export default NavbarBottom;