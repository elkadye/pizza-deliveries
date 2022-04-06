const productReducer=(state=[],action) =>{
    switch (action.type) {
      case "FETCH_ALL":
      case "ADD_PRODUCT":
      case "UPDATE_PRODUCT":
      case "DELETE_PRODUCT":
        return action.payload;
      case "CHANGE_ORDER_QTY":
        //   const OrderItem = state.filter
        console.log("CHANGE_ORDER_QTY")
        console.log(action.payload)
          return state

      default:
        return state;
    }
}
export default productReducer;