import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '../../../utils/data-format'
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction
} from '../store/actionCreator';

import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';


const McAppPlayerBar = memo(() => {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);


  const { currentSong, sequence } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
    sequence: state.getIn(["player", "sequence"])
  }), shallowEqual)

  const dispatch = useDispatch();

  const audioRef = useRef();
  useEffect(() => {
    //  这里还要改。   传入的还是固定的歌曲id
    dispatch(getSongDetailAction(29803676));
  }, [dispatch]);
  // 第一次进入的时候设置歌曲的src
  useEffect(()=> {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsplaying(true);
    }).catch(err => {
      setIsplaying(false);
    })
  }, [currentSong]);

  //other handle
  // 初始时，(因为ajax是异步操作)currentSong.al为空 程序直接报错， 这种方法很常用，
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration,"mm:ss");
  const showCurrentTime = formatDate(currentTime,"mm:ss");
  //进度条显示
  // const progress = currentTime / duration * 100;

  //handle funtion
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsplaying(!isPlaying);
    // if( !isPlaying ){
    //   audioRef.current.play();
    //   setIsplaying(true);
    // }else {
    //   audioRef.current.pause();
    //   setIsplaying(false);
    // }
  }, [isPlaying])

  const timeUpdate = (e) => {
    // e.target.currentTime给的是一个秒钟的时间，但是需要毫秒的时间，所以乘以1000
    if( !isChanging ) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
    }
  }

  //（！！！重要）传入组件的函数发生变化的时候 组件会重绘，所以这里不能直接给组件传入函数
  const sliderChange = useCallback( value => {
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime)
    setProgress(value);
  }, [duration]);
  const sliderAfterChange = useCallback( value => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    // 没有这个操作  拖动按钮会回弹一下
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);
    if(!isPlaying){
      playMusic();
    }
  }, [duration, playMusic, isPlaying]);

  const changeSequence = () => {
    let currentSequence = (sequence+1) % 3;
    dispatch(changeSequenceAction(currentSequence));
  }

  // 切换上（下）一首歌曲的逻辑
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
  }

  const handleMusicEnded = () => {
    if (sequence === 2){ // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  }

  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap_v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev'
                  onClick={e => changeMusic(-1)}></button>
          <button className='sprite_player play'
                  onClick={e => playMusic()}></button>
          <button className='sprite_player next'
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl,34)} alt=''></img>
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <a href='/#' className='singer-name'>{singerName}</a>
            </div>
            <div className='progress'>
              <Slider value={progress}
                      tooltipVisible={false}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}
              />
              <div className='time'>
                <span className='now-time'>{showCurrentTime}</span>
                <span className='divider'>/</span>
                <span className='duration'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"
                    onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}
             onTimeUpdate={e => timeUpdate(e)}
             onEnded={e => handleMusicEnded()}/>
    </PlaybarWrapper>
  )
})

export default McAppPlayerBar