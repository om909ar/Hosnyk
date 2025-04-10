import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // App.js is the main file that holds your components

ReactDOM.render(<App />, document.getElementById('root'));
