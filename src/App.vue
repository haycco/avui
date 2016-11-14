<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <button type="button" class="btn btn-block btn-default">Default</button>
    <button type="button" class="btn btn-block btn-primary">Primary</button>
    <button type="button" class="btn btn-block btn-success">Success</button>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
