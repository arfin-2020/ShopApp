import React from 'react';
import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { useSelector } from 'react-redux';


const ProductDetailsScreen = (props) =>{
    const productId = props.navigation.getParam('productId');
    // console.log(productId)
    const selectedProduct = useSelector(state=>
        state.products.availableProducts.find(product => product.id === productId));
        // console.log('selected product--------', selectedProduct);
    return (
        <ScrollView>
            <View>
                <Text>
                    {selectedProduct.title}
                </Text>
                <Image/>
                <Button title='go home'/>
            </View>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = (navData) =>{
    const dynamicProductTitle = navData.navigation.getParam('productTitle');
    console.log('title-------',dynamicProductTitle)
    return{
        headerTitle : dynamicProductTitle
    };
}

const styles  = StyleSheet.create({

});

export default ProductDetailsScreen;