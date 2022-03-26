<template>
  <div class="contain">
    <div>
      <p>{{topTips}}</p>
      <router-link to="/RegisterPage">{{register}}</router-link>
    </div>
    <slot></slot>
    <input type="text" :placeholder=accountTips>
    <input type="password" :placeholder=passwordTips>
    <div class="btn" @click="clicks">{{loginTips}}</div>
  </div>
</template>
<script>

export default {
  props: ['topTips',
    'register',
    'accountTips',
    'passwordTips',
    'loginTips']

}

</script>
<style>
  .contain a{
    position: absolute;
    right: 4vw;
    top:4vw;
    font-size: 6vw;
    text-decoration: none;
    color: black;
  }
  .contain p{
    font-size: 6vw;
    color:black;
    line-height: 15vw;
    text-align: center;
  }
  .contain input{
    border-radius: 8px;
    width: 100vw;
    height: 15vw;
    font-size: 1px;
    margin: 2vw auto;
    border:none;
    font-size: 6vw;
    padding-left: 1.333vw;
    display: block;
  }
  .btn{
    width:80vw;
    height: 15vw;
    font-size: 6vw;
    text-align: center;
    line-height: 15vw;
    border-radius: 3vw;
    margin: 0 auto;
    background-color: pink;

  }

</style>
