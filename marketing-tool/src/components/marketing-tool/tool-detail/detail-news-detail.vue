<template>
  <div id="news-detail">
    <a :href="newsLink"></a>
  </div>
</template>
<style lang="less">
  @import "../css/base";
  #news-detail{
    iframe{
      width: 100%;
    }
  }
</style>
<script>
  export default {
    props:['newsLink']
  }
</script>
