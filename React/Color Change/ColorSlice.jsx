import { createSlice } from "@reduxjs/toolkit";

const ColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"pink"
    },
    reducers:{
        changecolor:(state,actions)=>{
            state.bgcolor=actions.payload;
        }
    }
})
export default ColorSlice.reducer;
export const {changecolor}=ColorSlice.actions;