import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../components/shop/OrderItem';
import { Menu } from '../components/UI/HeaderButton';


const OrderScreen = (props)=> {
    const orders = useSelector(state => state.orders.orders);
    
    return (
        <FlatList
        data={orders}
        keyExtractor={(item)=>item.id}
        renderItem={itemData => 
        <OrderItem 
        amount={itemData.item.totalAmount} 
        date={itemData.item.readableDate}
        items={itemData.item.items}
        />}
        />
    )
}

OrderScreen.navigationOptions = (navData)=> {
    return{
        headerTitle: 'Your Orders',
        headerLeft: (
            <TouchableOpacity onPress={()=>{navData.navigation.toggleDrawer()}}>
                <Menu/>
            </TouchableOpacity>
        ),
    }
};
export default OrderScreen;