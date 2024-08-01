import { createSlice } from "@reduxjs/toolkit";

const Todoslice=createSlice({
    name:"todolist",
    initialState:{
        mytask:[]
    },
    reducers:{
        addtask:(state,actions)=>{
          state.mytask.push(actions.payload)
        }
    }
})
export default Todoslice.reducer;
export const {addtask}=Todoslice.actions;