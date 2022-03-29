import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: {},
  hotRanking: {},
  originalRanking: {},
  newSongRanking: {},
})

function reducer(state = defaultState, action){
  switch(action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      // return {...state, topBanners: action.topBanners};
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_HOT_RANKING:
      return state.set("hotRanking", action.hotRanking);
    case actionTypes.CHANGE_ORIGINAL_RANKING:
      return state.set("originalRanking", action.originalRanking);
    case actionTypes.CHANGE_NEWSONG_RANKING:
      return state.set("newSongRanking", action.newSongRanking);
    default:
      return state;
  }
}

export default reducer;
