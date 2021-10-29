import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback, TouchableOpacity, View
} from 'react-native';




const ProductItem = props => {
    let TouchbleCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchbleCmp = TouchableNativeFeedback;
    }
    return (
        <View>
            <View style={styles.product}>
                <TouchbleCmp onPress={props.onSelect} useForeground>
                   <View>
                   <View style={styles.imageContainer}>
                        <Image style={styles.imageStyle} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.titleStyle}>{props.title}</Text>
                        <Text style={styles.priceStyle}>${props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        {props.children}
                    </View>
                   </View>
                </TouchbleCmp>
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
        overflow:'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: '100%',

    },
    details: {
        alignItems: 'center',
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
        color: Color.secondaryColor,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        marginHorizontal: 20,
    },

});

export default ProductItem;