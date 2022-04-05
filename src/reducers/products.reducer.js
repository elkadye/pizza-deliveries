const productReducer=(state=[],action) =>{
    switch (action.type) {
        case "FETCH_ALL":
        case "ADD_PRODUCT":
        case "UPDATE_PRODUCT":
        case "DELETE_PRODUCT":
            return action.payload;
        
        default:
            return state;
    }
}
export default productReducer;