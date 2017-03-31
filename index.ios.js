/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import React from 'react';

import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Root from './app/root';
import rootReducers from './app/reducers/baseReducers';


var store = createStore(rootReducers,applyMiddleware(thunk));

function App(props){
  return (
    <Provider store = {store}>
        <Root {...this.props}/>
    </Provider>
  );
};

AppRegistry.registerComponent('ReduxDemo', () => App);