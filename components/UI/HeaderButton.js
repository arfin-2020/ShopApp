import React from 'react';
import {Platform} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../../constant/Color'
// const customButton = (props) =>{
//     return (
//         <HeaderButton 
//         {...props}
//          IconComponent={Ionicons} 
//          iconSize={23}
//          color={Platform.OS === 'android' ? 'white' : Color.primaryColor}
//          />
//     );
// };

// export default customButton;

export const CartIcon = () =>{
    return (
        <Icon style={{marginRight:15}} 
        name="md-cart" 
        size={23}  
        color={Platform.OS === 'android' ? 'white' : Color.primaryColor} />
    )
}
export const TrashBin = () =>{
    return (
        <Icon style={{marginRight:15}} 
        name="trash-bin" 
        size={23}  
        color={Platform.OS === 'android' ? Color.tashbinIconColor : Color.primaryColor} />
    )
}
export const TrashBinIos = () =>{
    return (
        <Icon style={{marginRight:15}} 
        name="ios-trash" 
        size={23}  
        color={Platform.OS === 'android' ?  Color.tashbinIconColor : Color.primaryColor} />
    )
}
export const Menu = () =>{
    return (
        <Icon style={{marginRight:15}} 
        name="md-menu" 
        size={23}  
        color={Platform.OS === 'android' ?  Color.tashbinIconColor : Color.primaryColor} />
    )
}
