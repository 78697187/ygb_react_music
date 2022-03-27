import React, { memo } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style'

const McThemeHeaderRCM = memo((props) => {
  const { title, keywords } = props;
  // const { title, keywords = []} = props;  // 另外一种写法


  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {
            keywords && keywords.map((item,index) => {
              return (
                <div className='item' key={nanoid()}>
                  <a href='todo'>{item}</a>
                  <span className='divider'> | </span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
        <a href='todo'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

McThemeHeaderRCM.propTypes = {
 title: PropTypes.string.isRequired,
 keywords: PropTypes.array
}

// McThemeHeaderRCM.defaultProps = {
//   keywords: []
// }

export default McThemeHeaderRCM;