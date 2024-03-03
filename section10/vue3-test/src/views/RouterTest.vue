<template>
  <div>
    <p>RouterTest</p>
    <button @click="goHome">ホームに戻る</button>
    <button @click="checkRoutePath">ルート情報</button>
  </div>
</template>

<script>
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const goHome = () => {
      router.push('/')
    }

    const checkRoutePath = () => {
      console.log(route.path)
    }

    // ナビゲーションガード
    // コンポーネントを移動するタイミングで実行される
    onBeforeRouteLeave((to, from) => {
      console.log(`to: ${to}`)
      console.log(`from: ${from}`)
    })

    return {
      goHome, checkRoutePath
    }
  }
}
</script>

<style>

</style>