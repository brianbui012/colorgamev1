import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ColorGame from './components/ColorGame';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import timerReducer from './reducers/timer';
import configureStore from './store/configureStore';
// import { correctPlay, incorrectPlay } from './components/sounds.js';
// import Timer from './components/timer';


// const store = createStore(timerReducer);
// console.log(store.getState());
// console.log(store.getState());

const store = configureStore();
const state = store.getState();


const jsx = (
    <Provider store={store}>
        <ColorGame />
    </Provider>
);

//we can pass in props to the main app through here. {} is the JSX brackets, not an object literal
ReactDOM.render(jsx, document.getElementById('app'));






