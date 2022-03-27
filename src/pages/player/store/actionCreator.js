import * as actionTypes from './constants';
import { getSongDetail } from "@/services/player";
import { getRandomNumber } from '@/utils/math-utils';


const changeCurrentSongAtion = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
});

const changeCurrentSongIdexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
});

export const changeCurrentIndexAndSongAction = (tag) => {
  // 这里返回一个函数不是为了异步操作，而是为了拿到dispatch
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    // console.log(playList);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    // console.log(currentSongIndex);
    switch(sequence) {
      // 随机播放播放
      case 1:
        let randomIndex = getRandomNumber(playList.length);
        while(randomIndex  === currentSongIndex){
          randomIndex = getRandomNumber(playList.length);
        }
        // console.log(randomIndex);
        currentSongIndex = randomIndex;
        // console.log(currentSongIndex);
        break;
      default:
        currentSongIndex += tag;
        if(currentSongIndex >= playList.length) currentSongIndex = 0;
        if(currentSongIndex < 0) currentSongIndex = playList.length-1;
    }

    // console.log(currentSongIndex);
    const currentSong = playList[currentSongIndex];
    // console.log(currentSong);
    dispatch(changeCurrentSongAtion(currentSong));
    dispatch(changeCurrentSongIdexAction(currentSongIndex));
  }
}


export const getSongDetailAction = ids => {
  return (dispatch, getState) => {
    // 1. 根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex(song => song.id === ids);
    if(songIndex !== -1) {
      // 在播放列表中找到歌曲
      dispatch(changeCurrentSongIdexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAtion(song));
    } else {
      // 在播放列表中没有找到歌曲
      // 发送网络请求， 请求歌曲
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        // 1. 将最新请求到的歌曲添加到播放列表中
        const newPlayLsit = [...playList];
        newPlayLsit.push(song);
        // 2. 更新redux中的值
        dispatch(changePlayListAction(newPlayLsit));
        dispatch(changeCurrentSongIdexAction(newPlayLsit.length-1));
        dispatch(changeCurrentSongAtion(song));
        // console.log(res)
      });
    }
  }
}

export const getLyricAction = (id) => {
  return dispatch => {

  }
}