import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080"
});

// Product End points
export const addProduct = (category_id) => API.post(`/product/${category_id}`);
export const getProduct = (product_id) => API.get(`/product/${product_id}`);
export const getProducts = ()=>API.get(`/product`);

//Category End points

export const addCategory = () => API.post(`/category`);
export const getCategory = (category_id) => API.get(`/category/${category_id}`);
export const getCategories = () => API.get(`/category`);


//Order End points

export const addOrder = () => API.post(`/order`);
export const getOrder = (order_id) => API.get(`/order/${order_id}`);
export const getOrders = () => API.get(`/order`);
export const getCompletedOrders = () => API.get(`/order/completed`);
export const markCompletedOrders = (order_id) => API.get(`/order/${order_id}/completed`);

