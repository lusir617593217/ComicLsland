<template>
  <div class="page-home">
    <div class="home-top">
      <router-link class="left" to="/my" >
        <img src="../../assets/icon/my.png" alt="">
      </router-link>
      <div class="center">
        <img src="../../assets/logo.png" alt="">
      </div>
      <router-link class="right" to="/search">
        <img src="../../assets/icon/search.png" alt="">
      </router-link>
    </div>
    <div id="content">
      <!-- 轮播图 -->
      <Swiper class="my-swiper" :autoplay="2000">
        <Swiperitem v-for="item in swiperList" :key="item.id">
          <img :src="item.imageurl" alt="">
        </Swiperitem>
      </Swiper>
      <!-- nav 导航 -->
      <HomeNav></HomeNav>

      <!-- 卡片 -->
      <HomeCard :contentList="contentList"></HomeCard>

      <!-- 版权备案 copyright -->
      <Copyright></Copyright>
    </div>
  </div>
</template>

<script>
// 引入自己封住的轮播路组件
import { Swiper, Swiperitem } from '@/components/Swiper'
// 引入 HomeNav 组件
import HomeNav from './HomeNav'
// 引入 HomeCard 组件
import HomeCard from './HomeCard'
// 引入 Copyright 组件
import Copyright from './Copyrigth'

// 引入 getBanner 接口函数
import { getBanner, getContent } from '../../api/cartoon'
export default {
  data () {
    return {
      swiperList: [],
      contentList: []
    }
  },
  components: {
    Swiper,
    Swiperitem,
    HomeNav,
    HomeCard,
    Copyright
  },
  created () {
    getBanner().then(res => {
      this.swiperList = res.info
    })
    getContent().then(res => {
      this.contentList = res.info
    })
  }
}
</script>

<style lang='scss' scodep>
@import '../../assets/css/mixin.scss';
.page-home {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  // top
  .home-top {
    @include border-bottom;
    height: 45px;
    width: 375px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    top: 0;
    left: 0;
    .left, .right {
      width: 21px;
      height: 21px;
      img {
        width: 21px;
      }
    }
    .center {
      img {
        width: 93px;
        height: 28px;
      }
    }
  }
  #content {
    // margin-top: 45px;
    flex: 1;
    overflow-y: auto;
  }
}
</style>

<style lang="scss">
// 轮播图
.my-swiper {
  width: 375px;
  height: 180px;
  .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background-color: #eee;
  }
  .swiper-pagination-bullet-active {
    width: 15px;
    height: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  img {
    width: 100%;
  }
}
</style>
