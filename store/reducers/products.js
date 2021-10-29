import PRODUCTS from '../../data/dammy-data';
import { DELETE_PRODUCT } from '../action/products';
const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) =>{
    switch(type.action){
        case DELETE_PRODUCT:
            return{
                ...state,
                userProducts: state.userProducts.filter(
                    product=>product.id !==action.pid),
                    availableProducts: state.availableProducts.filter(
                    product=>product.id !==action.pid),
            }
    }
    return state;
};

