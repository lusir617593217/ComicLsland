<template>
  <div class="page-ch">
    <!-- header -->
    <div class="ch-header">
      <img @click="goBack" src="../../assets/images/back.png" alt="">
      <div class="nav">
        <span @click="toggleCilck('Collection')" :class="{'active': toggleLight==='Collection'}">收藏</span>
        <span @click="toggleCilck('History')" :class="{'active': toggleLight==='History'}">历史</span>
      </div>
    </div>

    <!-- main -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'HC',
  data () {
    return {
      toggleLight: this.$route.name
    }
  },
  methods: {
    toggleCilck (collect) {
      this.toggleLight = collect
      this.$router.push({ name: collect })
    },
    goBack () {
      this.$router.back()
      this.toggleLight = this.toggleLight === 'History' ? 'Collection' : 'History'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';
.page-ch {
  height: 100%;
  display: flex;
  flex-direction: column;
  .ch-header {
    @include border-bottom;
    height: 45px;
    position: relative;
    background-color: #f9f9f9;
    img {
      width: 23px;
      height: 13px;
      position: absolute;
      top: 16px;
      left: 10px;
    }
    .nav {
      width: 120px;
      height: 45px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 17px;
      color: #e7370c;
      span {
        position: relative;
      }
      .active::after {
        content: "";
        width: 34px;
        height: 5px;
        position: absolute;
        left: 0;
        bottom: -13px;
        background: url('../../assets/images/hc_line.png') no-repeat center;
        background-size: contain;
      }
    }
  }
  main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
