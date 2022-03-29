import * as actionTypes from './constants';

import { getTopLists } from '@/services/recommend';

const changeTopLists = (topLists) => ({
  type: actionTypes.CHANGE_TOPLISTS,
  topLists
});


export const getTopListsAction = () => {
  return dispatch => {
    getTopLists().then(res => {
      dispatch(changeTopLists(res.list));
    })
  }
}