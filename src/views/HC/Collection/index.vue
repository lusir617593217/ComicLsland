<template>
  <div class="page-history">
    <section class="history-main">
      <template>
        <div class="no-history">
          <p>登录就可以查看收藏过的漫画啦~~</p>
          <button @click="login">登录</button>
          <img src="@/assets/images/no-history.png" alt="">
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
        const one = this.recommentList.filter((val, index) => {
          return index === item
        })
        temArr.push(one[0])
      })
      return temArr
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
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
    height: 210px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 13px;
      color: #666;
    }
    button {
      width: 88px;
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      color: #fff;
      background-color: #e7370c;
      text-align: center;
      border: none;
      outline: none;
      border-radius: 3px;
      margin: 10px auto;
    }
    img {
      width: 115px;
      height: 122px;
      margin-bottom: 10px;
    }
  }
}
</style>
