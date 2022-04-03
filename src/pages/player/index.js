import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayRight
} from './style'

const McPlayer = memo(() => {
  return (
    <PlayerWrapper>
      <div className='content wrap-v2'>
        <PlayerLeft>
          <h2>McPlayerInfo</h2>
          <h2>McSongContent</h2>
        </PlayerLeft>
        <PlayRight>
          <h2>McSimiPlayList</h2>
          <h2>McSimiSongs</h2>
          <h2>Download</h2>
        </PlayRight>
      </div>
    </PlayerWrapper>
  )
})

export default McPlayer;