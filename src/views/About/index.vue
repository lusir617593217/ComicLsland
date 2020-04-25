<template>
  <div class="page-about">
    <!-- header -->
    <MyHeader title="关于漫画岛" :showSearch="false"></MyHeader>

    <!-- download -->
    <div class="download">
      <img src="@/assets//images/download.png" alt="">
      <button>立即下载</button>
    </div>

    <!-- message -->
    <ul class="message">
      <li>
        <p>公司名称</p>
        <span>上海元聚网络科技有限公司</span>
      </li>
      <li>
        <p>微博</p>
        <span>@漫画岛官网</span>
      </li>
      <li>
        <p>官方Q群</p>
        <span>55514226</span>
      </li>
      <li>
        <p>联系电话</p>
        <span>021-5439188</span>
      </li>
      <li>
        <p>商务合作QQ</p>
        <span>317022157</span>
      </li>
      <li>
        <p>版权合作邮箱</p>
        <span>tg@manhuadao.cn</span>
      </li>
      <li>
        <p>公司地址</p>
        <span>上海市闵行区万源路2158号弘毅大厦B座</span>
      </li>
    </ul>

    <!-- brief -->
    <div class="brief">
      <h3>漫画岛简介</h3>
      <p>
        上万部各类题材漫画实时连载，各国免费漫画资源全方位覆盖，漫画更新速度紧随官网脚步，绝对让你先睹为快！专为下载阅读研发的极速下载功能和新型压缩技术，在观看高清漫画的同时更有效地为你节省手机空间让你观漫无止境。漫画岛，致力为沉迷二次元漫画的你带来丰富的精神食粮！畅心阅读，一点都不卡。
      </p>
    </div>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '@/components/MyHeader'
export default {
  name: 'About',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.page-about {
  height: 100%;
  .download {
    width: 375px;
    height: 100px;
    padding: 25px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 165px;
      height: 50px;
    }
    button {
      width: 85px;
      height: 30px;
      border: 0;
      outline: none;
      background-color: #e7370c;
      font-size: 12px;
      color: #fff;
      font-weight: 600;
      border-radius: 3px;
    }
  }
  .message {
    width: 375px;
    height: 296px;
    padding: 0 8px;
    li {
      @include border-bottom-f4;
      width: 359px;
      height: 37px;
      padding: 0 7px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 13px;
        color: #333;
      }
      span {
        font-size: 11px;
        color: #666;
      }
    }
  }
  .brief {
    width: 100%;
    padding: 0 8px 10px 14px;
    h3 {
      font-size: 13px;
      color: #333;
      padding: 13px 0 10px;
    }
    p {
      font-size: 11px;
      color: #666;
      line-height: 2;
    }
  }
}
</style>
