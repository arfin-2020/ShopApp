import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import Color from '../constant/Color';
import CartItem from '../components/shop/CartItem';
import * as cartActions  from '../store/action/cart';
import * as ordersActions from '../store/action/order'

const CartScreen = (props) =>{
    const cartTotalAmount = useSelector(state => state.cart.totalAmmount);
    const cartItem = useSelector(state =>{
        const transformedCartItems = [];
        for (const key in state.cart.items){
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            });
        }
        return transformedCartItems.sort((a,b)=>
        a.productId > b.productId ? 1: -1);
    });
    const dispatch = useDispatch();
    return(
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summuryText}>
                    Total <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button color={Color.buttonColor} 
                title="Order Now"
                disabled={cartItem.length === 0}    
                onPress={
                    dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
                }
                />
            </View>
            <View>
                <FlatList 
                data={cartItem}
                keyExtractor={item => item.productId}
                renderItem={itemData =>
                <CartItem
                quantity={itemData.item.quantity}
                title={itemData.item.productTitle}
                amount={itemData.item.sum}
                onRemove={()=>{
                    dispatch(cartActions.removeFromCart(itemData.item.productId));
                }}
                /> }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin:20,
    },
    summary: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOffset: 0.26,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        
    },
    summuryText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    },  
    amount:{
        color: Color.accentColor,
    },
})
export default CartScreen;