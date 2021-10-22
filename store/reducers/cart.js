import { ADD_TO_CART } from "../action/cart";

const initialState = {
    items:{},
    totalAmmount: 0,
};

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
    }
    return state;
};