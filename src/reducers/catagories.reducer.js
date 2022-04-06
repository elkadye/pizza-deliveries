
const catagoryReducer=(state=[],action) =>{
    switch (action.type) {
        case "FETCH_CAT":
        case "ADD_ITEM":
        case "UPDATE_ITEM":
        case "DELETE_ITEM":
            return action.payload;
        
        default:
            return state;
    }
}
export default catagoryReducer;