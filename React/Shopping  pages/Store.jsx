
import { configureStore } from "@reduxjs/toolkit";
import mydata from "./cartSlice";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, mydata);
const Store= configureStore({
    reducer:{
        mycart:persistedReducer
    }
})
export default Store;
export const persistor = persistStore(Store);