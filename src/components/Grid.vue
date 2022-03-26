<template>
    <div class="cell">
        <router-link :to="{path:'/VideoPage',name:'VideoPage',params:{url:vd.url,introduction:vd.introduction}}">
            <img src="../assets/logo.png" alt="">
            <div class="introduction">{{vd.introduction}}</div>
        </router-link>
    </div>
</template>
<script>
export default {
  props: ['vd']

}
</script>
<style>
.cell{
    margin: 5vw 5vw;
    width:40vw;
    border-radius: 3vw;
}
img{
    width: 100%;
}
.introduction{
    width: 100%;
    background-color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    text-align: center;
}
</style>
