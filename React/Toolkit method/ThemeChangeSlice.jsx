import { createSlice } from "@reduxjs/toolkit";
const ThemeChangeSlice=createSlice({
    name:"themechange",
    initialState:{
        bgcolor:"pink"
    },
    reducers:{
        changecolor:(state,actions)=>{
            state.bgcolor=actions.payload;
        }
    }
})
export default ThemeChangeSlice.reducer;
export const {changecolor}=ThemeChangeSlice.actions;