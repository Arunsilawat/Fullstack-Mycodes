import { createSlice } from "@reduxjs/toolkit";
const CounterSlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },
    reducers:{
        increment:(state)=>{
            state.cnt=state.cnt+1;
        },
        dicrement:(state)=>{
            state.cnt=state.cnt-1;
        }
    }
})
export default CounterSlice.reducer;
export const{increment,dicrement}=CounterSlice.actions;