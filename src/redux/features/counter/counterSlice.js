import {createSlice} from '@reduxjs/toolkit'; 


// const initialState = {a:0, b:10, c:20}
const initialState = {a:10, b: {x:100, y:200}, c:30}

const counterSlice = createSlice({
     name: 'counter',
     initialState: initialState,
     reducers : {
         increase : (state, action) => {state.b.x = state.b.x + (action.payload || 1)}, 
         decrease : state => {state.b.x = state.b.x - 1},
         reset : state => initialState
     }
})

// increase : (state, action) => {...state, a: state.a + (action.payload || 1)},

// reducers : {
//     increase : (state, action) => {state.a = state.a + (action.payload || 1)}, 
//     decrease : state => {state.a=state.a-1},
//     reset : state => initialState
// }

// console.log(counterSlice); 

// actions creators  

// reducers


export const {increase, decrease, reset} = counterSlice.actions; // will generate action creators

export default counterSlice.reducer; 

// This is not that reeucers key inside the obj above, 
// create slice is geenrating reducer function , then we are expoting the generated one







