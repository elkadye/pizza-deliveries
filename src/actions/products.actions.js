import * as api from "../api";

// export const GetProducts = () => {
//  return {
//    type: "FETCH_PRODUCTS",
//  };
// };
export const GetProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    console.log(data);
    //map API product and ADD order qty key to each product
    const products = data.map((product) => {
      return { ...product, orderQty:0 };
    });
    console.log(products);
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: products,
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeOrderQty = (id, qty) => {
  const order = { id, qty };
  return {
    payload: order,
    type: "CHANGE_ORDER_QTY",
  };
};
export const GET_CART_ITEMS = (cartItems) => {
  return {
    type: "GET_CART_ITEMS",
  };
};

export const ResetProductOrderQty = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    console.log(data);
    //map API product and ADD order qty key to each product
    const products = data.map((product) => {
      return { ...product, orderQty: 0 };
    });
    console.log(products);
    dispatch({
      type: "RESET_PRODUCT_ORDER_QTY",
      payload: products,
    });
  } catch (err) {
    console.log(err);
  }
};