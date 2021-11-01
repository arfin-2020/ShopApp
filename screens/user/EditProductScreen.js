import React, { useCallback, useEffect, useState, useReducer } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { SaveIcon } from '../../components/UI/HeaderButton';
import Color from '../../constant/Color';
import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from '../../store/action/products';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) =>{
    if(action.type === FORM_INPUT_UPDATE){
        const updatedValues =  {
            ...state.inputValues,
            [action.input] : action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input] : action.isValid
        };
        let upadatedFormIsValid = true;
        for (const key in updatedValidities){
            upadatedFormIsValid = upadatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid : upadatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
        
    }
    return state;
}

const EditProductSccreen = (props) => {

    const productId = props.navigation.getParam('productId');

    const editedProduct = useSelector(state =>
    state.products.userProducts.find(product => product.id === productId));

    const dispatch = useDispatch();
    
      const [formState, dispatchFormState] =   useReducer(formReducer,{
            inputValues: {
                title: editedProduct ? editedProduct.title : '',
                imageUrl: editedProduct ? editedProduct.imageUrl : '',
                description: editedProduct ? editedProduct.description : '',
                price: ''
            },
            inputValidities: {
                title: editedProduct ? true : false, 
                imageUrl: editedProduct ? true : false, 
                description: editedProduct ? true : false, 
                price: editedProduct ? true : false, 
            },
            formIsValid: editedProduct ? true : false,
        })
 
    
    
        

    const submitHandler =  useCallback(()=>{
        if(!formState.formIsValid){
            Alert.alert('Wrong input!','Please check the error in the form.',[
                {text: 'Okay'}
            ]);
            return;
        }
        if(editedProduct){
            dispatch(
                productsActions.updateProduct(
                    productId,
                    formState.inputValues.title, 
                    formState.inputValues.description, 
                    formState.inputValues.imageUrl) 
                );
        } else{
            dispatch(
                productsActions.createProduct(
                    formState.inputValues.title, 
                    formState.inputValues.description, 
                    formState.inputValues.imageUrl, 
                    +formState.inputValues.price
                    )
            );
        }
        props.navigation.goBack();
    },[dispatch, productId, title, description, imageUrl, price, titleIsValid]);

    useEffect(()=>{
        props.navigation.setParams({submit: submitHandler});
    },[submitHandler])
    
    const textChangeHandler = (inputIdentifier,text) => {
        let isValid = false;
        if(text.trim().legth > 0){
            isValid = true; 
        }
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: text,
            isValid: isValid,
            input: inputIdentifier
        });
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} 
                    value={formState.inputValues.title}
                    onChangeText={textChangeHandler.bind(this, 'title')}
                    keyboardType='default'
                    />
                    {!titleIsValid && <Text>Please enter a valid title!</Text>}
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>ImageURL</Text>
                    <TextInput style={styles.input} 
                    value={formState.inputValues.imageUrl}
                    onChangeText={textChangeHandler.bind(this, 'imageUrl')}
                    />
                </View>
                {
                    editedProduct ? null: (
                    <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input} 
                    value={formState.inputValues.price}
                    onChangeText={textChangeHandler.bind(this, 'price')}
                    keyboardType='decimal-pad'
                    />
                    </View>
                    )
                }
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} 
                    value={formState.inputValues.description}
                    onChangeText={textChangeHandler.bind(this, 'description')}
                    returnKeyType='next'
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