import React, { memo } from 'react';

import McPlayHeader from './c-cpns/play-header';
import McPlayList from './c-cpns/play-list';
import McLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function McAppPlayList() {
  return (
    <PanelWrapper>
      <McPlayHeader />
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt="" />
        <McPlayList />
        <McLyricPanel />
      </div>
    </PanelWrapper>
  )
})