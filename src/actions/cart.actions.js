const allItems = [
  {
    id: 1,
    Category: "Pizza", 
    Title: "Seafood Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Qty: 1,
    Image: "/img/pizza_2.png",
  },
  {
    id: 2,
    Category: "Pizza",
    Title: "Meat Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Qty: 2,
    Image: "/img/pizza_2.png",
  },
  {
    id: 3,
    Category: "Pizza",
    Title: "Veggi Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Qty: 1,
    Image: "/img/pizza_2.png",
  },
  {
    id: 4,
    Category: "Pizza",
    Title: "Cheese Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Qty: 4,
    Image: "/img/pizza_2.png",
  },
  {
    id: 5,
    Category: "Burger",
    Title: "Fish Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Qty: 2,
    Image: "/img/pizza_2.png",
  },
  {
    id: 6,
    Category: "Burger",
    Title: "Meat Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Qty: 6,
    Image: "/img/pizza_2.png",
  },
];


// export const GetCartItems = () =>(dispatch) => {
//   const cartItems = allItems
//   console.log(cartItems);
//   dispatch({
//     type: "FETCH_CART",
//     payload: cartItems,
//   });
// };

////// ADD get cart item
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