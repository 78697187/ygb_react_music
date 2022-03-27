import React, { memo } from 'react';
import { NavLink} from 'react-router-dom';
import { nanoid } from 'nanoid';
import { renderRoutes } from 'react-router-config';

import { discoverMenu } from '@/common/local-data.js';


import {
  DiscoverWrapper,
  TopMenu
} from './style';



const McDiscover = memo((props) => {

  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='warp-v1'>
          {
            discoverMenu.map((item, index)=> {
              return (
                <div className='item' key={nanoid()}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default McDiscover;