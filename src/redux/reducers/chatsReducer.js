import { LOG_IN } from "../actions";

const initialState = {
  user: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default chatsReducer;
