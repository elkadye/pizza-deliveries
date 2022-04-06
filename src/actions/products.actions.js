const allProducts = [
  {
    id: 1,
    Category: "Pizza",
    Title: "Seafood Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0,
  },
  {
    id: 2,
    Category: "Pizza",
    Title: "Meat Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0,
  },
  {
    id: 3,
    Category: "Pizza",
    Title: "Veggi Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0,
  },
  {
    id: 4,
    Category: "Pizza",
    Title: "Cheese Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0,
  },
  {
    id: 5,
    Category: "Burger",
    Title: "Fish Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0,
  },
  {
    id: 6,
    Category: "Burger",
    Title: "Meat Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0,
  },
  {
    id: 7,
    Category: "Burger",
    Title: "Chicken Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0,
  },
  {
    id: 8,
    Category: "Burger",
    Title: "Cheese Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
    orderQty: 0
  },
];


export const GetProducts = () =>(dispatch) => {
  const products = allProducts;
  console.log(products);
  dispatch({
    type: "FETCH_ALL",
    payload: products,
  });
};

// export const changeOrderQty = (id, q) => (dispatch) => {
//     const orderItem = allProducts.filter;
//     const products = 
//     dispatch({
//       type: "CHANGE_ORDER_QTY",
//       payload: products
//     });
 
//   }
export const changeOrderQty=(id,q)=>{
  const order ={id,q}
  return {
    payload:order,
    type: 'CHANGE_ORDER_QTY'
  };
}
