<template>
  <div class="page-search">
    <!-- header -->
    <div class="search-header">
      <img @click="goBack" src="../../assets/images/back_w.png" alt="">
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model.trim="searchValue" placeholder="漫画名 | 作者 ^_^">
      </div>
      <p @click="handleClick(searchValue)">搜索</p>
    </div>

    <template v-if="!searchValue">
      <!-- hotSearch -->
      <div class="hot-search">
        <div class="top">
          <span>大家都在搜</span>
          <span @click="getHotList"> <i class="iconfont icon-shuaxin"></i> 刷新</span>
        </div>
        <div class="content">
          <span v-for="item in hotWordList" :key="item.id" @click="handleClick(item.keyword)">
            {{ item.keyword }}
          </span>
        </div>
      </div>

      <!-- recent 最近 -->
      <div class="recent-search" v-if="searchHistoryList.length > 0">
        <div class="title">
          <span>最近搜索</span>
          <i class="iconfont icon-shanchu" @click="moveAll"></i>
        </div>
        <div class="history-item"
          v-for="item in searchHistoryList"
          :key="item"
          @click="handleClick(item)"
        >
          <i class="iconfont icon-shizhong"></i>
          <span>{{ item }}</span>
        </div>
      </div>
    </template>

    <template v-if="searchValue">
      <div class="search-content">
        <p class="content-item" @click="handleClick(item)" v-for="item in searchList" :key="item">
          {{ item }}
        </p>
      </div>
    </template>
  </div>
</template>

<script>
// 引入 getHotList 方法
import { getHotList, getSearchArr } from '../../api/cartoon'
export default {
  name: 'Search',
  data () {
    return {
      searchValue: '',
      hotWordList: [],
      searchList: [],
      searchHistoryList: this.getSearchList()
    }
  },
  watch: {
    searchValue: function (newVal, oddVal) {
      if (newVal) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.getSearchArr(newVal)
        }, 500)
      }
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    // 获取热搜列表
    getHotList () {
      getHotList().then(res => {
        this.hotWordList = res.info.hotWordsList
      })
    },
    // 获取搜索面板数据
    getSearchArr (searchValue) {
      getSearchArr(searchValue).then(res => {
        this.searchList = res.info
      })
    },
    handleClick (name) {
      if (!name) return
      // 保存数据
      this.saveSearchKey(name)
      // 跳转搜索结果页
      this.$router.push({
        path: '/search-result',
        query: {
          searchkey: name
        }
      })
    },
    // 将数据保存到本地存储中
    saveSearchKey (name) {
      // 取出本地存储中的 searchList
      const list = this.getSearchList()
      // 判断 name 是否已经在 list 中,存在就终止掉
      if (list.indexOf(name) > -1) return
      // 不存在就继续
      list.unshift(name)
      window.localStorage.setItem('searchList', JSON.stringify(list))
    },
    // 取出本地存储中的数据
    getSearchList () {
      const tem = window.localStorage.getItem('searchList')
      // 判断 tem 是否存在
      return tem ? JSON.parse(tem) : []
    },
    // 清空本地存储
    moveAll () {
      window.localStorage.setItem('searchList', '')
      this.searchHistoryList = []
    }
  },
  created () {
    this.getHotList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';
.page-search {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search-header {
    height: 45px;
    background-color: #e7370c;
    padding: 0 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 24px;
      height: 13px;
    }
    p {
      font-size: 15px;
      color: #fff;
    }
    .search-box {
      width: 263px;
      height: 30px;
      background-color: #fff;
      border-radius: 4px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 18px;
        width: 20px;
        color: #aaa;
      }
      input {
        flex: 1;
        text-indent: 6px;
        color: #8d8d8d;
        border: none;
        font-size: 12px;
        height: 30px;
        outline: none;
      }
    }
  }
  .hot-search {
    padding: 15px 10px;
    .top {
      height: 18px;
      font-size: 13px;
      color: #8b8b8b;
      display: flex;
      justify-content: space-between;
      i {
        font-size: 12px;
        font-weight: 600;
      }
    }
    .content {
      margin-top: 13px;
      display: flex;
      flex-wrap: wrap;
      span {
        padding: 0 10px;
        margin: 0 10px 10px 0;
        border: 1px solid #ddd;
        border-radius: 20px;
        color: #000;
        font-size: 14px;
        height: 29px;
        line-height: 29px;
      }
    }
  }
  .recent-search {
    padding: 0 10px;
    .title {
      height: 18px;
      font-size: 12px;
      color: #8b8b8b;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      i {
        font-size: 20px;
      }
    }
    .history-item {
      @include border-bottom;
      height: 40px;
      line-height: 40px;
      color: #000;
      font-size: 14px;
      overflow: hidden;
      i {
        font-size: 13px;
        margin-right: 6px;
        color: #8d8d8d;
        font-weight: 500;
      }
    }
  }
  .search-content {
    padding: 0 10px;
    .content-item {
      @include border-bottom;
      font-size: 14px;
      height: 46px;
      font-weight: 700;
      color: #000;
      line-height: 46px;
      padding-left: 10px;
    }
  }
}
</style>
