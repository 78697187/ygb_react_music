import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import store from './store';

import McAppHeader from '@/componnets/app-header';
// import McFooter from './componnets/app-footer'
import McAppPlayerBar from './pages/player/app-player-bar';


const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <McAppHeader />
          <Suspense fallback={<div>page loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
        {/* <McFooter /> */}
        <div className='app-footer'></div>
        <McAppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})

export default App;