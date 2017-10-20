import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App.js';

// Don't understand this shit T_T, it is called reducer.
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  // We hook up the {store} into the App using Provider tag.
  // Everytime redux has new state, it will inform every child components.
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
