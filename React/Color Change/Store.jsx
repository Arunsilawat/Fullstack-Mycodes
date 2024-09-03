
import { configureStore } from "@reduxjs/toolkit";
import myclr from "./ColorSlice"
const Store=configureStore({
    reducer:{
        mycolor:myclr
    }
})
export default Store;