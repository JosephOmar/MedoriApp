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
    black: "#000"
};

const {primary, secondary, tertiary, darkLight,brand, green, red, blackLight, black } = Colors;

export const Navbar = styled.View`
    width: 100%;
    height: 50px;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    padding: 0 2px;
`;

export const NavbarText = styled.Text`
    color: ${blackLight};
    font-size: 18px;
    font-weight: bold;
`;
export const NavbarTextContainer = styled.View` 
    flex-direction: column;
    gap: 2px;
`;
export const NavbarSubText = styled.Text`
    color: ${blackLight};
    font-size: 12px;
`;

export const NavbarImagen = styled.Image`
    width : 40px;
    height : 40px;
    border-radius: 20px; 
`;
export const SearchContainer = styled.View`
    flex-direction: row;
    padding: 16px 0;
    align-items: center;
    justify-content: center;

`;  
export const SearchInput = styled.TextInput`
    background-color: ${primary};
    padding-left: 30px;
    padding-right: 55px;
    border-radius: 30px;
    font-size: 16px;
    height: 40px;
    width: 80%;
    color: ${tertiary};
    border: ${darkLight};
`;
export const SearchButton = styled.TouchableOpacity`
    background-color: ${brand};
    border-radius: 10px;
    padding: 8px;
    height: 40px;
    width: 40px;
`;
export const SearchIcon = styled.View`
    justifify-content: center;
    align-items: center;
`;

