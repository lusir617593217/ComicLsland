<template>
  <div class="cartoon-header">
      <img @click="goBack" class="header-back" src="../../assets/images/back.png" alt="">
      <div class="header-title">{{ title }}</div>
      <img @click="goSearch" class="header-search" v-if="showSearch" src="../../assets/images/redSearch.png" alt="">
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '漫画岛'
    },
    showSearch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    goSearch () {
      this.$router.push('/search')
    }
  }

}
</script>

<style lang='scss' scoped>
@import '@/assets/css/mixin.scss';
.cartoon-header {
  @include border-bottom-f4;
  display: flex;
  padding: 0 10px;
  height: 45px;
  background-color: #fff;
  align-items: center;
  .header-back {
    width: 23px;
    height: 13px;
    float: left;
  }
  .header-title {
    font-size: 16px;
    color: #333;
    float: left;
    width: 300px;
    text-align: center;
  }
  .header-search {
    width: 21px;
    height: 21px;
    float: right;
  }
}
</style>
