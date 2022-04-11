
export const GET_CART_ITEMS = () => {
  return {
    type: "FETCH_CART",
  };
};




export const ADD_CART_ITEMS = (products) => {
  const cartItems= {products}
  return {
    type: "ADD_CART_ITEMS",
    payload: cartItems
  };
};

export const changeCartQty = (id, qty) => {
  const order = { id, qty };
  return {
    payload: order,
    type: "CHANGE_Cart_QTY",
  };
};

export const deleteCartItem = (id) => {
  return {
    payload: id,
    type: "DELETE_CART_ITEM",
  };
};