import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Color from '../../constant/Color';

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
        return transformedCartItems;
    });
    return(
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summuryText}>
                    Total <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button color={Color.buttonColor} 
                title="Order Now"
                disabled={cartItem.length === 0}    
                />
            </View>
            <View>
                <Text>Cart Item</Text>
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