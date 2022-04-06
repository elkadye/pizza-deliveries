const allCategories = [
  {
    id: 1,
    Name: "Pizza",
    Description: "Pizza Pizza Pizza",
    Image: "/img/pizza_2.png",
  },
  {
    id: 2,
    Name: "Burger",
    Description: "Burger Burger Burger",
    Image: "/img/pizza_2.png",
  },
  {
    id: 3,
    Name: "Crepe",
    Description: "Crepe Crepe Crepe",
    Image: "/img/pizza_2.png",
  },
  {
    id: 4,
    Name: "Drinks",
    Description: "Drinks Drinks Drinks",
    Image: "/img/pizza_2.png",
  },
];

export const GetCatagories = () => (dispatch) => {
  const catagories = allCategories;
  console.log(catagories);
  dispatch({
    type: "FETCH_CAT",
    payload: catagories,
  });
};
