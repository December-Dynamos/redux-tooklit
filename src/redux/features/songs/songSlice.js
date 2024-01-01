import { createSlice } from "@reduxjs/toolkit"; 
import {reset} from "../counter/counterSlice"


const initialState = "" 

const songSlice = createSlice({
    name : "song",
    initialState,
    reducers : {
        selectSong : (state, action) => action.payload
    },
    extraReducers : (builder)=>{
        builder.addCase(reset, (state)=> {
            return initialState
        })
        
    }
})

export const { selectSong } = songSlice.actions 
export default songSlice.reducer;



