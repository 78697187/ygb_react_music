import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';
import {
  NEW_ALBUM_LIMIT,
  NUMBER_ALBUM_PER_PAGE
 } from '@/common/contants.js'

import { Carousel } from 'antd';
import McThemeHeaderRCM from '@/componnets/theme-header-rcm';
import { AlbumWrapper } from './style';
import McAlbumCover from '@/componnets/album-cover';


const McNewAlbum = memo(() => {

  // redux hooks
  const { newAlbums } = useSelector( state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch])


  return (
    <div>
      <McThemeHeaderRCM title="新碟上架"/>
      <AlbumWrapper>
        <div className='content'>
          <button className='arrow sprite_02 arrow-left'
                  onClick={e => pageRef.current.prev()}></button>
          <div className='album'>
            <Carousel autoplay dots={false}  ref={pageRef}>
              {
                [0,1].map(item => {
                  return (
                    <div key={item} className="page">
                      {
                        newAlbums.slice(item*NUMBER_ALBUM_PER_PAGE, (item+1)*NUMBER_ALBUM_PER_PAGE).map(
                          iten => {
                            return <McAlbumCover
                                      key={iten.id}
                                      info={iten}
                                      size={105}
                                      width={118}
                                      bgp={-570}
                                    />
                          }
                        )
                      }
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <button className='arrow sprite_02 arrow-right'
                  onClick={e => pageRef.current.next()}></button>
        </div>
      </AlbumWrapper>
    </div>
  )
})

export default McNewAlbum