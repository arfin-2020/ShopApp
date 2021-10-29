import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { Menu } from '../../components/UI/HeaderButton';


const UserProductScreen = (props) =>{
    const userProducts =  useSelector(state => state.products.userProducts)
    return( <FlatList 
        data={userProducts}  
        keyExtractor={item => item.id}
        renderItem={itemData =>
        (<ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetails={()=>{}}
            onAddToCart={()=>{}}
            />)
    }   
        />
    )
}
UserProductScreen.navigationOptions = navData =>{
    return{
        headerTitle: 'Your Products',
        headerLeft: (
            <TouchableOpacity onPress={()=>{navData.navigation.toggleDrawer()}}>
                <Menu/>
            </TouchableOpacity>
        ),
    }
}
const styles = StyleSheet.create({

})
export default UserProductScreen;