import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({
    name:"counter",
    initialState:{
        cnt:0
    },
    reducers:{
        increment:(state)=>{
            state.cnt=state.cnt+10;
        },
        dicrement:(state)=>{
            state.cnt=state.cnt-10;
        }
    }
})
export default CounterSlice.reducer;
export const {increment,dicrement}=CounterSlice.actions;