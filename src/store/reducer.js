import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as rankingReducer} from '../pages/discover/c-pages/ranking/store';

// 这里也是用工具转换为了immutable类型
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
})

export default cReducer;
