import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongDetailAction } from '@/pages/player/store';

import {
  getSizeImage,
  formatMinuteSecond
} from '@/utils/data-format';

import McThemeHeaderSong from '@/componnets/theme-header-song';
import {
  RankingListWrapper
} from './style';

const McRankingList = memo(() => {
  const { playList } = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);

  const tracks = playList.tracks || [];

  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    // console.log("点击了")
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <RankingListWrapper>
      <McThemeHeaderSong/>
      <div className='play-list'>
        <table>
          <thead>
            <tr className='header'>
              <th className='ranking'></th>
              <th className='title'>标题</th>
              <th className='duration'>时长</th>
              <th className='singer'>歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr className='' key={item.id}>
                    <td>
                      <div className='rank-num'>
                        <span className='num'>{index+1}</span>
                        <span className='new sprite_icon2'></span>
                      </div>
                    </td>
                    <td>
                      <div className='song-name'>
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                        <button className='play sprite_table'
                                onClick={e => playMusic(item)}></button>
                        <span className='name'>{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

export default McRankingList;