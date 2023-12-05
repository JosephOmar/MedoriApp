import {React} from 'react'
import { Text, View} from "react-native"
import { StyledContainer,
    InnerContainer,
    PageLogo
} from '../../components/styles'
import { PageTitle } from '../../components/styles'

const PaymentMethods = () => {



    return(
        <StyledContainer>
            <InnerContainer>
                <View style={{width:280,flexDirection:'row',overflow:'hidden', flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:20,marginTop:130}}>
                <PageLogo style={{width:120,height:120}} resizeMode="contain" source={require('./../../assets/LogoPagos/ApplePay.jpg')}/>
                <PageLogo style={{width:120,height:120}} resizeMode="contain" source={require('./../../assets/LogoPagos/Bbva.png')}/>
                <PageLogo style={{width:120,height:120}} resizeMode="contain" source={require('./../../assets/LogoPagos/GooglePay.png')}/>
                <PageLogo style={{width:120,height:120}} resizeMode="contain" source={require('./../../assets/LogoPagos/PayPal.png')}/>
                <PageLogo style={{width:120,height:120}} resizeMode="contain" source={require('./../../assets/LogoPagos/Plin.jpg')}/>
                <PageLogo style={{width:120,height:120}} resizeMode="contain" source={require('./../../assets/LogoPagos/Yape.png')}/>
                </View>
            </InnerContainer>
        </StyledContainer>
    )
}

export default PaymentMethods;