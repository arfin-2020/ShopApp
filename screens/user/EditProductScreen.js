import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { SaveIcon } from '../../components/UI/HeaderButton';
import Color from '../../constant/Color';
import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from '../../store/action/products';


const EditProductSccreen = (props) => {

    const productId = props.navigation.getParam('productId');

    const editedProduct = useSelector(state =>
    state.products.userProducts.find(product => product.id === productId));
 
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    const dispatch = useDispatch()

    const submitHandler =  useCallback(()=>{
        if(editedProduct){
            dispatch(
                productsActions.updateProduct(productId,title, description, imageUrl) 
                );
        } else{
            dispatch(
                productsActions.createProduct(title, description, imageUrl, price)
            );
        }
    },[dispatch, productId, title, description, imageUrl, price]);

    useEffect(()=>{
        props.navigation.setParams({submit: submitHandler});
    },[submitHandler])
    
    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} 
                    value={title}
                    onChangeText={(text)=>setTitle(text)}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>ImageURL</Text>
                    <TextInput style={styles.input} 
                    value={imageUrl}
                    onChangeText={(text)=>setImageUrl(text)}
                    />
                </View>
                {
                    editedProduct ? null: (
                    <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input} 
                    value={price}
                    onChangeText={(text)=>setPrice(text)}
                    />
                    </View>
                    )
                }
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} 
                    value={description}
                    onChangeText={(text)=>setDescription(text)}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        form:{
            margin: 20,
        },
        formControl:{
            width: '100%',
        },
        label:{
            fontFamily: 'OpenSans-Bold',
            marginVertical: 8,
        },
        input:{
            paddingHorizontal: 2,
            paddingVertical: 5,
            borderBottomColor: Color.primaryColor,
            borderBottomWidth: 1,
        },
})


EditProductSccreen.navigationOptions = (navData) =>{
    const functionSubmit =  navData.navigation.getParam('submit');
    return{
        HeaderTitle: navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
        headerRight: (
            <TouchableOpacity onPress={functionSubmit}>
                <SaveIcon/>
            </TouchableOpacity>
        ),
    }
}

export default EditProductSccreen;