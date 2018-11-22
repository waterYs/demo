<template>
  <div id="media">
    <div class="media">
      <h3 class="title">
        {{title}}
      </h3>
      <myEchart class="media1" :id="bar1" :options="barOption1"></myEchart>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .media{
    height:100%;
    width: auto;
    position: relative;
    /*padding:5*10px 0;*/
    overflow: hidden;
    .boxSizing;
    .title{
      font-size: 2.4*10px;
      color: #52ADCF;
      margin-bottom: 5.4*10px;
    }
    .media1{
      /*margin-top:5.4*10px;*/
      width:100%;
      height:100%;
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  import {marketingToolObj} from '../data/marketingTool'
  import myEchart from '../common/echarts'
  const echarts=require('echarts');
  export default {
    data(){
      return{
        bar1:'bar1',
        title:'Media Channel',
        barOption1:marketingToolObj.recom.barOption1
      }
    },
    components:{
      myEchart
    }
  }
</script>
