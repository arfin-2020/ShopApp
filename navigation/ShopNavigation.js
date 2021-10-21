import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';
import {Platform} from 'react-native';
import Color from '../constant/Color';


const ProductsNavigator = createStackNavigator(
{
    ProductsOverView: ProductOverViewScreen
},
{
    defaultNavigationOptions : {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? Color.whiteColor: Color.primaryColor
    },
    
});


export default  createAppContainer(ProductsNavigator);