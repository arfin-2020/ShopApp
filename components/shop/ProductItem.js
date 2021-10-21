import React from 'react';

import { Text, View, StyleSheet,Image,Button } from 'react-native';
import Color from '../../constant/Color';


const ProductItem = props => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <Text style={styles.priceStyle}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                color={Color.primaryColor} 
                title="View Details" 
                onPress={props.onViewDetail} 
                />
                <Button 
                color={Color.primaryColor} 
                title="Add to Cart" 
                onPress={props.onAddToCart} 
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOffset: 0.26,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    imageContainer:{
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow:'hidden',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
       
    },
    details:{
       alignItems:'center',
       height: '15%',
       padding: 10,
    },
    titleStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        // marginVertical: 4,
        color: Color.primaryColor,
    },
    priceStyle: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: Color.primaryColor,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        marginHorizontal:20,
    },
  
});

export default ProductItem;