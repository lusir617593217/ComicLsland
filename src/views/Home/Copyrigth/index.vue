<template>
  <div class="copyrigth">
    <p class="benan">
      <img src="https://wechatapp.zhuishushenqi.com/mhd/201711/gongan.jpg" alt="">
      沪公网安备 31011202006214号
    </p>
    <p>
      增值电信业务经营许可证沪B2-20170022 <br>
      网络文化经营许可证沪网文（2016）3206-227号 <br>
      出版物经营许可证新出发沪批字第U7659号 <br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style lang="scss" scoped>
.copyrigth {
  padding: 10px 0;
  margin-top: 10px;
  p {
    text-align: center;
    color: #000;
    font-size: 12px;
    margin-top: 5px;
    line-height: 16px;
  }
  .benan {
    color: #333;
    font-size: 12px;
    img {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 3px;
      vertical-align: middle;
    }
  }
}
</style>
