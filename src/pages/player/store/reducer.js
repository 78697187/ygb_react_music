import { Map } from "immutable";
import * as actionTypes from './constants'

// Map是一个浅拷贝
const defaultState = Map({
  currentSong: {},
  playList: [
    {
      "name": "Lone Ranger",
      "id": 29803676,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 74518,
          "name": "Rachel Platten",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 19,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 3081170,
        "name": "Fight Song",
        "picUrl": "https://p2.music.126.net/XUHjsGtSC63UTiKEWbtvmQ==/109951165972029591.jpg",
        "tns": [],
        "pic_str": "109951165972029591",
        "pic": 109951165972029580
      },
      "dt": 187559,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7503456,
        "vd": -54340
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4502091,
        "vd": -51819
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3001408,
        "vd": -50234
      },
      "a": null,
      "cd": "1",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 19,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mst": 9,
      "cp": 7001,
      "rtype": 0,
      "rurl": null,
      "mv": 14341965,
      "publishTime": 1424361600000
    },
    {
      "name": "孤勇者",
      "id": 1901371647,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 2116,
          "name": "陈奕迅",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "《英雄联盟：双城之战》动画剧集中文主题曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 137142551,
        "name": "孤勇者",
        "picUrl": "https://p1.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg",
        "tns": [],
        "pic_str": "109951166702962263",
        "pic": 109951166702962260
      },
      "dt": 256000,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 10242285,
        "vd": -55735
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 6145389,
        "vd": -53179
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4096941,
        "vd": -51651
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 5,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "mv": 14480854,
      "publishTime": 1638892800000
    },
    {
      "name": "漠河舞厅·2022",
      "id": 1894094482,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1060132,
          "name": "柳爽",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 135992033,
        "name": "漠河舞厅·2022",
        "picUrl": "https://p2.music.126.net/m8BMzRWR53lMu2uaMYV2mA==/109951166609630672.jpg",
        "tns": [],
        "pic_str": "109951166609630672",
        "pic": 109951166609630670
      },
      "dt": 304195,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 12169965,
        "vd": -45176
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7301997,
        "vd": -42579
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4868013,
        "vd": -40904
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 5,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "mv": 0,
      "publishTime": 0
    },
    {
      "name": "删了吧",
      "id": 1891469546,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 49937403,
          "name": "烟(许佳豪)",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "要不你还是把我删了吧"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 135521932,
        "name": "删了吧",
        "picUrl": "https://p2.music.126.net/nNg4YjkcK1AwCX1FrN8VOQ==/109951166578333625.jpg",
        "tns": [],
        "pic_str": "109951166578333625",
        "pic": 109951166578333630
      },
      "dt": 204955,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8200403,
        "vd": -26816
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4920259,
        "vd": -24206
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3280187,
        "vd": -22486
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 6,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "mv": 14494332,
      "publishTime": 1636128000000
    },
    {
      "name": "哪里都是你",
      "id": 488249475,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1143033,
          "name": "队长",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 22,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 35702116,
        "name": "哪里都是你",
        "picUrl": "https://p2.music.126.net/lnOnBbP_H-052Hv5ls-QjA==/109951162964628408.jpg",
        "tns": [],
        "pic_str": "109951162964628408",
        "pic": 109951162964628420
      },
      "dt": 222683,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8909889,
        "vd": -52679
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5345951,
        "vd": -52679
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3563982,
        "vd": -52679
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 22,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "mv": 14477247,
      "publishTime": 1499076297913
    }
  ],
  currentSongIndex: 0,
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricList: []
});

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList);
    default:
      return state;
  }
}

export default reducer;