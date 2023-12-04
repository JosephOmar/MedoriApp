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
    left: 12px;
    top: 20px;
    color: ${black};
    font-weight: bold;
    font-size: 12px;
`;
export const CardPriceContainer = styled.View`
    position: absolute;
    bottom: 12px;
    padding: 0 12px;
    color: ${black};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const CardPriceText = styled.Text`
    color: ${black};
    font-weight: bold;
    font-size: 16px;
`;
export const CardPriceIcon = styled.View`
    justifify-content: center;
    align-items: center;
`
export const defaultImages = [
    require('../assets/imgProducts/AbrigoLargoConLino.jpg'),
    require('../assets/imgProducts/AbrigoPuntoMacrame.jpg'),
    require('../assets/imgProducts/AbrigoPuntoMacrameNegro.jpg'),
    require('../assets/imgProducts/BataCapuchaSeda.jpg'),
    require('../assets/imgProducts/AbrigoOversizeBrillo.jpg'),
    require('../assets/imgProducts/AbrigoRectoConLana.jpg'),
    require('../assets/imgProducts/AbrigoBorreguillo.jpg'),
    require('../assets/imgProducts/AbrigoConLana.jpg'),
    require('../assets/imgProducts/AbrigoAcolchadoCapucha.jpg'),
    require('../assets/imgProducts/AbrigoLanaCinturon.jpg'),
    require('../assets/imgProducts/Braguita100Lana.jpg'),
    require('../assets/imgProducts/CamisetaPointelleMangaLarga.jpg'),
    require('../assets/imgProducts/Chaqueta100Lana.jpg'),
    require('../assets/imgProducts/VestidoLargoCutOutZWCollection.jpg'),
    require('../assets/imgProducts/VestidoLentejuelas.jpg'),
    require('../assets/imgProducts/VestidoAsimetricoSatinado.jpg'),
    require('../assets/imgProducts/CamisaRayas.jpg'),
    require('../assets/imgProducts/CamisaTwillBolsillo.jpg'),
    require('../assets/imgProducts/CamisaEstructuraTwill.jpg'),
    require('../assets/imgProducts/CamisaEstampadoOndas.jpg'),
    require('../assets/imgProducts/CamisaTroqueladoBordado.jpg'),
    require('../assets/imgProducts/CamisetaCanaleCutOut.jpg'),
    require('../assets/imgProducts/CamisetaRotos.jpg'),
    require('../assets/imgProducts/CamisetaEstampadoDifuminado.jpg'),
    require('../assets/imgProducts/CamisetaAcabadoDoble.jpg'),
    require('../assets/imgProducts/ZapatoVestir.jpg'),
    require('../assets/imgProducts/SandaliaDobleTira.jpg'),
    require('../assets/imgProducts/ZapatillaDeportivaBandeleta.jpg'),
    require('../assets/imgProducts/BambaMultipiezas.jpg'),
    require('../assets/imgProducts/BlazerCruzadaTraje.jpg'),
    require('../assets/imgProducts/BlazerTrajeCosturas.jpg'),
    require('../assets/imgProducts/BlazerTrajeAlgodon.jpg'),
    require('../assets/imgProducts/SudaderaLisa.jpg'),
    require('../assets/imgProducts/CazadoraFelpaCremallera.jpg'),
    require('../assets/imgProducts/SudaderaCorazónTroquelado.jpg'),
    require('../assets/imgProducts/BermudaDenimMarine.jpg'),
    require('../assets/imgProducts/ChalecoTrajeMezclaLanaMelange.jpg'),
    require('../assets/imgProducts/VestidoEstampadoFlores.jpg'),
    require('../assets/imgProducts/VestidoRibRayas.jpg'),
    require('../assets/imgProducts/VestidoPuntoDesagujado.jpg'),
    require('../assets/imgProducts/BomberAcolchadaMultibolsillos.jpg'),
    require('../assets/imgProducts/BlazerTejidoConfort.jpg'),
    require('../assets/imgProducts/BomberEfectoPiel.jpg'),
    require('../assets/imgProducts/BomberAlgodon.jpg'),
    require('../assets/imgProducts/CazadoraLigera.jpg'),
    require('../assets/imgProducts/ChalecoDenimBolsillos.jpg'),
    require('../assets/imgProducts/BomberOversize.jpg'),
    require('../assets/imgProducts/BomberAcolchadaOversize.jpg'),
  ];