import { Platform } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Color from '../constant/Color';
import CartScreen from '../screens/CartScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductOverViewScreen from '../screens/ProductOverViewScreen';
import OrderScreen from '../screens/OrderScreen';


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
    defaultNavigationOptions : defaultNavOptions
    
});

const OrdersNavigator = createStackNavigator({
    Orders: OrderScreen
},{
    defaultNavigationOptions : defaultNavOptions
})


const ShopNavigator = createDrawerNavigator({
    Products : ProductsNavigator,
    Orders: OrdersNavigator
})
export default  createAppContainer(ShopNavigator);