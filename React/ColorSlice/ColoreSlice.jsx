import { createSlice } from "@reduxjs/toolkit";

const ColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"yellow"
    },
    reducers:{
        changeColor:(state,actions)=>{
            state.bgcolor=actions.payload;
        }
    }
})
export default ColorSlice.reducer;
export const {changeColor}=ColorSlice.actions;