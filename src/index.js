import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';


import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducers from './reducers';
import {logger} from 'redux-logger';

import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas';
import Main from './container/Main';

 const sagaMiddleWare=createSagaMiddleWare();

 const store = createStore(rootReducers,applyMiddleware(sagaMiddleWare,logger));
 
 sagaMiddleWare.run(rootSaga);

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
