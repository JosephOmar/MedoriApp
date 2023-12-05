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
    blackLight: "#333333",
    black: "#000000"
};

const {primary, secondary, tertiary, darkLight,brand, green, red, blackLight, black } = Colors;

export const CardContainerWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; 
  margin-top: 10px;
`;

export const CardContainer = styled.TouchableOpacity`
    width: 47%;
    height: 300px;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    overflow: hidden; 
    margin: 10px 0
`;
export const CardImage = styled.Image`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
`;
export const CardName = styled.Text`
    position: absolute;
    left: 5px;
    top: 10px;
    color: ${black};
    font-weight: bold;
    font-size: 12px;
    background-color: rgba(255,255,255,.5);
`;
export const CardPriceContainer = styled.View`
    position: absolute;
    bottom: 12px;
    padding: 0 12px;
    color: ${black};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
`;
export const CardPriceText = styled.Text`
    color: ${black};
    font-weight: bold;
    font-size: 16px;
    background-color: rgba(255,255,255,.5);
`;
export const CardPriceIcon = styled.View`
    justifify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,.5);
`