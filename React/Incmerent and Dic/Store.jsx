import { configureStore } from "@reduxjs/toolkit";
import myinc from "./CounterSlice"

const Store=configureStore({
    reducer:{
       mycounter:myinc
    }
})
export default Store;