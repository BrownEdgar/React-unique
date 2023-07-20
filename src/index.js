import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App1 from './App1';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById('root')
);
