import { configureStore } from "@reduxjs/toolkit";

import myclr from "./ColoreSlice";
const Store=configureStore({
    reducer:{
        mycolor:myclr
    }
})
export default Store;