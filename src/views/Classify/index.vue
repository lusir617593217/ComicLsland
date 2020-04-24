<template>
  <div class="classfiy">
    <!-- header start -->
    <MyHeader title="分类"></MyHeader>

    <!-- nav start -->
    <Nav :navList="navList" @change="changeNav"></Nav>

    <main>
      <!-- card -->
      <div class="cartoon-card" v-for="item in typeList" :key="item.bigbook_id">
        <div class="card-left">
          <img v-lazy="item.coverurl" alt="">
        </div>
        <div class="card-right">
          <h3>{{ item.bigbook_name }}</h3>
          <p class="author">作者：<span>{{ item.bigbook_author }}</span></p>
          <p>人气：{{ (item.bigbookview/100000000).toFixed(2) }}亿</p>
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

// 引入 getNav
import { getNav, getTypeList } from '@/api/cartoon'
// 引入解密文件
import { unformat } from '@/utils/apiHelper'

export default {
  name: 'Classfiy',
  data () {
    return {
      navList: [],
      typeList: []
    }
  },
  components: {
    MyHeader,
    Nav
  },
  methods: {
    getNav () {
      return getNav().then(res => {
        this.navList = res.info
      })
    },
    changeNav (data) {
      const subject = data.targetargument
      this.getTypeList(subject)
    },
    getTypeList (subject) {
      getTypeList(subject).then(res => {
        const info = JSON.parse(unformat(res.info))
        this.typeList = info.comicsList
      })
    }
  },
  async created () {
    await this.getNav()
    this.getTypeList(this.navList[0].targetargument)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.classfiy {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
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
