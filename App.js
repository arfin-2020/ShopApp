import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
// import styled from 'styled-components/native';
// import ProductOverViewScreen from './screens/shop/ProductOverViewScreen';
import productsReducer from './store/reducers/products';
import ShopNavigation from './navigation/ShopNavigation';
import { View } from 'react-native';
const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

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
