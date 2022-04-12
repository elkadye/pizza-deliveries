import * as api from "../api";

export const addOrder = (cartOrder) => async (dispatch) => {
  try {
      console.log(cartOrder);
    await api.addOrder(cartOrder);
    console.log("order sent success")
    const { data } = await api.getOrders();
    console.log(data)
    dispatch({
      type: "ADD_ORDER",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.getOrders();
    console.log(data);
    dispatch({
      type: "GET_ORDERS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const markCompletedOrder = (order_id) => async (dispatch) => {
  try {
    const { data } = await api.markCompletedOrder(order_id);
    dispatch({
      type: "MARK_COMPLETED",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};