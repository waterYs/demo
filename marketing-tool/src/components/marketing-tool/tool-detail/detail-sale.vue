<template>
  <div id="sale">
    <div class="sale">
      <h3 class="title">{{title}}</h3>
      <div class="arrow" :style="{'background-image':'url('+saleOpt.icon+')'}" v-if="saleOpt.icon!='--'"></div>
      <div class="arrow" v-if='saleOpt.icon=="--"'></div>
      <div class="num">
        <span class="num-detail">{{saleOpt.value.split('%')[0]}}</span>
        <span class="num-symbol2">%</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .sale{
    position: relative;
    background: #002941;
    padding: 2*10px;
    h3.title{
      font-size: 2.4*10px;
      color: #52ADCF;
    }
    .arrow{
      position: absolute;
      width: 2.7*10px;
      height: 3.2*10px;
      top: 2.4*10px;
      right: 2.4*10px;
      /*background-color: red;*/
    }
    .num{
      position: relative;
      font-size: 3.2*10px;
      color: #fff;
      /*line-height: 12.6*10px;*/
      .num-detail{
        font-size:9*10px;
      }
      .num-symbol2{
        margin-left: 0.5*10px;
      }
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  export default {
    props:['title','saleOpt'],
  }
</script>
