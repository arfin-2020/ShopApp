import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const OrderScreen = ()=> {
    const orders = useSelector(state => state.orders.orders);
    
    return (
        <FlatList
        data={orders}
        keyExtractor={(item)=>item.id}
        renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
        />
    )
}

export default OrderScreen;