<template>

    <div>
        <navigation></navigation>
        <grids :videoData=videoData></grids>
    </div>
</template>
<script>
import axios from 'axios'
import Navigation from '../components/Navigation.vue'
import Grids from '../components/Grids.vue'
export default {
  components: {
    Grids,
    Navigation
  },
  data () {
    return {
      videoData: ''
    }
  },
  created () {
    // axios.defaults.baseURL = '/api'
    axios.get('/data.json')
      .then(res => {
        this.videoData = res.data.data
        console.log(this.videoData)
      })
  }
}
</script>
<style>
</style>
