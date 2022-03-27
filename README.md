## 接口描述

’/top/list/‘
idx:
- 0: 新歌榜
- 1: 热歌榜
- 2: 原创榜
- 3: 飙升榜

## 网易接口：
### 推荐页面：
轮播图数据：
- /banner
热门推荐：
- /personalized
新碟上架：
- /top/album?limit=10
榜单数据：
- ’/top/list/‘
idx:
  - 0: 新歌榜
  - 1: 热歌榜
  - 2: 原创榜
  - 3: 飙升榜
入驻歌手：
- /artist/list?limit=5&cat=5001

播放页面：
歌曲信息：
- /song/detail?ids=167876
歌曲播放：
- https://music.163.com/song/media/outer/url?id=${id}.mp3
歌词数据：
- /lyric?id
相关播放列表
- /simi/playlist?id
相关歌曲列表
- /simi/song?id

