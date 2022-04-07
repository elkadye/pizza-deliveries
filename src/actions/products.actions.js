


export const GetProducts = () => {
 return {
   type: "FETCH_PRODUCTS",
 };
};

export const changeOrderQty=(id,qty)=>{
  const order ={id,qty}
  return {
    payload:order,
    type: 'CHANGE_ORDER_QTY'
  };
}
export const GET_CART_ITEMS = (cartItems) => {
  return {
    type: "GET_CART_ITEMS",
  };
};
