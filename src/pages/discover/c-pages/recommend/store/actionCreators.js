import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList
} from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
});
const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
});
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
});
const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
const changeHotRankingAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RANKING,
  hotRanking: res.playlist
})
const changeOriginalRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGINAL_RANKING,
  originalRanking: res.playlist
})
const changeNewSongRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEWSONG_RANKING,
  newSongRanking: res.playlist
})

// 获取轮播图数据
export const getTopBannerAction = () => {
  return (dispatch) => {
    // 发送网路请求
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
};

// 获取热门推荐数据
export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}

export const getNewAlbumAction =  limit => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res));
    })
  }
}

export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeNewSongRankingAction(res));
          break;
        case 1:
          dispatch(changeHotRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginalRankingAction(res));
          break;
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        default:
          break;
      }
    });
  }
}
