<template>
  <div class="page-vip">
    <MyHeader title="Vip专区"></MyHeader>

    <main>
      <!-- card -->
      <div class="cartoon-card" v-for="item in typeList" :key="item.bigbookid">
        <div class="card-left">
          <img :src="item.coverurl" alt="">
        </div>
        <div class="card-right">
          <h3>{{ item.bigbook_name }}</h3>
          <p class="author">作者：<span>{{ bigbook_author }}</span></p>
          <p>人气：{{ (item.bigbookview/100000000).toFixed(2) }}亿</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'

// 引入 getVipList 方法
import { getVipList } from '../../api/cartoon'
// 引入 解密文件
import { unformat } from '../../utils/apiHelper'

export default {
  name: 'Vip',
  components: {
    MyHeader
  },
  data () {
    return {
      typeList: []
    }
  },
  methods: {
    getVipList () {
      getVipList().then(res => {
        if (res.code === 200) {
          const info = JSON.parse(unformat(res.info))
          console.log(info)
          this.typeList = info.comicsList
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('')
      })
    }
  },
  created () {
    this.getVipList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

.page-vip {
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
  width: 100%;
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
