import { configureStore } from "@reduxjs/toolkit";
import mytask from "./TodoSlice";
const Store=configureStore({
    reducer:{
       todo:mytask
    }
})
export default Store;