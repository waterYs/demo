<template>
  <div class="nav">
    <nav>
      <li v-for="(item,index) in navArr" v-bind:class="{active:index==selectIndex}" @click='btnNav(index)'>{{item}}</li>
      <search class="search" @serchText="serchText"></search>
      <i class="back-icon" @click="back"></i>
    </nav>
  </div>
</template>
<style lang="less" scoped>
  @import "css/base.less";
  nav {
    width: 100%;
    height: 8*10px;
    opacity: 0.8;
    background: rgba(0, 41, 65, 0.80);
    display: flex;
    justify-content: center;
    position: relative;
    .boxSizing;
    border-bottom: 1px solid #52ADCF;
    li {
      font-size: 2.4*10px;
      height: 8*10px;
      line-height: 8*10px;
      min-width: 32*10px;
      padding: 0 2*10px;
      color: #52ADCF;
      text-align: center;
      cursor: pointer;
      list-style: none;
      .boxSizing;
      &.active {
        border-bottom: .4*10px solid #52ADCF;
      }
    }
    .search {
      position: absolute;
      left: 9*10px;
      top: 1*10px;
      .boxSizing;
      overflow: hidden;
      width: 60*10px;
      height: 5.6*10px;
      border:3px solid #52ADCF;
      border-radius: 4px;
      margin-left: 60px;
    }
    .back-icon{
      width: 40px;
      height: 40px;
      position:absolute;
      left: 90px;
      top: 15px;
      background-image: url("./img/back.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
</style>
<script>

  import htmlFontSize from './js/html-font-size'

  import search from './common/search'
  import axios from 'axios'
  export default {
    data(){
      return{
        selectIndex:0,
        navArr:['Recommended Plan','Competitor Plan'],
        text:'',
        ulPos:false,
        ulPos2:false,
      }
    },
    components:{
      search
    },
    watch:{
      text:function (v1,v2) {
        this.defauleNav(this.selectIndex);
      }
    },
    mounted(){
      this.defauleNav(this.selectIndex);
    },
    methods:{
      defauleNav(index){
        this.selectIndex=index;
        let arr=[];
        arr[0]=this.navArr[index];
        arr[1]=this.text;
        this.$emit('getNav',arr);
      },
      serchText(val){
        this.text=val;
        let str=val;
        str=str.toLowerCase();
        if(str=='super brand mall'||str=='super'||str=='mall'){
          this.selectIndex=0
        }else if(str=='global'||
          str=='global harbor'||
          str=='iapm'||
          str=='jingan'||
          str=='jingan kerry'||
          str=='kerry'||
          str=='k11'||
          str=='raffles'||
          str=='raffles city changning'||
          str=='raffles city'||
          str=='hkri'||
          str=='hkri taikoo hui'||
          str=='hkri taikoo'){
          this.selectIndex=1
        }
        this.defauleNav(this.selectIndex);
      },
      btnNav(index){
        this.defauleNav(index);
      },
      back(){
        this.$emit('getUlPos',this.ulPos);
      }
    }
  }
</script>
