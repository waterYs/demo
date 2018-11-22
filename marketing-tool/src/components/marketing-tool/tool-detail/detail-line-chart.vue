<template>
  <div id="detail-line">
    <div class="detail-line">
      <h3 class="title">{{lineChartOption.title}}</h3>
      <div id="line-chart" class="detail-line1"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .detail-line{
    .title{
      font-size: 2.4*10px;
      color: #52ADCF;
      margin-bottom: 5.4*10px;
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  import {marketingToolObj} from '../data/marketingTool'
  const echarts=require('echarts');
  export default {
    data(){
      return{
        lineChartOption:marketingToolObj.recom.lineChartOption
      }
    },
    mounted(){
      // this.echartsKey();
    },
    methods:{
      echartsKey(){
        var myChart = echarts.init(document.getElementById('line-chart'));
        myChart.setOption(this.lineChartOption);
      }
    }
  }
</script>
