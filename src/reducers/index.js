import { combineReducers } from 'redux';
import usernameReducer from './usernameReducer';
import checklistReducer from './checklistReducer';
import memberReducer from './memberReducer';
import announcementListReducer from './announcementListReducer';
import announcementReducer from './announcementReducer';

export default combineReducers({
  checklist: checklistReducer,
  username: usernameReducer,
  member: memberReducer,
  announcementList: announcementListReducer,
  announcement: announcementReducer
});
