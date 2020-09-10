/* 
## index.js in root ##

In charge of
* Rendering react to index.html through ReactDOM
* Connecting Redux & Redux-Saga to the app

*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/_App';

// Redux Imports
import { Provider } from 'react-redux'
import store from './redux/configureStore'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);