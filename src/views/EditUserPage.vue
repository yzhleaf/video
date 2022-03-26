<template>
  <div class="edit_user" >
      <edit @click="edittext" :sex=sex></edit>
  </div>
  <div v-bind:class="{'pa':use}"><Pop @setsex="setsex" @edittext="edittext"></Pop></div>
</template>
<script>
import Edit from '../components/Edit.vue'
import Pop from '../components/Pop.vue'
export default {
  data () {
    return {
      sex: '',
      use: true
    }
  },
  methods: {
    setsex (sex) {
      this.sex = sex
    },
    edittext () {
      this.use = !this.use
    }
  },
  components: {
    Edit,
    Pop
  }
}
</script>
<style>
.edit{
    display: flex;
    flex-wrap: wrap;
}
.pa{
 display:none;
  color:red;
  font-size: 19vw;
}

</style>
