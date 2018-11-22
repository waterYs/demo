<template>
  <div id="app">
    <tool-home></tool-home>
    <router-view/>
  </div>
</template>

<script>
  import toolHome from './components/marketing-tool/tool-home'
export default {
  name: 'App',
  components:{
    toolHome
  }
}
</script>

<style>

</style>
