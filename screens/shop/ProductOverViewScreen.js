import React from 'react';
// import styled from 'styled-components/native';
import { FlatList, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/action/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton, { CartIcon } from '../../components/UI/HeaderButton';
import { TouchableOpacity } from 'react-native';
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

ProductOverViewScreen.navigationOptions = {
    headerTitle: 'All Products',
    headerRight: ()=>(
        <TouchableOpacity onPress={()=>{console.log('he click me')}}>
            <CartIcon/>
        </TouchableOpacity>
    )
    // headerRight: ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item title="Cart" 
    //     iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}/>
    // </HeaderButtons>
};
const styles = StyleSheet.create({

})

export default ProductOverViewScreen;