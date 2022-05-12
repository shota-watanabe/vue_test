<template>
  <div>
    <button @click="addCount">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    addCount(){
      // mutationsの場合はcommit
      this.$store.commit('increment')
    }
  }
}
</script>