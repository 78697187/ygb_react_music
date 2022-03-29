import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListsAction } from './store/actionCreators';
import { getTopListAction } from '../../../discover/c-pages/recommend/store/actionCreators';

import {
  RankingWrapper
} from './style';
import McRankCoverTop from './c-cpns/rank-cover_top';

const McRanking = memo(() => {

  // hooks

  // redux
  const { topLists, newSongRanking, upRanking, hotRanking, originalRanking } = useSelector(state => ({
    topLists: state.getIn(["ranking","topLists"]),
    newSongRanking: state.getIn(["recommend","newSongRanking"]),
    upRanking: state.getIn(["recommend", "upRanking"]),
    hotRanking: state.getIn(["recommend", "hotRanking"]),
    originalRanking: state.getIn(["recommend", "originalRanking"])
  }), shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListsAction());
    // 新歌榜
    dispatch(getTopListAction(0));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <McRankCoverTop info={newSongRanking}/>
      <McRankCoverTop info={upRanking}/>
      <McRankCoverTop info={hotRanking}/>
      <McRankCoverTop info={originalRanking}/>
      <div className='footer'></div>
    </RankingWrapper>
  )
})

export default McRanking