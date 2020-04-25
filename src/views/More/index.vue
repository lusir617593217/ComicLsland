<template>
  <div class="page-more">
    <MyHeader :title="title"></MyHeader>

    <main class="my-scroll">
      <section>
        <!-- card -->
        <div class="cartoon-card" v-for="item in moreList" :key="item.bigbook_id">
          <div class="card-left">
            <img v-lazy="item.coverurl" alt="">
          </div>
          <div class="card-right">
            <h3>{{ item.bigbook_name }}</h3>
            <p class="author">作者：<span>{{ item.bigbook_author }}</span></p>
            <p>人气：
              {{
                item.bigbookview > 100000000 ?
                `${(item.bigbookview/100000000).toFixed(2)} 亿` :
                `${(item.bigbookview/10000).toFixed(2)} 万`
              }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '@/components/MyHeader'

// 引入解密文件
import { unformat } from '@/utils/apiHelper'
// 引入 getMoreList 方法
import { getMoreList } from '@/api/cartoon'
// 引入滚动插件
import BScroll from 'better-scroll'

export default {
  name: 'More',
  components: {
    MyHeader
  },
  data () {
    return {
      title: this.$route.query.name,
      special: this.$route.query.special,
      moreList: []
    }
  },
  methods: {
    getMoreList (special) {
      getMoreList(special).then(res => {
        const info = JSON.parse(unformat(res.info))
        this.moreList = info.comicsList
      })
    }
  },
  created () {
    this.getMoreList(this.special)
  },
  mounted () {
    // eslint-disable-next-line no-new
    new BScroll('.my-scroll', { // 需要传递父级元素
      scrollY: true,
      click: true
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.page-more {
  height: 100%;
  display: flex;
  flex-direction: column;
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
}
</style>
