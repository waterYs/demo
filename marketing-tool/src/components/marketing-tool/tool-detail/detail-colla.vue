<template>
  <div id="colla">
    <div class="colla">
      <h3 class="title">Collaborative Entity</h3>
      <ul>
        <li v-for="item in collaList">
          <span>{{item.num}}</span>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .colla{
    .title{
      font-size: 2.4*10px;
      color: #52ADCF;
      margin-bottom:5.4*10px;
    }
    li{
      font-size: 3.2*10px;
      color: #FFFFFF;
      margin-bottom:3*10px;
      &:after{
        .clearFloat;
      }
      span{
        float: left;
        &:nth-child(1){
          width:3*10px;
        }
        &:nth-child(2){
          width: 35*10px;
        }
      }
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'

  import search from '../common/search'
  import axios from 'axios'
  export default {
    props:['collaList'],
    data(){
      return{

      }
    }
  }
</script>
