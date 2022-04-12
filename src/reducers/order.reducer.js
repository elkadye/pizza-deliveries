const orderReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ORDER":
      console.log(action.payload);
      return action.payload;
      break;
    case "GET_ORDERS":
      return action.payload;
      break;
    case "MARK_COMPLETED":
        return state
      break;

    default:
      return state;
  }
};
export default orderReducer;
