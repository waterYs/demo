<template>
  <div id="title-nav">
    <ul class="title-nav">
      <li v-for="(item,index) in titleNavs" @click="tabNav(index)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  #title-nav{

  }
  .title-nav{
    &:after{
      .clearFloat;
    }
    li{
      border-right:1px solid #52ADCF;
      color:#52ADCF;
      float: left;
      padding:0 1*10px;
      font-size: 2*10px;
      /*cursor: pointer;*/
      &:nth-child(1){
        padding-left: 0;
      }
      &:nth-last-child(1){
        border-right: none;
      }
      &.active{
        font-size:2.4*10px;
      }
      &.cursor{
        cursor: pointer;
      }
    }

  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  export default {
    props:['titleNavs'],
    data(){
      return{
        selectIndex:false
      }
    },
    methods:{
      tabNav(index){
        this.selectIndex=index;
      }
    }
  }
</script>
