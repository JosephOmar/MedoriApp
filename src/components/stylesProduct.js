import styled from 'styled-components';
import { View , Text, Image, TextInput, TouchableOpacity} from 'react-native';

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
    blackLight: "#888888",
    black: "#000000"
};

const {primary, secondary, tertiary, darkLight,brand, green, red, blackLight, black } = Colors;

export const ProductContainer = styled.View`
`;
export const ProductTextContainer = styled.View`
    padding: 50px 10px 10px 10px;
`;
export const ProductTitle = styled.Text`
    font-size: 20px;
`;
export const ProductPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const ProductButton = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    margin: 0 0 10px 0;
    border: 2px solid ${blackLight};
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.2);
`;
export const ProductButtonText = styled.Text`
    font-size: 16px;
`;