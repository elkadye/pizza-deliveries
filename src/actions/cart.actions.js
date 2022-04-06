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

export const ADD_CART_ITEMS = (products) => {
  const cartItems= {products}
  return {
    type: "ADD_CART_ITEMS",
    payload: cartItems
  };
};
