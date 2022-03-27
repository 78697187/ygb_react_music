import styled from 'styled-components';

export const HotRecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 140px;
      height: 140px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`