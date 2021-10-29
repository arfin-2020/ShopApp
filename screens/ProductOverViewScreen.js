import React from 'react';
// import styled from 'styled-components/native';
import { FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';
import { CartIcon, Menu } from '../components/UI/HeaderButton';
import * as cartActions from '../store/action/cart';
// import {CartIcon} from '../../components/UI/HeaderButton';


const ProductOverViewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectHandler = (id, title) =>{
        props.navigation.navigate('ProductDetail', { 
            productId: id, 
            productTitle: title 
        });
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

                    <Button
                        color={Color.primaryColor}
                        title="View Details"
                        onPress={() => {
                            selectHandler(itemData.item.id, itemData.item.title);
                        }}
                    />
                    <Button
                        color={Color.primaryColor}
                        title="Add to Cart"
                        onPress={()=>{
                            dispatch(cartActions.addToCart(itemData.item));
                        }}
                    />

                </ProductItem>
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