import React from 'react';

import { Text, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../../constant/Color';
import { TrashBin, TrashBinIos } from '../UI/HeaderButton';

const CartItem = (props) => {

    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{parseInt(props.quantity)}</Text>
                <Text style={styles.mainText}>{props.title}</Text>
            </View>
            
                <View style={styles.itemData}>
                    <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
                    {props.deletable && (
                    <TouchableOpacity
                        onPress={props.onRemove}
                        style={styles.button}>
                        {Platform.OS === 'android' ? <TrashBinIos /> : <TrashBin />}
                    </TouchableOpacity>
                        )
                    }
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft:'auto',
    },
    quantity: {
        fontFamily: 'OpenSans-Bold',
        color: Color.primaryColor,
        fontSize: 16,
    },
    mainText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: Color.primaryColor,
    },

    button: {
        marginLeft: 20,
    },
})

export default CartItem;