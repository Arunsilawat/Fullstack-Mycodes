import { createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";

const ToDoSlice=createSlice({
    name:"ToDoList",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        deltask:(state,actions)=>{
            state.task=state.task.filter(Item=>Item.id!=actions.payload)
        }
    }
})
export default ToDoSlice.reducer;
export const {addtask,deltask}=ToDoSlice.actions;