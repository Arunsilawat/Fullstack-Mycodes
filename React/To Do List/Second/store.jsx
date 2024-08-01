import { configureStore } from "@reduxjs/toolkit";
import mytotask from "./Todoslice"

const store=configureStore({
    reducer:{
       todolist:mytotask
    }
})
export default store;