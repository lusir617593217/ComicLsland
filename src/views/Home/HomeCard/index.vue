<template>
  <div v-if="contentList.length>0">
    <div class="card" v-for="item1 in contentList" :key="item1.specialid">
      <div class="header">
        <p>
          <img :src="item1.icon" alt="">
          {{ item1.name }}
        </p>
        <router-link class="more" to="more">更多 &gt;</router-link>
      </div>
      <ul class="content-type-1" v-if="item1.comicsviewtype===1">
        <li class="item" v-for="item2 in item1.comicslist" :key="item2.bigbook_id">
          <img :src="JSON.parse(item2.extension).xsyzfx" alt="">
          <p>{{ item2.bigbook_name }}</p>
          <span>{{ JSON.parse(item2.extension).recommendwords }}</span>
        </li>
        <li class="item">
          <img src="https://img.manhuadao.cn/upload/BigBook201905/314b3ba47fb74621883462c8662aaed6.jpg" alt="">
          <p></p>
          <span>取代主角的光环作者</span>
        </li>
      </ul>
      <ul class="content-type-5" v-if="item1.comicsviewtype===5">
        <li class="item" v-for="item2 in item1.comicslist" :key="item2.bigbook_id">
          <img :src="item2.coverurl" alt="">
          <p>{{ item2.bigbook_name }}</p>
          <span>{{item2.key_name}}</span>
        </li>
      </ul>
      <ul class="content-type-3" v-if="item1.comicsviewtype===3">
        <li class="item" v-for="item2 in item1.comicslist" :key="item2.bigbook_id">
          <div class="item-left">
            <img :src="JSON.parse(item2.extension).scfk344_202" alt="">
          </div>
          <div class="item-right">
            <p class="item-title">{{ item2.bigbook_name }}</p>
            <span>人气：  <i>{{ (item2.bigbookview/100000000).toFixed(2) }}亿</i></span>
            <p class="message">{{ item2.brief }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    contentList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 375px;
  // height: 550px;
  background-color: #f4f4f4;
  text-align: center;
  padding-top: 8px;
  overflow: hidden;
  .header {
    background-color: #fff;
    height: 66px;
    padding: 23px 0 19px 0;
    position: relative;
    p {
      color: #3a3a3a;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      img {
        width: 22px;
        height: 22px;
        display: inline-block;
        margin-top: -2px;
        vertical-align: top;
      }
    }
    .more {
      font-size: 12px;
      color: #b0b0b0;
      position: absolute;
      top: 27px;
      right: 10px;
    }
  }
  .content-type-1 {
    height: 468px;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fff;
    .item {
      width: 173px;
      height: 219px;
      margin-bottom: 18px;
      img {
        width: 173px;
        height: 173px;
      }
      p {
        font-size: 14px;
        max-width: 100%;
        margin: 4px 0 6px;
        text-align: left;
        color: #3a3a3a;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      span {
        max-width: 100%;
        font-size: 12px;
        text-align: left;
        float: left;
        color: #8d8d8d;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .content-type-5 {
    height: 210px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .item {
      width: 132px;
      height: 195px;
      margin-bottom: 16px;
      img {
        width: 110px;
        height: 148px;
        margin-bottom: 5px;
      }
      p {
        font-size: 14px;
        max-width: 105px;
        margin: 4px 0 0;
        color: #3a3a3a;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      span {
        max-width: 105px;
        font-size: 12px;
        color: #8d8d8d;
        float: left;
        margin-top: 6px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .content-type-3 {
    padding: 0 10px;
    height: 630px;
    background-color: #fff;
    .item {
      width: 355px;
      height: 90px;
      margin-bottom: 18px;
      font-size: 12px;
      color: #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item-left {
        width: 153px;
        height: 90px;
        img {
          width: 153px;
          height: 90px;
        }
      }
      .item-right {
        width: 158px;
        height: 73px;
        box-sizing: content-box;
        margin-left: 43px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .item-title {
          height: 20px;
          margin-bottom: 3px;
          font-size: 15px;
          color: #3a3a3a;
        }
        span {
          font-size: 12px;
          height: 16px;
          margin-bottom: 15px;
          color: #b0b0b0;
          i {
            color: red;
          }
        }
        .message {
          height: 16px;
          width: 158px;
          font-size: 12px;
          color: #8d8d8d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
