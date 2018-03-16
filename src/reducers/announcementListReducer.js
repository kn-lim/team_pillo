import { ADD_ANNOUNCEMENT } from '../constants/action-types';

const announcementListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ANNOUNCEMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default announcementListReducer;
