<template>
    <div class="route">
      <div><router-link to="/">首页</router-link></div>
      <div><router-link to="/AnimationPage">动画</router-link></div>
      <div><router-link to="/Pop">游戏</router-link></div>
      <div><router-link to="/MusicPage">音乐</router-link></div>
      <div><router-link to="/EditUserPage">用户</router-link></div>
    </div>
</template>
<script>

</script>
<style>
.route{
  width: 100vw;
  overflow:scroll;
  display: flex;
  scrollbar-width: none;
}
.route a{
  text-align: center;
  color: black;
  text-decoration: none;
  width: 25vw;
  display: block;
  font-size: 6vw;
}
</style>
