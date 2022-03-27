import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { HeaderWrapper, HeadrLeft, HeadrRight } from './style'

const McAppHeader = memo(() => {
  // 页面代码
  const showSelectItem = (item, index) => {
    if(index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeadrLeft>
        {/* 这里加网易云的原因是方便SEO,为了不在页面上显示可以在style中添加text-indent:-9999px */}
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item,index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeadrLeft>
        <HeadrRight>
          <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}/>
          <div className='center'>
            <a href='/#'>创作者中心</a>
          </div>
          <div style={{ color: "#787878 "}}>
            <a href='/#'>登陆</a>
          </div>
        </HeadrRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default McAppHeader;