<template>
    <div class="edit">
        <div class="text1">性别</div>
        <div class="text2">{{sex}}</div>
    </div>
</template>
<script>
export default {
  props: ['sex']

}
</script>
<style>
.edit{
    margin:4vw 0;
    background-color: white;
}
.edit .text1{
    width: 20vw;
    height: 10vw;
    font-size: 6vw;
    line-height: 10vw;
    text-align: center;
}
.edit .text2{
    width: 80vw;
    line-height: 10vw;
    font-size: 6vw;
}
</style>
