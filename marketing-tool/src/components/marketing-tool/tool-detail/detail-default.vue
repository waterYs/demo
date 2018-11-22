<template>
  <div class="detail-defaule">
    <section class="detail-defaule1">
      <ul>
        <li v-for="(val, key, index) in defDeal">
          <span class="tag" :style="{backgroundImage:'url('+tags[index]+')'}" v-if="index>0"></span>
          <h3 class="title" v-if="index>0">{{key}}</h3>
          <p class="desc">{{val}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .detail-defaule1{
    ul{
      height: auto;
      li{
        padding:20px 3.6*10px;
        .boxSizing;
        span.tag{
          width: 4*10px;
          height: 4*10px;
          display:block;
          /*background-color:red;*/
        }
        h3.title{
          font-size: 2*10px;
          color: #52ADCF;
          margin-top: 0.7*10px;
        }
        p.desc{
          font-size:2.4*10px;
          margin-top: 1*10px;
          color: #FFFFFF;
          line-height: 3.2*10px;
        }
      }
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  import axios from 'axios'
  export default {
    props:['defDeal'],
    data(){
      return{
        tags:[
          '',require('../img/themename.svg'),require('../img/time.svg'),require('../img/location.svg'),require('../img/targetcustomer.svg')
        ]
      }
    }
  }
</script>
