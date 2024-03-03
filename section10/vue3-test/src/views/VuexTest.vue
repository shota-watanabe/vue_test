<template>
  <div>
    <p>VuexTest</p>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const count = computed(() => {
      return store.state.count
    })

    const increment = () => {
      store.commit('increment')
    }

    return { count, increment }
  }
}
</script>

<style>

</style>