<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  // 速さ順左から setup->created->mounted
  // setupではthisが使えない
  setup() {
    let name = '大谷'
    let age = 30
    console.log('setup')
    return {
      name, age
    }
  },
  data() {
    return {
      number: 1,
      sports: 'サッカー'
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style>

</style>
