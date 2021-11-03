import React, { useEffect, useState } from 'react';
// import styled from 'styled-components/native';
import {View, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';
import { CartIcon, Menu } from '../components/UI/HeaderButton';
import Color from '../constant/Color';
// import {CartIcon} from '../../components/UI/HeaderButton';
import * as productsActions from '../store/action/products';

const ProductOverViewScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        });
    }

    const loadedProducts = async () => {
        setIsLoading(true);
        try{

            await dispatch(productsActions.fetchProducts());
        } catch (error){
            setError(error.message);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        loadedProducts();
    }, [dispatch, loadedProducts]);

    if(error){
        return <View style={styles.centered}>
            <Text>An error occurred!!</Text>
        </View>
    }

    if (isLoading) {
        return <View style={styles.centered}>
            <ActivityIndicator 
            size='large'
            color={Color.buttonColor}
            />
        </View>
    }
    if(!isLoading && products.length === 0){
        return <View style={styles.centered}>
           <Text>No Products Found. Maybe start Adding Some!!</Text>
        </View>
}

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        selectHandler(itemData.item.id, itemData.item.title);
                    }}>



                </ProductItem>
            )}

        />

    )
}

ProductOverViewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'All Products',
        headerLeft: (
            <TouchableOpacity onPress={() => { navData.navigation.toggleDrawer() }}>
                <Menu />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => { navData.navigation.navigate('Cart') }}>
                <CartIcon />
            </TouchableOpacity>
        )
        // headerRight: ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item title="Cart" 
        //     iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}/>
        // </HeaderButtons>
    }

};
const styles = StyleSheet.create({
    centered:{
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})

export default ProductOverViewScreen;