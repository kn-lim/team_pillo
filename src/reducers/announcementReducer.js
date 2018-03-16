import { EDIT_ANNOUNCEMENT } from '../constants/action-types';

const announcementReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_ANNOUNCEMENT:
      return { ...state, announcement: action.payload };
    default:
      return state;
  }
};

export default announcementReducer;
