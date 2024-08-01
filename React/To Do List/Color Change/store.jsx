import { configureStore } from "@reduxjs/toolkit";
import ccolor from "./Colorslice"
const store=configureStore({
    reducer:{
       mycolorlist:ccolor
    }
})
export default store;