<template>
  <div id="app">
    <img id="logo" src="./assets/dota2_logo.png">
    <Landing msg="Welcome to Dotes"/>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style>
*{
  background-color: rgb(63, 63, 63);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 0px;
}
#logo {
  height: 200px;
  width: 400px;
}
</style>
