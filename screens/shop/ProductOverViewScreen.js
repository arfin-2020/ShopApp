import React from 'react';
// import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';



    // const ViewComponent = styled.View `

    // `
    // const Textcomponent = styled.Text`
    // color:white;

    // `

const ProductOverViewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        // <ViewComponent>
        //     <Textcomponent>This is product OVer view screen</Textcomponent>
        // </ViewComponent>
        <FlatList
            date={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <Text>{itemData.item.title}</Text>}

        />
    )
}


export default ProductOverViewScreen;