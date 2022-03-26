<template>
    <div>
        <video :src=url controls></video>
        <p>{{introduction}}</p>
    </div>
</template>
<style>
video{
    width: 100vw;
}
</style>
<script>
export default {
  data  () {
    return {
      url: '',
      introduction: ''
    }
  },
  created () {
    this.url = this.$route.params.url
    this.introduction = this.$route.params.introduction
    console.log(this.url)
  }
}
</script>
