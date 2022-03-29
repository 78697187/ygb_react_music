import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSongDetailAction } from '@/pages/player/store';

import { RankingTopWrapper } from './style';

const McRankCoverTop = memo((props) => {
  // props and state
  const { info } = props;
  // 避免数据没拿到的时候 tracks为空， slice报错
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // other hooks

  // other handle
  const playMusic = (item) => {
    // console.log("点击了")
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <RankingTopWrapper>
      <div className='left'>
        <a href="/todo">
          <img src={info.coverImgUrl} alt=''></img>
        </a>
      </div>
      <div className='list'>
        {
          tracks.slice(0, 6).map((item, index) => {
            return (
              <div key={item.id} className='list-item'>
                <div className='rank'>{index + 1}</div>
                <div className='info'>
                  <div className='name text-nowrap'>{item.name}</div>
                  <div className='operate'>
                    <button className='btn sprite_02 play'
                      onClick={e => playMusic(item)}></button>
                    <button className='btn sprite_icon2 addto'></button>
                    <button className='btn sprite_02 favor'></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </RankingTopWrapper>
  )
})

export default McRankCoverTop;