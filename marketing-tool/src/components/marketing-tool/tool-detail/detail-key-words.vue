<template>
  <div class="key-charts">
    <h3 class="title">Key Words</h3>
    <div class="key-list" :class="{'default':defaultFlag}">
      <div class="key" :class="[key_index]" @mouseleave='out'>
        <ul class="level1">
          <li v-for="(item,index) in keyChartOption"
              :class="{'active':selectIndex==index,
              'li1':li1&&index==0,
              'li2':li2&&index==1,
              'li3':li3&&index==2,
              'li4':li4&&index==3,
              'li5':li5&&index==4
              }"
              @mouseover="over(index)">
            <span v-if="item.name=='Performance'" style="font-size: 18px;">{{item.name}}</span>
            <span v-if="item.name!=='Performance'">{{item.name}}</span>
            <ul class="level2">
              <li v-for="(item1,index1) in item.subName">
                <span>{{item1}}</span>
                <div class="line"></div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .key-charts{
    height:100%;
    width: auto;
    position: relative;
    overflow: hidden;
    .boxSizing;
    .title{
      font-size: 2.4*10px;
      color: #52ADCF;
      margin-bottom: 5.4*10px;
    }
    .key-charts1{
      width:100%;
      height:100%;
    }
  }
  .key-list{
    position: relative;
    width: 100%;
    height: 100%;
    ul.level1 {
      position: relative;
      width: 100%;
      height: 100%;
      &>li{
        position: absolute;
        .borderRadius;
        background-color:#076D76;
        width: 120px;
        height:120px;
        left:300px;
        top:60px;
        .transitionAll;
        &.active{
          .transitionAll;
          &>ul.level2{
            display:block;
            &>li{
              .transform(1.6,0,0,0);
              span{
                display: flex;
              }
              &>div.line{
                width:5px;
                height:13px;
                top:75px;
              }
              &:nth-child(1){
                top: -115px;
              }
              &:nth-child(2){
                left:-50px;
                top: 130px;
                &>div.line{
                  .transform(1,35px,-73px,215deg);
                }
              }
              &:nth-child(3){
                top: 130px;
                left: 100px;
                &>div.line{
                  .transform(1,-30px,-73px,150deg);
                }
              }
              &:nth-child(4){
                left:-110px;
                &>div.line{
                  .transform(1,45px,-35px,115deg);
                }
              }
              &:nth-child(5){
                &>div.line{
                  .transform(1,35px,-73px,215deg);
                }
              }
            }
          }
        }
        span{
          color:#fff;
          font-size: 26px;
          position:absolute;
          width:100%;
          height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height:25px;
          text-align: center;
        }
      }
    }
    ul.level2 {
      position: relative;
      display: none;
      & > li {
        position: absolute;
        .borderRadius;
        background-color: #B57C2E;
        width:75px;
        height:75px;
        .transform(0.35,0,0,0);
        &>div.line{
          position:absolute;
          width: 10px;
          height:75px;
          left: 33px;
          top: 70px;
          background-color: gray;
        }
        &:nth-child(1) {
          left:25px;
          top:-75px;
        }
        &:nth-child(2) {
          left:-50px;
          top:90px;
          &>div.line{
            .transform(1,50px,-125px,215deg);
          }
        }
        &:nth-child(3) {
          left:90px;
          top:90px;
          &>div.line{
            .transform(1,-50px,-125px,-35deg);
          }
        }
        &:nth-child(4) {
          left:-65px;
          top:-20px;
          &>div.line{
            .transform(1,60px,-35px,115deg);
          }
        }
        &:nth-child(5) {
          left:150px;
          top:-45px;
          &>div.line{
            .transform(1,60px,-220px,215deg);
          }
        }
        &>span{
          display: flex;
          font-size: 14px;
          z-index: 1000;
          line-height: 16px;
        }
      }
    }
    &.default{
      ul.level2{
        display: flex;
        li{
          span{
            display: none;
          }
        }
      }
    }
    .key{
      width: 100%;
      height: 100%;
      position: relative;
    }
    .key1{
      ul.level2{
        li{
          span{
            display:flex;
          }
        }
      }
    }
    .key2{
      &>ul.level1{
        &>li{
          &:nth-child(1){
            .transform(0.9,-200px,0,0);
          }
          &:nth-child(2){
            .transform(0.9,200px,0,0);
          }
          &.active {
            &:nth-child(1){
              .transform(1,-100px,0,0);
            }
            &:nth-child(2){
              .transform(1,150px,0,0);
            }
          }
        }
      }
    }
    .key3{
      &>ul.level1{
        &>li{
          .transform(0.9,0,0,0);
          &:nth-child(1){
            left:100px;
          }
          &:nth-child(2){
            .transform(0.9,0,0,30deg);
            span{
              .transform(1,0,0,-30deg);
            }
          }
          &:nth-child(3){
            left: 500px;
            top:90px;
          }
          &.active{
            .transform(1,0,0,0);
            &:nth-child(1){
              left: 150px;
              &+li{
                &:nth-child(2){
                  left:350px;
                }
              }
            }
            &:nth-child(2){
              .transform(1,50px,0,30deg);
            }
            &:nth-child(3){
              left:450px;
              top:75px;
            }
          }
          &.li2{
            left: 210px;
            top: 135px;
          }
        }
      }
    }
    .key4{
        &>ul.level1{
          &>li{
            .transform(0.9,0,0,0);
            &:nth-child(1){
              left:50px;
            }
            &:nth-child(2){
              top:-50px;
              .transform(0.9,0,0,30deg);
              span{
                .transform(1,0,0,-30deg);
              }
            }
            &:nth-child(3){
              left: 300px;
              top:150px;
              .transform(0.9,0,0,30deg);
              span{
                .transform(1,0,0,-30deg);
              }
            }
            &:nth-child(4){
              left: 500px;
              top:90px;
            }
            &.active{
              .transform(1,0,0,0);
              &:nth-child(1){
                left: 150px;
                &+li{
                  left:400px;
                  &+li{
                    left: 410px;
                    top:75px;
                    &+li{
                      top: 165px;
                    }
                  }
                }
              }
              &:nth-child(2){
                left: 290px;
                top:60px;
                .transform(1,0,0,30deg);
                &+li{
                  left: 450px;
                  top:150px;
                  &+li{
                    left: 500px;
                    top:0;
                  }
                }
              }
              &:nth-child(3){
                .transform(1,0,-100px,30deg);
              }
              &:nth-child(4){
                .transform(1,-50px,-15px,0);
              }
            }
            &.li2{
              .transform(0.9,-150px,10px,30deg);
            }
            &.li3{
              .transform(0.9,-100px,-50px,30deg);
            }
          }
        }
    }
    .key5{
        &>ul.level1 {
          & > li {
            .transform(0.9, 0, 0, 0);
            &:nth-child(1) {
              .transform(0.9, -300px,-50px, 0);
            }
            &:nth-child(2) {
              .transform(0.9,0,-110px, 60deg);
               span {
                .transform(1, 0, 0, -60deg);
              }
            }
            &:nth-child(3) {
              .transform(0.9, 250px, -50px, 30deg);
               span {
                .transform(1, 0, 0, -30deg);
              }
            }
            &:nth-child(4) {
              .transform(0.9, -150px, 100px,0deg);
            }
            &:nth-child(5) {
              .transform(0.9,100px,110px,90deg);
              span {
                .transform(1, 0, 0, -90deg);
              }
            }
            &.li2 {
              .transform(0.9, -150px,-70px,60deg);
            }
            &.li3 {
              .transform(0.9, -210px,55px, 30deg);
            }
            &.li4 {
              .transform(0.9, -70px,40px, 0deg);
            }
            &.active {
              .transform(1, 0, 0, 0);
              &:nth-child(1) {
                .transform(1,-150px,15px,0);
                & + li {
                  .transform(0.9,50px,-50px,60deg);
                  & + li {
                    .transform(0.9,200px,-50px,30deg);
                    &+li{
                      .transform(0.9,0,90px,0deg);
                      &+li{
                        .transform(0.9,150px,90px,90deg);
                      }
                    }
                  }
                }
              }
              &:nth-child(2) {
                .transform(1,0,0, 60deg);
                & + li {
                  .transform(0.9,300px,0,30deg);
                  & + li {
                    .transform(0.9,-300px,100px,0deg);
                    &+li{
                      .transform(0.9,200px,110px,90deg);
                    }
                  }
                }
              }
              &:nth-child(3) {
                .transform(1,50px,50px, 30deg);
                & + li {
                  .transform(0.9,-15px,-130px,0);
                  & + li {
                    .transform(0.9,250px,50px,90deg);
                  }
                }
              }
              &:nth-child(4) {
                .transform(1, 130px, 0, 0);
                &+li{
                  .transform(0.9,300px,-20px,90deg);
                }
              }
              &:nth-child(5) {
                .transform(1,140px,30px,90deg);
              }
            }
          }
        }
    }
  }
</style>
<script>
  export default {
    props:['keyChartOption'],
    data(){
      return{
        defaultFlag:true,
        activeFlag:false,
        key_index:'key'+this.keyChartOption.length,
        selectIndex:100,
        li1:false,
        li2:false,
        li3:false,
        li4:false,
        li5:false
      }
    },
    mounted(){

    },
    updated(){
      this.setKeyIndex();
    },
    methods:{
      over(index){
        this.defaultFlag=false;
        this.activeFlag=true;
        this.selectIndex=index;
        this.setLi();
      },
      out(){
        this.defaultFlag=true;
        this.activeFlag=false;
        this.selectIndex=100;
        this.clearSetLi();
      },
      setLi(){
        let len=this.keyChartOption.length;
        if(len==3){
          if(this.selectIndex==2){
            this.li2=true
          }else{
            this.li2=false
          }
        }
        if(len==4){
          if(this.selectIndex==2){
            this.li2=true
          }else if(this.selectIndex==3){
            this.li2=true;
            this.li3=true;
          }else{
            this.li2=false;
            this.li3=false;
          }
        }
        if(len==5){
          if(this.selectIndex==2){
            this.li2=true;
          }else if(this.selectIndex==3){
            this.li2=true;
            this.li3=true;
            this.li4=false;
          }else if(this.selectIndex==4){
            this.li2=true;
            this.li3=true;
            this.li4=true;
          }else{
            this.li2=false;
            this.li3=false;
            this.li4=false;
          }
        }
      },
      clearSetLi(){
        this.li1=false;
        this.li2=false;
        this.li3=false;
        this.li4=false;
        this.li5=false;
      },
      setKeyIndex(){
        this.key_index='key'+this.keyChartOption.length;
      }
    }
  }
</script>
