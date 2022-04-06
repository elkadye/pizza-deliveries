const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CART":
    case "ADD_CART_ITEMS":
      const products = action.payload.products;
      const orderItems = products.filter((item) => item.orderQty > 0);
      console.log("CHANGE_ORDER_QTY");
      console.log(products);
      // console.log(state.filter((item) => item.orderQty > 0));
      return orderItems;

      break;

    default:
      return state;
  }
};
export default cartReducer;
