import { createSlice } from "@reduxjs/toolkit";



const ColorSlice=createSlice({
    name:"mycolorlist",
    initialState:{
        mycolor:"yellow"
    },
    reducers:{
        changecolor:(state,actions)=>{
            state.mycolor=actions.payload
        }
    }
})
export default ColorSlice.reducer;
export const {changecolor}=ColorSlice.actions;