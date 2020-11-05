import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import footballSlice from './FootballPoints/footballSlice';
import { Provider } from "react-redux"
import FootballPoints from './FootballPoints/footballPoints';

const store = configureStore({
  reducer: combineReducers({
  counter:counterSlice,
  FootballPointsT: footballSlice
  })
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FootballPoints/>
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
