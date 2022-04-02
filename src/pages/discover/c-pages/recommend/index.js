import React, { memo } from 'react'

import McTopBanner from './c-cpns/top-banner';
import McHotRecommend from './c-cpns/hot-recommend';
import McNewAlbum from './c-cpns/new-album';
import McRecommendRanking from './c-cpns/recommend-ranking';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';


const McRecommend = memo((props) => {

  return (
    <RecommendWrapper>
      <McTopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <McHotRecommend/>
          <McNewAlbum/>
          <McRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
export default McRecommend;

// 非hooks写法
// const McRecommend = memo((props) => {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>McRecommend:{topBanners.length}</div>
//   )
// })

// const mapStateToprops = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     // 前面的dipatch是做异步的网路请求，这里的dispatch是将请求到的数据写入redux
//     dispatch(getTopBannerAction());
//   }
// })

// export default connect(mapStateToprops, mapDispatchToProps)(McRecommend);