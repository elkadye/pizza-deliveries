const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CART":
        return state;
        break
    case "ADD_CART_ITEMS":
      const products = action.payload.products;
      const orderItems = products.filter((item) => item.orderQty > 0);
      console.log("ADD_CART_ITEMS");
      console.log(products);
      // console.log(state.filter((item) => item.orderQty > 0));
      return orderItems;
      break;
case "CHANGE_Cart_QTY":
       const id = action.payload.id;
      const qty = action.payload.qty;
      const cartItem = state.map((item) => {
        if (item.id === id) {
          return { ...item, orderQty: item.orderQty + qty };
        } else {
          return item;
        }
      });
      console.log("CHANGE_ORDER_QTY");
      console.log(cartItem);
      // console.log(state.filter((item) => item.orderQty > 0));
      return cartItem;
      break;
      case "DELETE_CART_ITEM":
        const itemId = action.payload;
    //   const qty = action.payload.qty;
      const updatedCartItems = state.filter((item) => item.id !== itemId);
      console.log("DELETE_CART_ITEM");
    //   console.log(cartItem);
      // console.log(state.filter((item) => item.orderQty > 0));
      return updatedCartItems;
      break;


    default:
      return state;
  }
};
export default cartReducer;
