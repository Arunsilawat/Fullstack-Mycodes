

import { configureStore } from "@reduxjs/toolkit";
 import myans from "./CounterSlice"
 const Store=configureStore({
    reducer:{
        mycounter:myans
    }
 })
//  export default Store;