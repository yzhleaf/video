<template>
  <div>
    <Login
     topTips="注册blibli"
     login='登录'
     accountTips="请输入账号"
     passwordTips="请输入密码"
     loginTips="注册">
    <router-link to="/">登录</router-link>
    </Login>
  </div>
</template>
<script>

import Login from '../components/Login.vue'
export default {

  // name: 'LoginPage',
  components: {
    Login
  }
}

</script>
