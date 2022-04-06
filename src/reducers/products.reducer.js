const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
    case "ADD_PRODUCT":
    case "UPDATE_PRODUCT":
    case "DELETE_PRODUCT":
      return action.payload;
      break;
    case "CHANGE_ORDER_QTY":
      const id = action.payload.id;
      const qty = action.payload.qty;
      const OrderItem = state.map((item) => {
        if (item.id === id) {
          return { ...item, orderQty: item.orderQty + qty };
        } else {
          return item;
        }
      });
      console.log("CHANGE_ORDER_QTY");
      console.log(OrderItem);
      // console.log(state.filter((item) => item.orderQty > 0));
      return OrderItem;
      break;
    case "GET_CART_ITEMS":
    const CartItems = state.filter((item) => item.orderQty > 0);
    console.log("GET_CART_ITEMS");
    console.log(CartItems);
    return state;
    break;
    default:
      return state;
  }
};
export default productReducer;
