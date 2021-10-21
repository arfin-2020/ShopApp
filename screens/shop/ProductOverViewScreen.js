import React from 'react';
// import styled from 'styled-components/native';
import { FlatList, Text, StyleSheet, View, StatusBar  } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverViewScreen = (props) => {

    const products = useSelector(state => state.products.availableProducts);

    return (
       
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                 <ProductItem
                 image={itemData.item.imageUrl}
                 title={itemData.item.title}
                 price={itemData.item.price}
                 onViewDetails={()=>{}}
                 onAddToCart={()=>{}}
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