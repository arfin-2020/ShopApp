import React from 'react';
// import styled from 'styled-components/native';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/action/cart';
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
    headerTitle: 'All Products'
};
const styles = StyleSheet.create({

})

export default ProductOverViewScreen;