import { SET_USERNAME } from '../constants/action-types';

const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default usernameReducer;
