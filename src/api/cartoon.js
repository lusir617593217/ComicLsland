import require from '@/utils/require'
// 引入加密解密 文件
import { format } from '@/utils/apiHelper'

// 请求轮播图数据
export const getBanner = () => {
  // 配置代理 /api
  return require.get('/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123')
}

// 获取内容数据
export const getContent = () => {
  return require.get('/api/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1')
}

// 获取 nav 数据
export const getNav = () => {
  return require.get('/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125')
}

// 获取 nav 对应的数据列表
export const getTypeList = (subject, pageno = 1, pagesize = 20) => {
  return require({
    method: 'post',
    url: '/api/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app',
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}

// 获取 排行榜列表数据
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  return require({
    method: 'post',
    url: '/api/comic_v2/comicsrank?apptype=8&appversion=1.0&channel=web-app',
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}

// 获取 vip专区数据列表
export const getVipList = () => {
  return require({
    method: 'post',
    url: '/api/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app',
    data: format({
      pageno: 1,
      pagesize: 15,
      special: 892
    })
  })
}

// 获取热门搜索数据
export const getHotList = () => {
  return require.get('/api/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8')
}

// 获取搜索面板的数据
export const getSearchArr = (searchValue) => {
  return require({
    method: 'get',
    url: '/api/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&type=2',
    params: {
      name: searchValue
    }
  })
}

// 获取搜索结果数据
export const getSearchResults = (searchKey) => {
  return require({
    method: 'get',
    url: 'https://mhd.zhuishushenqi.com/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&type=2&pageno=1&pagesize=100',
    params: {
      name: searchKey
    }
  })
}

// 获取更多页面数据 {"special":"954"}
export const getMoreList = (special) => {
  return require({
    method: 'post',
    url: '/api/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app',
    data: format({ special })
  })
}

// 获取历史 推荐数据
export const getHistoryRecomment = () => {
  return require({
    method: 'post',
    url: '/api/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app',
    data: format({ special: 3 })
  })
}
