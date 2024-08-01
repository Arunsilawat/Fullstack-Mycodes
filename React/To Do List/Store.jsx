import { configureStore } from "@reduxjs/toolkit";
import mytodo from "./Todoapp"

const Store=configureStore({
    reducer:{
        todo:mytodo
    }
})
export default Store;