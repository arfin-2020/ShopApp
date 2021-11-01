import React, { useCallback, useEffect, useReducer } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SaveIcon } from '../../components/UI/HeaderButton';
import Input from '../../components/UI/input';
import * as productsActions from '../../store/action/products';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let upadatedFormIsValid = true;
        for (const key in updatedValidities) {
            upadatedFormIsValid = upadatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: upadatedFormIsValid,
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

    const [formState, dispatchFormState] = useReducer(formReducer, {
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





    const submitHandler = useCallback(() => {
        if (!formState.formIsValid) {
            Alert.alert('Wrong input!', 'Please check the error in the form.', [
                { text: 'Okay' }
            ]);
            return;
        }
        if (editedProduct) {
            dispatch(
                productsActions.updateProduct(
                    productId,
                    formState.inputValues.title,
                    formState.inputValues.description,
                    formState.inputValues.imageUrl)
            );
        } else {
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
    }, [dispatch, productId, formState]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });
    }, [submitHandler])

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false;
        if (text.trim().legth > 0) {
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
                <Input
                    label='Image Url'
                    errorText='Please enter a valid title!'
                    returnKeyType='next'
                    keyboardType='default'
                />
                <Input
                    label='Image Url'
                    errorText='Please enter a valid image url!'
                    returnKeyType='next'
                    keyboardType='default'
                />

        {
            editedProduct ? null : (
                <Input
                    label='Price'
                    errorText='Please enter a valid price!'
                    returnKeyType='next'
                    keyboardType='decimal-pad'
                    autoCapitalize='sentence'

                />
            )
        }
                <Input
                    label='description'
                    errorText='Please enter a valid description!'
                    returnKeyType='next'
                    keyboardType='decimal-pad'
                    autoCapitalize='sentence'
                    multiline
                    numberOfLines={3}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
})


EditProductSccreen.navigationOptions = (navData) => {
    const functionSubmit = navData.navigation.getParam('submit');
    return {
        HeaderTitle: navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
        headerRight: (
            <TouchableOpacity onPress={functionSubmit}>
                <SaveIcon />
            </TouchableOpacity>
        ),
    }
}

export default EditProductSccreen;