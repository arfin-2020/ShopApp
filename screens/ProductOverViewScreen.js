import React from 'react';
// import styled from 'styled-components/native';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';
import { CartIcon, Menu } from '../components/UI/HeaderButton';
import * as cartActions from '../store/action/cart';
// import {CartIcon} from '../../components/UI/HeaderButton';


const ProductOverViewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (

        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetails={() => {
                        props.navigation.navigate('ProductDetail', { 
                            productId: itemData.item.id, 
                            productTitle: itemData.item.title 
                        });
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                     }}
                />
            )}

        />

    )
}

ProductOverViewScreen.navigationOptions = (navData) => {
    return{
        headerTitle: 'All Products',
        headerLeft: (
            <TouchableOpacity onPress={()=>{navData.navigation.toggleDrawer()}}>
                <Menu/>
            </TouchableOpacity>
        ),
        headerRight: ()=>(
            <TouchableOpacity onPress={()=>{navData.navigation.navigate('Cart')}}>
                <CartIcon/>
            </TouchableOpacity>
        )
        // headerRight: ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item title="Cart" 
        //     iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}/>
        // </HeaderButtons>
    }
   
};
const styles = StyleSheet.create({

})

export default ProductOverViewScreen;