import { combineReducers } from "redux";
import products from "./products.reducer";
import cartItems from "./cart.reducer";
import catagories from "./catagories.reducer";
import orders from "./order.reducer";

export const reducers = combineReducers({
    products,
    cartItems,
    catagories,
    orders
});

