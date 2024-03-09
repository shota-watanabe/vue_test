<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ScriptTest />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ScriptTest from './components/ScriptSetupTest'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ScriptTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
