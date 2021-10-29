import React, { useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';
import Color from '../../constant/Color';
import CartItem from './CartItem';


const OrderItem = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button 
            color={Color.buttonColor}       
            title={showDetails ? 'Hide Details' : 'Show Details' }
            onPress={()=>{
                setShowDetails(previousState => !previousState)
            }}
            />
            {showDetails && (
                <View style={styles.detailItem}>
                {props.items.map(cartItem =>(
                    <CartItem 
                    key={cartItem.productId}
                    quantity={cartItem.quantity} 
                    amount={cartItem.sum} 
                    title={cartItem.title}
                    />
                )
                )}
                </View>
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOffset: 0.26,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        padding: 10,
        alignItems:'center',
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom : '15'
    },
    amount: {
        fontFamily:'OpenSans-Bold',
        color: Color.secondaryColor,
        fontSize: 16,
    },
    date: {
        fontFamily:'OpenSans-Regular',
        color: Color.secondaryColor,
        fontSize: 16,
    },
    detailItem:{
        width: '100%'
    },
})

export default OrderItem;