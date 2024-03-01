<template>
  <div>CompositionTest</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  // 速さ順左から setup->created->mounted
  setup() {
    console.log('setup')
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
