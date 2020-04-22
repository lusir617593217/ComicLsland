<template>
  <div class="nav">
    <router-link class="box" to="/classify">
      <img src="~@/assets/images/classify.png" alt="">
      <span>分类</span>
    </router-link>
    <router-link class="box" to="/ranking">
      <img src="~@/assets/images/ranking.png" alt="">
      <span>排行</span>
    </router-link>
    <router-link class="box" to="/vip">
      <img src="~@/assets/images/vip.png" alt="">
      <span>vip专区</span>
    </router-link>
    <router-link class="box" to="/hc/history">
      <img src="~@/assets/images/history.png" alt="">
      <span>历史</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeNav'
}
</script>

<style lang="scss" scoped>
.nav {
  width: 375px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .box {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img {
      width: 55px;
      height: 55px;
    }
    span {
      color: #8d8d8d;
      font-weight: 500;
      font-size: 14px;
    }
  }
}
</style>
