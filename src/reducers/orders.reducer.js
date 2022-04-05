const orderItem={
  Title: "Seafood Pizza",
  Description: "Shrimp, Squid,Pineapple",
  Price: 100,
  Image: "/img/pizza_2.png"
}

const orderReducer=(state=1,action) =>{
    switch (action.type) {
        case "FETCH_ALL":
        case "ADD_ITEM":
        case "UPDATE_ITEM":
        case "DELETE_ITEM":
            return action.payload;
        
        default:
            return state;
    }
}
export default orderReducer;