import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { nanoid } from 'nanoid';

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

const McTopBanner = memo(() => {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);


  // 组件和redux关联： 获取数据和进行操作
  // 2. 获取数据（useSelector）
  // 这个方法有缺陷。（24课2:20） 默认不会对返回的对象进行浅层比较
  //底层是 === 比较前后两次状态， 解决：加一个shallowEqual浅层比较的参数
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  // 1.进行操作（useDispatch）
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 其他的hooks
  const bannerRef = useRef();
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, [])

  // 其他业务逻辑
  /* 避免第一次topBanners为空 取不到值 */
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          {/* 直接使用antd里的轮播图模版 */}
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item,index) => {
                return (
                  <div className='banner-item' key={nanoid()}>
                    <a href={item.url} target='_blank' rel="noreferrer">
                      <img className='image' src={item.imageUrl} alt={item.typeTitle}></img>
                    </a>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn right' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default McTopBanner