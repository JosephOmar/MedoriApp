import styled from 'styled-components';
import { View , Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
    primaryOpacity: "rgba(255,255,255,.2)",
    border: "#A930E6"
};

const {primary, secondary, tertiary, darkLight,brand, green, red, primaryOpacity, border} = Colors;

export const ShoppingContainer = styled.View`
    margin-top: 20px;
    height: 120px;
    width: 300px;
    justify-content:
`;
export const ShoppingContainerProduct = styled.View`
    flex-direction: row;
    padding: 10px 20px;
    border: 2px solid ${border}; 
    gap: 5px;
    background-color: rgba(109, 40, 217,.6)
`;
export const ShoppingContainerText = styled.View`
    gap: 10px;
`;
export const ShoppingImagen = styled.Image`
    width: 50px;
    height: 70px;
`;
export const ShoppingName = styled.Text`
    font-size: 16px;
    color: ${primary}
`;
export const ShoppingPrice = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${primary}
`;
export const ShoppingContainerButton = styled.View`

`;
export const ShoppingButton = styled.TouchableOpacity`
    position: absolute;
    right: 0
`;
export const ShoppingButtonText = styled.Text`
    text-align: right;
    background-color: ${red};
    padding: 7px 15px;
`;
export const ShoppingPriceTotal = styled.Text`
    text-align: right;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    background-color: rgba(255,255,255,.8)
`