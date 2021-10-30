import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Color from '../constant/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import CartScreen from '../screens/CartScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductOverViewScreen from '../screens/ProductOverViewScreen';
import OrderScreen from '../screens/OrderScreen';
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductSccreen from '../screens/user/EditProductScreen';
const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
    },
    headerTitleStyle:{
        fontFamily: 'DancingScript-Medium',
    },
    headerBackTitleStyle:{
        fontFamily: 'OpenSans-Regular',
    },
    headerTintColor: Platform.OS === 'android' ? Color.whiteColor: Color.primaryColor
};

const ProductsNavigator = createStackNavigator(
{
    ProductsOverView: ProductOverViewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen,
},
{
    navigationOptions:{
        drawerIcon: drawerConfig =>(
            <Icon
            name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            size={23}
            color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions : defaultNavOptions
    
});

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductScreen,
    EditProduct: EditProductSccreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig =>(
            <Icon
            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            size={23}
            color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions : defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrderScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig =>(
            <Icon
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions : defaultNavOptions
})


const ShopNavigator = createDrawerNavigator({
    Products : ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
},{
    contentOptions:{
        activeTintColor:Color.primaryColor,
    }
})
export default  createAppContainer(ShopNavigator);