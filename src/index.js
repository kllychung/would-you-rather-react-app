import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reducer from './Reducers';
import middleware from './Middleware';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, middleware)

root.render(
  <Provider store={store}>
      <Router>
      <App />
      </Router>
  </Provider> 
);


