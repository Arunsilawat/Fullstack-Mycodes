import { createSlice } from "@reduxjs/toolkit";


const Todoapp=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
            state.task.push(actions.payload)
        }
    }
})
export default Todoapp.reducer;
export const {addtask}=Todoapp.actions;