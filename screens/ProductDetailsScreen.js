import React from 'react';
import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Color from '../constant/Color';
import * as CartActions from '../store/action/cart'

const ProductDetailsScreen = (props) => {
    const productId = props.navigation.getParam('productId');
    // console.log(productId)
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(product => product.id === productId));
    // console.log('selected product--------', selectedProduct);
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} 
                    source={{ uri: selectedProduct.imageUrl }} 
                    />
                </View>
                <View style={styles.action}>
                    <Button color={Color.primaryColor} 
                    title='Add to cartss' 
                    onPress={() => {
                        dispatch(CartActions.addToCart(selectedProduct));
                     }} 
                    />
                </View>
                <Text style={styles.priceStyle}>${selectedProduct.price.toFixed(2)}</Text>
                <Text style={styles.descriptionStyle}>{selectedProduct.description}</Text>
            </View>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = (navData) => {
    const dynamicProductTitle = navData.navigation.getParam('productTitle');
    console.log('title-------', dynamicProductTitle)
    return {
        headerTitle: dynamicProductTitle
    };
}

const styles = StyleSheet.create({
    // mainContainer:{
    //     flex:1,
    // },
    // imageContainer: {
    //     width: '100%',
    //     height: '60%',
    // },
    imageStyle: {
        width: '100%',
        height: 300,
    },
    action: {
        marginVertical: 20,
        alignItems: 'center',
    },
    priceStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: Color.primaryColor,
        marginVertical: 10,
        textAlign:'center'
    },
    descriptionStyle: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: Color.primaryColor,
        // alignItems: 'center',
        marginHorizontal:20,
        borderColor: Color.primaryColor,
        borderWidth:2,
        padding: 10,
    },
});

export default ProductDetailsScreen;