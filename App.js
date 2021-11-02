import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
// import styled from 'styled-components/native';
// import ProductOverViewScreen from './screens/shop/ProductOverViewScreen';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import OrderReducer from './store/reducers/order'
import ShopNavigation from './navigation/ShopNavigation';
import ReduxThunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: OrderReducer 
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
// const store = createStore(rootReducer,composeWithDevTools());

const App = () => {
  // const Title = styled.Text`
  // color:white;
  // font-size:22px;
  // `;
  // Create a Wrapper component that'll render a <section> tag with some styles
  //   const Wrapper = styled.View`
  //     flex:1;
  //     justify-content: center;
  //     align-items:center;
  //     background-color:#008080;
  // `;
  // return (
  //   <Provider store={store}>
  //     {/* <Wrapper>
  //       <Title>Hey Man..........</Title>
  //     </Wrapper> */}
  //     <View>
  //       <ShopNavigation />
  //     </View>
  //   </Provider>
  // );
  return <Provider store={store}><ShopNavigation/></Provider>;
};



export default App;
