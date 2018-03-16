import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './../store/store';
import Main from '../components/Content/Main';
import Header from './../components/Header/Header';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Header />
    <Main />
  </Provider>
);

export default Root;