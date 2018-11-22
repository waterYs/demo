<template>
  <div id="bar">
    <div class="bar">
      <div id="bar-chart1" class="bar1"></div>
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
      height:26*10px;
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  const echarts=require('echarts');
  export default {
    props:['barOption2'],
    data(){
      return{

      }
    },
    mounted(){
      this.echartsVoid();
    },
    methods:{
      echartsVoid(){
        var myChart = echarts.init(document.getElementById('bar-chart1'));
        myChart.setOption(this.barOption2);
      }
    }
  }
</script>
