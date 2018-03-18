import MembersApi from '../api/loadMembers';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadMembers() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return loadMembers.getMembers();
  };
}
