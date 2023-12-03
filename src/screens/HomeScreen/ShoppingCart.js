import {React} from 'react'
import { Text, View } from "react-native"
import { StyledContainer,
    InnerContainer
} from '../../components/styles'

const ShoppingCart = () => {
    return(
        <StyledContainer>
            <InnerContainer>
                <Text>Shopping</Text>
            </InnerContainer>
        </StyledContainer>
    )
}

export default ShoppingCart;