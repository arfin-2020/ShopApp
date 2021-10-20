import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';




    const ViewComponent = styled.View `

    `
    const Textcomponent = styled.Text`
    color:white;

    `

const ProductOverViewScreen = () => {
    return (
        <ViewComponent>
            <Textcomponent>This is product OVer view screen</Textcomponent>
        </ViewComponent>
    )
}


export default ProductOverViewScreen;