<template>
  <div id="brands">
    <div class="brands">
      <h3 class="title">
        {{title}}
      </h3>
      <div class="bransList">
        <div class="bransList1">
          <ul ref='ul' :style="{top}">
            <li v-for="(item,index) in bransList" @click="liClick(index)" :class="{active:index==clickIndex}">
              <i class="icon" :style="{backgroundImage:'url(' + item.icon + ')'}"></i>
              <span class="title" v-if="item.name!=='Personal care\r\n& Service'">{{item.name}}</span>
              <span class="title" v-if="item.name=='Personal care\r\n& Service'" style="line-height:30px;display:inline-block;font-size:16px;">Personal care <br/>& Service</span>
              <div class="icon1" v-if="index==clickIndex"></div>
            </li>
          </ul>
        </div>
        <div class="btn">
          <a class="btnUp" @click="up" :class="{first:upIndex==0}"></a>
          <a class="btnDown" @click="down" :class="{end:downIndex==100}"></a>
        </div>
      </div>

      <div class="bransDetail">
        <ul ref="ul1">
          <li v-for="(item,index1) in bransDetailList" v-if='index1<=9'>
            <span class="num">{{index1+1}}</span>
            <span class="title">{{item.name}}</span>
            <span class="tag" v-if="tags[index1]!==0">{{tags[index1]}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .brands{
    height:100%;
    &:after{
      .clearFloat;
    }
    .title{
      font-size: 2.4*10px;
      color: #52ADCF;
      /*margin-bottom: 5.4*10px;*/
    }
    position: relative;
    .bransList1{
      position: relative;
      height: 38*10px;
      overflow-y: hidden;
      overflow-x: hidden;
      cursor: pointer;
      >ul{
        /*overflow-y:hidden;*/
        /*height: 360px;*/
      }
    }
    .btn{
      position: absolute;
      left: 50%;
      cursor: pointer;
      a{
        width: 8*10px;
        height: 1.8*10px;
        position: absolute;
        /*background: red;*/
        left: 50%;
        margin-left: -4*10px;
      }
      .btnUp{
        top: -39*10px;
        background-image:url('../img/arrow_up_light.svg');
        &.first{
          background-image:url('../img/arrow_up_disabled.svg');
        }
      }
      .btnDown{
        bottom:-1*10px;
        background-image:url('../img/arrow_down_light.svg');
        &.end{
          background-image:url('../img/arrow_down_light_disabled.svg');
        }
      }
    }
    .bransList{
      width: 21*10px;
      float: left;
      position: relative;
      overflow: hidden;
      height: 45*10px;
      padding: 5*10px 0;
      .boxSizing;
      ul{
        position:absolute;

      }
      li{
        width: 20*10px;
        height: 7*10px;
        line-height: 7*10px;
        margin-top:2*10px;
        position: relative;
        background: #0B142C;
        border: 2px solid #8CDFFF;
        color:#8CDFFF;
        opacity:0.6;
        .boxSizing;
        &:nth-child(1),&:nth-child(4n+1){

        }
        &.active{
          border: 2px solid #8CDFFF;
          box-shadow: inset 0 1px 23px 1px rgba(8,101,142,0.48);
          opacity: 1;
          /*background: #8CDFFF;*/
          .icon1{
            /*border-width: 2px;*/
            /*border-color:#8CDFFF;*/
            /*width: 16px;*/
            /*height: 16px;*/
            /*background: #000;*/
            /*margin-top: -8px;*/
            /*-webkit-transform: rotate(-45deg);*/
            /*transform: rotate(-45deg);*/
            /*display: inline-block;*/
            position: absolute;
          }
        }

        i.icon{
          width: 4*10px;
          height: 4*10px;
          position: absolute;
          top: 1.6*10px;
          left: 1.6*10px;
          /*background-color:red;*/
          /*background: url(../img/food.svg);*/

        }
        span.title{
          font-size:2*10px;
          color: #8CDFFF;
          margin-left:7.2*10px;
        }
      }

    }
    .bransDetail{
      float: left;
      background: #0B142C;
      border: 2px solid #8CDFFF;
      box-shadow: inset 0 1px 23px 1px rgba(8,101,142,0.48);
      width: 86.90*10px;
      height:34*10px;
      margin:7*10px 0 1*10px 2*10px;
      padding: 0 4*10px;
      .boxSizing;
      .boxSizing;
      ul{
        position: relative;
        &:after{
          .clearFloat;
        }
      }
      li{
        width: 50%;
        /*float: left;*/
        height: 6.5*10px;
        line-height:6.5*10px;
        &:after{
          .clearFloat;
        }
        &:nth-child(1){
          span{
            &.num,&.title{
              color:#D34E31;
            }
          }
        }
        &:nth-child(2){
          span{
            &.num,&.title{
              color:#DEB736;
            }
          }
        }
        &:nth-child(3){
          span{
            &.num,&.title{
              color:#15D3A8;
            }
          }
        }
        &:nth-child(n+6){
          position: absolute;
          top:0;
          left: 50%;
          margin-bottom: 6.5*10px;
        }
        &:nth-child(6){
          top:0;
        }
        &:nth-child(7){
          top:6.5*10px;
        }
        &:nth-child(8){
          top:6.5*2*10px;
        }
        &:nth-child(9){
          top:6.5*3*10px;
        }
        &:nth-child(10){
          top:6.5*4*10px;
        }
        span{
          float: left;
          font-size:2.4*10px;
          margin-right: 2*10px;
          &.title{
            max-width: 60%;
            .ellipse;
          }
          &.title,&.num{
            color:#0F8590;
          }
          &.tag{
            width: 4.8*10px;
            height: 2.4*10px;
            line-height:2.4*10px;
            text-align: center;
            border-radius: 10*10px;
            font-size: 1.6*10px;
            color:#fff;
            background: #076D76;
            position: relative;
            top: 2.3*10px;
          }
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
    props:['bransList'],
    data(){
      return{
        title:'Brands',
        bransDetailList:[],
        indexUl:0,
        tags:[],
        clickIndex:0,
        upIndex:0,
        downIndex:0,
        selectIndex:0
      }
    },
    mounted(){
      this.liPos(this.clickIndex);
    },
    updated(){
      this.liPos(this.clickIndex);
    },
    computed:{
        top(){
          return -this.selectIndex*90+'px';
        }
    },
    watch:{
      bransList(v1,v2){
        this.bransList=v1;
        this.indexUl=0;
        this.upIndex=100;
        this.downIndex=0;
        this.clickIndex=0;
      }
    },
    methods:{
      defPos(){

      },
      liPos(index){
        let bransList1=this.bransList;
        this.bransDetailList=bransList1[index].list;
        let len=this.bransDetailList.length;
        for(let j=0;j<len;j++){
          let tag=bransList1[index]['list'][j]['tag']
          if(tag=='own'){
            this.tags[j]=tag;
          }else{
            this.tags[j]=0;
          }
        }
      },
      up(){
        let len=this.bransList.length;
        this.upIndex=len;
        if(len<=1){

        }
        this.indexUl=this.clickIndex;
        this.indexUl--;
        if(this.indexUl>3){
          this.selectIndex--;
        }else if(this.indexUl<=3){
          this.selectIndex=0;
        }
        if(this.indexUl<=0){
          this.indexUl=0;
          this.upIndex=0;
        }
        this.clickIndex=this.indexUl;
        this.liPos(this.clickIndex);
      },
      down(){
        let len=Math.ceil(this.bransList.length);
        this.downIndex=0;
        this.indexUl=this.clickIndex;
        this.indexUl++;
        if(this.indexUl<=3){
          this.selectIndex=0;
        }else if(this.indexUl>3&&this.indexUl<=len-1){
          this.selectIndex++;
        }
        if(this.indexUl>=len-1){
          this.indexUl=len-1;
          this.downIndex=100;
        }

        this.clickIndex=this.indexUl;
        this.liPos(this.clickIndex);
      },
      liClick(index){
        this.bransDetailList=this.bransList[index]['list'];
        this.clickIndex=index;
        this.liPos(index);
      }
    }
  }
</script>
