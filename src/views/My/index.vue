<template>
  <div class="page-my">
    <MyHeader title="我的" :showSearch="false"></MyHeader>

    <div class="login-reg">
      <div class="pic">
        <img src="@/assets/images/my.png" alt="">
      </div>
      <p @click="goPath('/login')">登录/注册</p>
    </div>

    <!-- info -->
    <div class="info">
      <p @click="goPath('/hc/collection')">
        <span class="iconfont icon-jingcaishike"></span>收藏
        <i class="iconfont icon-arrow-right-copy-copy"></i>
      </p>
      <p @click="goPath('/hc/history')">
        <span class="iconfont icon-shizhong"></span>历史
        <i class="iconfont icon-arrow-right-copy-copy"></i>
      </p>
      <p @click="goPath('/about')">
        <span class="iconfont icon-M"></span>关于漫画岛
        <i class="iconfont icon-arrow-right-copy-copy"></i>
        </p>
      <p>
        <span class="iconfont icon-bi bi"></span>反馈
        <i class="iconfont icon-arrow-right-copy-copy"></i>
      </p>
    </div>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '@/components/MyHeader'
export default {
  name: 'My',
  components: {
    MyHeader
  },
  methods: {
    goPath (path) {
      this.$router.push(path)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.page-my {
  height: 100%;
  background-color: #f4f4f4;
  .login-reg {
    height: 97px;
    width: 375px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    background-color: #fff;
    .pic {
      width: 66px;
      height: 66px;
      overflow: hidden;
      border: 1px solid #f4f4f4;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 15px;
      color: #000;
      margin-left: 10px;
    }
  }
  .info {
    width: 375px;
    margin-top: 10px;
    background-color: #fff;
    p {
      @include border-bottom;
      height: 45px;
      line-height: 45px;
      padding: 0 5px 0 15px;
      color: #333;
      font-size: 15px;
      .icon-arrow-right-copy-copy {
        float: right;
        font-size: 18px;
        color: #999;
      }
      span {
        color: orangered;
        font-weight: 700;
        font-size: 14px;
        padding-right: 10px;
      }
      .bi {
        font-size: 20px;
        padding-right: 4px;
      }
    }
  }
}
</style>
