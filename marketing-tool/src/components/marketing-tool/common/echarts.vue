<template>
  <div id="chart">
    <titleNavs class="chart-title" :titleNavs="titleNavs" v-if="titleNavs"></titleNavs>
    <div class="chart" :class="bgColor" v-if="titleNavs">
      <div :id="id" class="my-chart"></div>
    </div>
    <div class="chart no-title" :class="bgColor" v-if="!titleNavs">
      <div :id="id" class="my-chart"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  #chart{
    /*height: 100%;*/
    .chart-title{
      height: 15%;
    }
  }
  .chart{
    position: relative;
    padding: 2*10px;
    height:85%;
    &.no-title{
      height:100%;
    }
    &.bg-color{
      background: #002941;
    }
    .boxSizing;
    .my-chart{
      width: 100%;
      height:100%;
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  import titleNavs from './title-nav'
  const echarts=require('echarts');
  require('echarts-wordcloud');
  export default {
    // props:['chartH'],
    components:{
      titleNavs
    },
    props:['id','options','titleNavs','bgColor'],
    data(){
      return{
        // titleNavs:this.titleNavs
      }
    },
    watch:{
      options(v1,v2){
        this.options=v1;
        this.echartsVoid();
      }
    },
    mounted(){
      this.echartsVoid();
    },
    updated(){
      this.echartsVoid();
    },
    methods:{
      echartsVoid(){
        var myChart = echarts.init(document.getElementById(this.id));
        myChart.setOption(this.options,true);
      }
    }
  }
</script>
