const allProducts = [
  {
    id: 1,
    Category: "Pizza",
    Title: "Seafood Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
  {
    id: 2,
    Category: "Pizza",
    Title: "Meat Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
  {
    id: 3,
    Category: "Pizza",
    Title: "Veggi Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
  {
    id: 4,
    Category: "Pizza",
    Title: "Cheese Pizza",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
  {
    id: 2,
    Category: "Burger",
    Title: "Fish Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
  {
    id: 2,
    Category: "Burger",
    Title: "Meat Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
  {
    id: 2,
    Category: "Burger",
    Title: "Chicken Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
  {
    id: 2,
    Category: "Burger",
    Title: "Cheese Burger",
    Description: "Shrimp, Squid,Pineapple",
    Price: 100,
    Image: "/img/pizza_2.png",
  },
];


export const Products = () =>(dispatch) => {
  const products = allProducts;
  console.log(products);
  dispatch({
    type: "FETCH_ALL",
    payload: products,
  });
};
