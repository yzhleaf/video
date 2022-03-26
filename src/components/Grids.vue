<template>
<div>
    <div class="item-cell" v-for="count in 3" :key="count">
        <grid :vd=videoData[count-1]></grid>
        <grid :vd=videoData[count+2]></grid>
    </div>
</div>
</template>
<script>
import Grid from '../components/Grid.vue'
export default {
  components: {
    Grid
  },
  props: ['videoData']
}
</script>
<style>
.item-cell{
    width: 100vw;
    display: flex;
    flex-wrap: wrap;

}
</style>
