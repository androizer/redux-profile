import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/app';
import configureStore from './src/store/configStore';

const store = configureStore();

const RNRedux = () => (
    // Return a JSX component called <App/>
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('demo_react', () => RNRedux);
