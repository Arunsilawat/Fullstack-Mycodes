import { configureStore } from "@reduxjs/toolkit";
import mycounter from "./IncDicSlice"

const store=configureStore({
    reducer:{
        counter:mycounter
    }
})
export default store;