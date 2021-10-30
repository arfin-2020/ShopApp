import CartItem from "../../model/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cart";
import { ADD_ORDER } from "../action/order";
import { DELETE_PRODUCT } from "../action/products";

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
            } else{
                 updatedorNewCartItem = new CartItem(1, productPrice, productTitle, productPrice);
            }
            return {
                ...state,
                items : {...state.items, [addedProduct.id]: updatedorNewCartItem },
                totalAmmount: state.totalAmmount + productPrice
            };
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty =  selectedCartItem.quantity;
            let updatedCartItems;
            if(currentQty > 1){
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity -1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice,
                    );
                    updatedCartItems = {...state.items, [action.pid]:updatedCartItem }; 
            } else{
                updatedCartItems  = {...state.items};
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmmount: state.totalAmmount - selectedCartItem.productPrice,
            };
            case ADD_ORDER:
            return initialState;
            case DELETE_PRODUCT:
                if(!state.items[action.pid]){
                    return state;
                }
                const updatedItems = {...state.items};
                const itemTotal = state.items[action.pid].sum;
                delete updatedItems[action.pid];
                return {
                    ...state,
                    items:updatedItems,
                    totalAmmount: state.totalAmmount - itemTotal
                }
    }
    return state;
};