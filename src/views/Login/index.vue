<template>
  <div class="page-login">
    <div class="page-header">
      <img @click="goBack" class="back" src="../../assets/images/back.png" alt="">
      <span @click="goRegister" class="register">注册</span>
      <div class="pic">
        <img src="../../assets/images/login-love.png" alt="">
      </div>
    </div>

    <!-- 用户信息框 -->
    <div class="user-info">
      <p>
        邮箱：
        <input type="text" placeholder="请输入您的邮箱">
      </p>
      <p class="password">
        密码：
        <input type="text" placeholder="请输入您的密码">
        <span>忘记密码？</span>
      </p>
      <button>登录</button>
    </div>

    <!-- login 方式 -->
    <p class="line">或者以下方式登录</p>

    <!-- qq weibo -->
    <div class="qq-weibo">
      <img src="../../assets/images/login-qq.png" alt="">
      <img src="../../assets/images/login-weibo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goBack () {
      this.$router.back()
    },
    goRegister () {
      this.$router.push('/register')
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
    height: 129px;
    padding: 0 34px;
    margin: 40px 0;
    p {
      @include border-bottom-f4;
      width: 100%;
      height: 22px;
      font-size: 12px;
      color: #000;
      padding-bottom: 5px;
      input {
        border: 0;
        outline: none;
        font-size: 12px;
        color: #666;
      }
    }
    .password {
      margin-top: 30px;
      span {
        float: right;
        color: #5094f9;
        font-size: 10px;
      }
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
}
</style>
