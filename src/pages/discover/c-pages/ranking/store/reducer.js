import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  topLists: [],
});

function reducer(state=defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOPLISTS:
      return state.set("topLists", action.topLists);
    default:
      return state;
  }
}

export default reducer;