import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTops } from './store/actionCreators';

import McTopRanking from './c-cpns/top-ranking';
import McRankingHeader from './c-cpns/ranking-header'
import McRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './style';


const McRanking = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTops());
  }, [dispatch]);

  return (
    <RankingWrapper className='wrap-v2'>
      <RankingLeft>
        <McTopRanking/>
      </RankingLeft>
      <RankingRight>
        <McRankingHeader/>
        <McRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})

export default McRanking;