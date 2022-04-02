import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';


import {
  HeaderWrapper
} from './style';

const McThemeHeaderSong = memo(() => {
  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }),shallowEqual);

  return (
    <HeaderWrapper>
      <div className='left'>
        <h3 className='title'>歌曲列表</h3>
        <div className='count'>{playList.trackCount}首歌</div>
      </div>
      <div className='right'>
        <span>播放：</span>
        <span className='count'>{playList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})

export default McThemeHeaderSong;