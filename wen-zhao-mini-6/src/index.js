import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducers';
 

const initialState = {list:[], total:0, isEmpty:true};

// const reducer = combineReducers({
//     RollReducer
// });

const store = createStore(reducer, initialState);

function renderPage() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
renderPage();

store.subscribe(renderPage)

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, document.getElementById('root'));
