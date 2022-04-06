const productReducer=(state=[],action) =>{
    switch (action.type) {
      case "FETCH_ALL":
      case "ADD_PRODUCT":
      case "UPDATE_PRODUCT":
      case "DELETE_PRODUCT":
        return action.payload;
      case "CHANGE_ORDER_QTY":
          const id=action.payload.id
          const qty=action.payload.qty
        const OrderItem = state.map(item=>{
            if(item.id === id){
            return { ...item, orderQty: item.orderQty + qty };
        }else{return item}
    })
        console.log("CHANGE_ORDER_QTY")
        console.log(OrderItem)
          return OrderItem

      default:
        return state;
    }
}
export default productReducer;