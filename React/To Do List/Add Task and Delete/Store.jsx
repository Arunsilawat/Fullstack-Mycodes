import { configureStore } from "@reduxjs/toolkit";
import mytask from "./ToDoSlice"

const Store=configureStore({
    reducer:{
      todo:mytask
    }
})
export default Store;