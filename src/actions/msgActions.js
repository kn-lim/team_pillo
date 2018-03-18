import MsgApi from '../api/loadMsg';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadMsg() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return loadMsg.getMsg();
  };
}
