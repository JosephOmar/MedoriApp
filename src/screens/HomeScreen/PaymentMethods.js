import {React} from 'react'
import { Text, View} from "react-native"
import { StyledContainer,
    InnerContainer
} from '../../components/styles'
import { PageTitle } from '../../components/styles'

const PaymentMethods = () => {



    return(
        <StyledContainer>
            <InnerContainer>
                <PageTitle>Payment</PageTitle>
            </InnerContainer>
        </StyledContainer>
    )
}

export default PaymentMethods;