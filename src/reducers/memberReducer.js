import { ADD_MEMBER } from '../constants/action-types';

const memberReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default memberReducer;
