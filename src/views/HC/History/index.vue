<template>
  <div class="page-history">
    <section class="history-main">
      <template>
        <div class="no-history">
          <img src="@/assets/images/no-history.png" alt="">
          <p>还未欣赏过任何漫画哦~</p>
        </div>
      </template>

      <!-- 热门推荐 -->
      <HotRecomment :recommentList="randerList"></HotRecomment>
    </section>
  </div>
</template>

<script>
// 引入 热门推荐组件
import HotRecomment from '../components/HotRecomment'
// 引入解密文件
import { unformat } from '@/utils/apiHelper'
// 引入 getHistoryRecomment 方法
import { getHistoryRecomment } from '@/api/cartoon'
export default {
  name: 'History',
  components: {
    HotRecomment
  },
  data () {
    return {
      recommentList: []
    }
  },
  computed: {
    randerList () {
      if (this.recommentList.length === 0) return []
      const arr = []
      for (let i = 0; i < 6; i++) {
        const num = Math.floor(Math.random() * 12)
        if (arr.indexOf(num) === -1) {
          arr.push(num)
        } else {
          i--
        }
      }
      // 在原数据中随机抽取六项数据
      const temArr = []
      arr.forEach(item => {
        // const one = this.recommentList.filter((val, index) => {
        //   return index === item
        // })
        temArr.push(this.recommentList[item])
      })
      return temArr
    }
  },
  methods: {
    getHistoryRecomment () {
      getHistoryRecomment().then(res => {
        const info = JSON.parse(unformat(res.info))
        this.recommentList = info.comicsList
      })
    }
  },
  created () {
    this.getHistoryRecomment()
  }
}
</script>

<style lang="scss" scoped>
.page-history {
  height: 100%;
  .no-history {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 115px;
      height: 122px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
