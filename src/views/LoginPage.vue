<template>
  <div class="main">
    <Login
     topTips="登录blibli"
     register='注册'
     accountTips="请输入账号"
     passwordTips="请输入密码"
     loginTips="登录"></Login>
  </div>
</template>
<script>
// import axios from 'axios'
import Login from '../components/Login.vue'
export default {
  components: {
    Login
  }
  // created () {
  //   axios.get('/get_data')
  //     .then(res => {
  //       console.log(res)
  //     })
  // }
}

</script>
<style>

</style>
