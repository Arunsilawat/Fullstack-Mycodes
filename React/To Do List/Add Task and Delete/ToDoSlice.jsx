import { createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";


const ToDoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
             state.task.push(actions.payload)
        },
        // deletetask:(state,actions)=>{
        //     state.task=state.task.filter(item=>item.id!=actions.payload)
        //  },
         deletetask:(state,actions)=>{
            state.task=state.task.filter((key)=>{  
                     if (key.id==actions.payload) {
                        return false
                     }              
                     else{
                        return true
                     }      
            })
         }
    }
})
export default ToDoSlice.reducer;
export const {addtask,deletetask}=ToDoSlice.actions;