import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducers';

// import DiceReducer from './DiceReducer';


// const initialState = {list:[], total:0};

// const reducer = combineReducers({
//     RollReducer
// });

// const store = createStore(reducer, initialState);
// const rootReducer = combineReducers({DiceReducer});
// const store = createStore(rootReducer);

const store = createStore(reducer);

// function renderPage() {
//     ReactDOM.render(<App store={store}/>, document.getElementById('root'));
// }
// renderPage();

// store.subscribe(renderPage)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
