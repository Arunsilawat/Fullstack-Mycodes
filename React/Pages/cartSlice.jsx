import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
    name: "mycart",
    initialState: {
        cart: []
    },
    reducers: {
        addcart: (state, actions) => {
            let data = state.cart.filter((item) => item.id == actions.payload.id);
            if (data.length >= 1) {
                // alert("product already added")
                message.warning("Product Aleready Added!!!");
            }
            else {
                state.cart.push(actions.payload);
                message.success("Your Product Successfull Added")
            }
        },
        delcart:(state,actions)=>{
            state.cart=state.cart.filter((item)=>item.id!=actions.payload)
            message.info("Produnt  Deleted")
        }
    }
})
export default cartSlice.reducer;
export const { addcart,delcart } = cartSlice.actions;