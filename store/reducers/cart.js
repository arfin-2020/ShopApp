import { ADD_TO_CART } from "../action/cart";
import CartItem from "../../model/cart-item";
const initialState = {
    items:{},
    totalAmmount: 0,
};

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct =  action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            let updatedorNewCartItem;
            if(state.items[addedProduct.id]){
                 updatedorNewCartItem =  new CartItem(
                    state.items[addedProduct.id] + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice
                );
                // return{
                //     ...state,
                //     items:{...state.items,  [addedProduct.id]: updatedCartItem },
                //     totalAmmount: state.totalAmmount + productPrice
                // }
            } else{
                 updatedorNewCartItem = new CartItem(1, productPrice, productTitle, productPrice);
            }
            return {
                ...state,
                items : {...state.items, [addedProduct.id]: updatedorNewCartItem },
                totalAmmount: state.totalAmmount + productPrice
            }
    }
    return state;
};