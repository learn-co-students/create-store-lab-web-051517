import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import manageBand from './reducers/manageBand';
import App from './App';

export function configureStore(){
  return createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

ReactDOM.render(
    <App store={configureStore()} />,
  document.getElementById('root')
);
