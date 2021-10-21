import { createStackNavigator } from 'react-navigation';
import Color from '../constant/Color';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';

const productsNavigator = createStackNavigator({
    ProductOverView: ProductOverViewScreen
},{
    defaultNavigationOptions : {
        headerStyle: Color.primaryColor,
    },
    headerTintColor: Color.whiteColor,
})