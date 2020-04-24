<template>
  <div class="page-ranking">
    <!-- header start -->
    <MyHeader title="排行榜"></MyHeader>

    <!-- nav start -->
    <Nav :navList="navList" @change="changeNav"></Nav>

    <main>
      <!-- card -->
      <div class="cartoon-card" v-for="item in typeList" :key="item.bigbookid">
        <div class="card-left">
          <img v-lazy="item.coverurl" alt="">
        </div>
        <div class="card-right">
          <h3>{{ item.name }}</h3>
          <p class="author">作者：<span>{{ item.author }}</span></p>
          <p>人气：{{ (item.weekhits/10000).toFixed(2) }}亿</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '@/components/MyHeader'
// 引入 nav 组件
import Nav from '@/components/Nav'

// 引入解密文件
import { unformat } from '@/utils/apiHelper'
// 引入 getRankList 方法
import { getRankList } from '@/api/cartoon'

export default {
  name: 'Ranking',
  components: {
    MyHeader,
    Nav
  },
  data () {
    return {
      navList: [
        { id: 1, name: '热搜榜', ranktype: 6 },
        { id: 2, name: '人气榜', ranktype: 1 },
        { id: 3, name: '畅销榜', ranktype: 4 },
        { id: 4, name: '新书榜', ranktype: 2 },
        { id: 5, name: '完结榜', ranktype: 5 },
        { id: 6, name: '免费榜', ranktype: 3 }
      ],
      typeList: []
    }
  },
  methods: {
    changeNav (data) {
      const ranktype = data.ranktype
      this.getRankList(ranktype)
    },
    getRankList (ranktype) {
      getRankList(ranktype).then(res => {
        const info = JSON.parse(unformat(res.info))
        this.typeList = info.ranklist
      })
    }
  },
  created () {
    this.getRankList(this.navList[0].ranktype)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

.page-ranking {
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow-y: auto;
}
// card
.cartoon-card {
  @include border-bottom;
  height: 125px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  .card-left {
    width: 80px;
    height: 105px;
    img {
      width: 100%;
    }
  }
  .card-right {
    height: 95px;
    padding-left: 10px;
    h3 {
      font-size: 15px;
      color: #333;
      margin-bottom: 20px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-size: 13px;
      color: #999;
    }
    .author {
      margin-bottom: 20px;
    }
  }
}
</style>
