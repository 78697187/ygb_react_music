import request from './request';

export function getTopList() {
  return request({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getRankingListDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}