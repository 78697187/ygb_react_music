import React, { memo } from 'react';

import { getCount, getSizeImage } from '../../utils/data-format';

import {
  ThemeCoverWrapper
} from './style';

const McThemeCover = memo((props) => {
  const { info } = props;

  return (
    <ThemeCoverWrapper>
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl, 140)} alt=""></img>
        <div className='cover sprite_cover'>
          <div className='info sprite_cover'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom text-nowrap'>
        {info.name}
      </div>
      <div className='cover-source'>
        {/* by {info.copywriter || info.creator.nickname} */}
        by {info.copywriter}
      </div>
    </ThemeCoverWrapper>
  )
})

export default McThemeCover