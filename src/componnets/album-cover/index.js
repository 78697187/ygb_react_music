import React, { memo } from 'react'

import {
  getSizeImage
} from '@/utils/data-format';

import { AlbumWrapper } from './style'

const McAlbumCover = memo((props) => {
  const { info, size=130, width=153, bgp=-845}  = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/abc" className="cover sprite_covor">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

export default McAlbumCover