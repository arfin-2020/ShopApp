import React from 'react';
import { Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { Menu } from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/action/products';

const UserProductScreen = (props) => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
    return (<FlatList
        data={userProducts}
        keyExtractor={item => item.id}
        renderItem={itemData =>
        (<ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => { }}
            
        >
            <Button
                color={Color.primaryColor}
                title="Edit"
                onPress={() => {()=>{}}}
            />
            <Button
                color={Color.primaryColor}
                title="Delete"
                onPress={() => {()=>{
                    dispatch(productsActions.deleteProduct(itemData.item.id));
                }}}
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
    }
}
const styles = StyleSheet.create({

})
export default UserProductScreen;