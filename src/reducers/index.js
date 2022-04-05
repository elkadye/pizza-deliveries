import { combineReducers } from "redux";
import products from "./products.reducer";
import cartItems from "./cart.reducer";

export const reducers = combineReducers({
    products,
    cartItems
});

