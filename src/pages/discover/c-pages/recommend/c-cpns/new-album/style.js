import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  margin: 20px 0;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 25px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    align-self: start;

    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -255px -75px;
    }

    .arrow-right {
      background-position: -297px -75px;
    }

    .album {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`