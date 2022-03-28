import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import McThemeHeaderRCM from '@/componnets/theme-header-rcm';
import McThemeCover from '../../../../../../componnets/songs-cover'
import {
  HotRecommendWrapper
} from './style';
import { getHotRecommendAction } from '../../store/actionCreators'

import { HOT_RECOMMEND_LIMIT } from '@/common/contants';

const McHotRecommend = memo(() => {
  //state
  const { hotRecommends } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)

  //redux-hooks
  const dispatch = useDispatch();

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <McThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}/>
      <div className='recommend-list'>
        {
          hotRecommends.map((item, index) => {
            return <McThemeCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default McHotRecommend