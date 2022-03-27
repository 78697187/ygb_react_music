import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';

import McThemeHeaderRCM from '@/componnets/theme-header-rcm';
import McTopRanking from '@/componnets/top-ranking';
import { RankingWrapper } from './style';
import { UpOutlined } from '@ant-design/icons';


const McRecommendRanking = memo(() => {
  //state
  const { upRanking, hotRanking, originalRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend","upRanking"]),
    hotRanking: state.getIn(["recommend","hotRanking"]),
    originalRanking: state.getIn(["recommend","originalRanking"])
  }), shallowEqual)

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(()=>{
    // 飙升
    dispatch(getTopListAction(3))
    // 新歌
    dispatch(getTopListAction(1))
    //原创
    dispatch(getTopListAction(2))
  }, [dispatch])

  return (
    <div>
      <McThemeHeaderRCM title="榜单"/>
      <RankingWrapper>
        <div className='tops'>
          <McTopRanking info={upRanking}/>
          <McTopRanking info={hotRanking}/>
          <McTopRanking info={originalRanking}/>
        </div>
      </RankingWrapper>
    </div>
  )
})

export default McRecommendRanking