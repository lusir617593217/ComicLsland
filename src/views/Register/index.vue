<template>
  <div class="page-login">
    <div class="page-header">
      <img @click="goBack" class="back" src="../../assets/images/back.png" alt="">
      <div class="pic">
        <img src="../../assets/images/register-love.png" alt="">
      </div>
    </div>

    <!-- 用户信息框 -->
    <div class="user-info">
      <p>
        <span>邮 <i></i> 箱：</span>
        <input type="text" placeholder="请输入你的邮箱">
      </p>
      <p class="password">
        <span>密 <i></i> 码：</span>
        <input type="password" placeholder="请设置6-16位的字母、数字、符号的密码">
      </p>
      <p class="password">
        <span>确认密码：</span>
        <input type="password" placeholder="请再次输入你的密码">
      </p>
      <button>注册</button>
    </div>

    <!-- goLogin -->
    <p class="go-login">已有账号？马上<span>登录</span></p>
  </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

.page-login {
  height: 100%;
  .page-header {
    width: 100%;
    height: 345px;
    position: relative;
    padding-top: 160px;
    background: url('../../assets/images/login-bg.png') no-repeat top;
    background-size: contain;
    .back {
      position: absolute;
      top: 20px;
      left: 15px;
      width: 24px;
      height: 13px;
    }
    .register {
      position: absolute;
      top: 20px;
      right: 15px;
      font-size: 15px;
      color: #000;
      font-weight: 700;
    }
    .pic {
      width: 100%;
      height: 184px;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
      }
    }
  }
  .user-info {
    width: 375px;
    // height: 129px;
    padding: 0 34px;
    margin: 20px 0;
    p {
      @include border-bottom-f4;
      width: 100%;
      height: 22px;
      font-size: 12px;
      color: #000;
      padding-bottom: 5px;
      span {
        color: #000;
        font-size: 12px;
        display: inline-block;
        width: 60px;
        i {
          width: 16px;
          display: inline-block;
        }
      }
      input {
        border: 0;
        outline: none;
        font-size: 12px;
        color: #666;
        width: 70%;
      }
    }
    .password {
      margin-top: 30px;
    }
    button {
      width: 100%;
      height: 36px;
      line-height: 36px;
      margin-top: 20px;
      font-size: 13px;
      color: #fff;
      text-align: center;
      background-color: #ff4c17;
      border: 0;
      outline: none;
      font-weight: 600;
    }
  }
  .line {
    font-size: 13px;
    color: #000;
    padding: 0 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::before, &::after {
      content: '';
      width: 90px;
      height: 1px;
      background-color: #f4f4f4;
    }
  }
  .qq-weibo {
    width: 307px;
    height: 68px;
    padding: 23px 40px 0;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    img {
      width: 45px;
      height: 45px;
    }
  }
  .go-login {
    height: 16px;
    width: 307px;
    margin: 0 auto;
    font-size: 12px;
    color: #000;
    text-align: end;
    span {
      color: #5094f7;;
    }
  }
}
</style>
