<template>
  <div class="page-search-result">
    <MyHeader :title="serchKey" :showSearch="false"></MyHeader>

    <main>
      <template v-if="searchResults.length>0">
        <!-- card -->
        <div class="cartoon-card" v-for="item in searchResults" :key="item.id">
          <div class="card-left">
            <img v-lazy="item.coverurl" alt="">
          </div>
          <div class="card-right">
            <h3>{{ item.name }}</h3>
            <p class="author">作者：<span>{{ item.author }}</span></p>
            <p>更新：{{ item.lastpartname }}</p>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="no-search">
          <img src="../../assets/images/no_search.png" alt="">
        </div>
      </template>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'

// 引入 getSearchResults 方法
import { getSearchResults } from '../../api/cartoon'
export default {
  name: 'SearchResult',
  components: {
    MyHeader
  },
  data () {
    return {
      serchKey: this.$route.query.searchkey,
      searchResults: []
    }
  },
  methods: {
    getSearchResults (key) {
      getSearchResults(key).then(res => {
        this.searchResults = res.info
      })
    }
  },
  created () {
    this.getSearchResults(this.serchKey)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.page-search-result {
  height: 100%;
  display: flex;
  flex-direction: column;
   main {
    flex: 1;
    overflow-y: auto;
    position: relative;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .author {
        margin-bottom: 20px;
      }
    }
  }
  .no-search {
    margin: 100px auto;
    width: 250px;
    height: 225px;
    img {
      width: 100%;
    }
  }
}
</style>
