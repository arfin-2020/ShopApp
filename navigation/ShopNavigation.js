import { Platform } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Color from '../constant/Color';
import CartScreen from '../screens/shop/CartScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';


const ProductsNavigator = createStackNavigator(
{
    ProductsOverView: ProductOverViewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen,
},
{
    defaultNavigationOptions : {
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
    },
    
});


export default  createAppContainer(ProductsNavigator);