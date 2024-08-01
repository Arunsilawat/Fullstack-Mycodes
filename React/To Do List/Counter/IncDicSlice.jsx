import { createSlice } from "@reduxjs/toolkit";

const IncDicSlice=createSlice({
    name:"counter",
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
export default IncDicSlice.reducer;
export const {increment,dicrement}=IncDicSlice.actions;