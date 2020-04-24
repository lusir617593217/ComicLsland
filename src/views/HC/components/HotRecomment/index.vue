<template>
  <div class="hot-recomment" v-if="recommentList.length>0">
    <p class="title">热门推荐</p>
    <ul class="recomment-box">
      <li class="recomment-item" v-for="item in recommentList" :key="item.bigbook_id">
        <div class="pic">
          <img v-lazy="item.coverurl" alt="">
        </div>
        <p>{{ item.bigbook_name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotRecomment',
  props: {
    recommentList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hot-recomment {
  margin-top: 15px;
  .title {
    font-size: 13px;
    color: #000;
    margin: 0 12px 12px;
  }
  .recomment-box {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .recomment-item {
      width: 110px;
      height: 164px;
      margin-bottom: 10px;
      .pic {
        width: 110px;
        height: 142px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      p {
        color: #000;
        font-size: 13px;
        margin-top: 5px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
