import React from 'react';
import { Button, FlatList, StyleSheet,Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { Add, Menu } from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/action/products';

const UserProductScreen = (props) => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    const editProductHandler = (id)=>{
        props.navigation.navigate('EditProduct',{productId: id});
    }
    const deleteHandler = (id)=>{
        Alert.alert('Are you sure?', 'Do you really want to delete this item?',
        {text: 'No', style:'default'},
        {text: 'Yes', style:'destructive', 
        onPress: ()=>{
            dispatch(productsActions.deleteProduct(id));
        }}
        )
    }

    return (<FlatList
        data={userProducts}
        keyExtractor={item => item.id}
        renderItem={itemData =>
        (<ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={()=>{editProductHandler(itemData.item.id)}}   
        >
            <Button
                color={Color.primaryColor}
                title="Edit"
                onPress={()=>{editProductHandler(itemData.item.id)}}
            />
            <Button
                color={Color.primaryColor}
                title="Delete"
                onPress={()=>{deleteHandler(itemData.item.id)}}
            />
        </ProductItem>)
        }
    />
    )
}
UserProductScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
        headerLeft: (
            <TouchableOpacity onPress={() => { navData.navigation.toggleDrawer() }}>
                <Menu />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => { navData.navigation.navigate('EditProduct')}}>
                <Add />
            </TouchableOpacity>
        ),
    }
}
const styles = StyleSheet.create({

})
export default UserProductScreen;