import React from 'react';
import styled from 'styled-components/native';
import ProductOverViewScreen from './screens/shop/ProductOverViewScreen';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';

// import productReducer from './store/reducers/products'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
// const rootReducer = combineReducers({
//   products: productsReducer
// });

// const store = createStore(rootReducer);


const App = () => {

  const Title = styled.Text`
  color:white;
  font-size:22px;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.View`
    flex:1;
    justify-content: center;
    align-items:center;
    background-color:#008080;
`;

  return (


        <Wrapper>
        <Title>Hey Man..........</Title>
        <ProductOverViewScreen />
      </Wrapper>


  );
};



export default App;
