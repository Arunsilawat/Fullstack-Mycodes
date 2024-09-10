import { configureStore } from "@reduxjs/toolkit";
import mycounter from "./CounterSlice"
import mycolor from "./ThemeChangeSlice"
import mytodo from "./ToDoSlice"
const Store=configureStore({
    reducer:{
      counter:mycounter,
      themechange:mycolor,
      todo:mytodo
    }
})
export default Store;