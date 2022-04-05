import { combineReducers } from "redux";
import products from "./products.reducer";
import orders from "./orders.reducer";

export const reducers = combineReducers({
    products,
    orders
});

