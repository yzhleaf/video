<template>
    <div class="pop">
            <div>男</div>
            <div id="aa"><input v-model="sex" type="radio" name="sex" value="男"></div>
            <div>女</div>
            <div id="aa"><input v-model="sex" type="radio" name="sex" value="女"></div>
            <button @click="choiceSex">确认</button>
        </div>
</template>
<script>
export default {
  data () {
    return {
      sex: ''
    }
  },
  methods: {
    choiceSex () {
      this.$emit('setsex', this.sex)
      this.$emit('edittext')
    }
  }
}
</script>
<style>
        .pop{
            position: absolute;
            background-color: beige;
            width: 80vw;
            height: 40vw;
            top: 50%;
            left: 50%;
            margin-top: -20vw;
            margin-left: -40vw;
            display: flex;
            border-radius: 3vw;
            flex-wrap: wrap;
        }
        .pop div{
            width: 20vw;
            text-align: center;
            margin-top: 5vw;
            font-size: 6vw;;
        }
        .pop input{
            width: 6vw;
            height: 4vw;
            margin-left: -15vw;
        }
        .pop button{
            width: 20vw;
            height: 10vw;
            font-size: 6vw;
            border: none;
            margin-left: 50vw;
        }
    </style>
