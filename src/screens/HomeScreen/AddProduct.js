import {React} from 'react'
import { Text, View } from "react-native"
import { StyledContainer,
    InnerContainer
} from '../../components/styles'

const AddProduct = () => {

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    },[]);

    return(
        <StyledContainer>
            <InnerContainer>
                <Text>Producto</Text>
            </InnerContainer>
        </StyledContainer>
    )
}

export default AddProduct; 