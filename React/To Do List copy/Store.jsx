import { configureStore } from "@reduxjs/toolkit";
import list from "./ToDoSlice"
const Store=configureStore({
    reducer:{
      ToDoList:list
    }
})
export default Store;