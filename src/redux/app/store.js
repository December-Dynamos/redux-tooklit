
// import {createStore, combineReducer} from 'redux';
import {configureStore} from '@reduxjs/toolkit'; 
import counterReducer from '../features/counter/counterSlice.js';
import songReducer from '../features/songs/songSlice.js';

const store = configureStore({
    reducer:{
        counter: counterReducer,
        song : songReducer
    }
})

export default store;