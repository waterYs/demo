<template>
  <div id="bar">
    <div class="bar">
      <div id="bar-chart" class="bar1"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .bar{
    position: relative;
    padding: 2*10px;
    height: auto;
    .bar1{
      width: 100%;
      height:23*10px;
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  const echarts=require('echarts');
  export default {
    props:['barOption'],
    data(){
      return{

      }
    },
    mounted(){
      this.echartsVoid();
    },
    methods:{
      echartsVoid(){
        var myChart = echarts.init(document.getElementById('bar-chart'));
        myChart.setOption(this.barOption);
      }
    }
  }
</script>
