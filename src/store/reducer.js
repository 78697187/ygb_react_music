import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store';

// 这里也是用工具转换为了immutable类型
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cReducer;
