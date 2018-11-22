<template>
  <div class="tool-list">
    <div :class="{'jiao':ulPos}" v-if="ulPos"></div>
    <ul id="ul" class="list-ul" ref="ul" :class="{ulPos:ulPos,scrollPos:scrollPos}">
      <li class="list-li" v-for="(item,index) in listArr" @click.stop="listArr[index]['title-desc']!==''?picClick($event,index):''" :class="{active:index==clickIndex}">
        <div class="list-img borderImg" :class="{'border-active':ulPos&&index==clickIndex}">
          <img :src='item.img'/>
          <borderImg :borderImgObg="{'left-top':true,'border-color':true}" v-if="!(ulPos&&index==clickIndex)"></borderImg>
          <borderImg :borderImgObg="{'left-bottom':true,'border-color':true}" v-if="!(ulPos&&index==clickIndex)"></borderImg>
          <borderImg :borderImgObg="{'right-top':true,'border-color':true}" v-if="!(ulPos&&index==clickIndex)"></borderImg>
          <borderImg :borderImgObg="{'right-bottom':true,'border-color':true}" v-if="!(ulPos&&index==clickIndex)"></borderImg>
        </div>
        <p class="img-title">{{item.title}}</p>
      </li>
      <li class="list-li" style="height:500px;" v-if='ulPos'></li>
    </ul>
  </div>
</template>
<style lang='less' scoped>
  @import "css/base";
  .tool-list{
    width: 100%;
    background: #1D283F;
    position:relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    overflow-y:hidden;
    .jiao{
      position: fixed;
      height: 0px;
      width: 0px;
      border-top:40px solid transparent;
      border-right:40px solid #52ADCF;
      border-bottom:40px solid transparent;
      top:27%;
      left:8.5%;
    }
    .list-ul{
      height:100%;
      diplay:flex;
      padding:4*10px 0 0;
      position: relative;
      margin-top: 0;
      overflow-y: auto;
      .boxSizing;
      &.ulPos{
        width: 10%;
        overflow-y: auto;
        .list-li{
          width: 100%;
          height: 587px;
          &.active{
            opacity: 1;
          }
          opacity:0.3;
          .list-img{
            height: 466px;
          }
        }
      }
      &.scrollPos{
        /*margin-top: 0;*/
      }
      /*margin-top: 0;*/
      .list-li{
        width: 16.60%;
        padding:0 8.5*10px 4*10px;
        position: relative;
        float: left;
        &:after{
          .clearFloat;
        }
        &.pos{
          position:absolute;
        }
        .boxSizing;
        .list-img{
          width:100%;
          height:87*10px;
          border:0.2*10px solid #fff;
          /*opacity: 0.2;*/
          padding:0.8*10px;
          position: relative;
          .boxSizing;
          &.border-active{
            border: 4px solid #52ADCF;
          }
          &>img{
            width: 100%;
            height: 100%;
          }
          &.borderImg{
            .borderImg;
          }
        }
        .img-title{
          font-size: 3.2*10px;
          color: #687493;
          letter-spacing: 0;
          text-align: center;
          line-height:4*10px;
          text-align: center;
          width: 100%;
          padding: 0 1.5*10px;
          /*position: absolute;*/
          margin-top: 3*10px;
          .boxSizing;
          .ellipse;
        }
      }
    }
  }
</style>
<script>
  // import { mapMutations } from 'vuex'
  import htmlFontSize from './js/html-font-size'
  import borderImg from './common/border-img'
  export default {
    props:['listArr','ulPos','scrollPos','active','selectIndex'],
    components:{
      borderImg,
    },
    data(){
      return{
        isShow:false,
        flag:false,
        clickIndex:0,
        num1:0,
      }
    },
    watch:{
      listArr(v1,v2){
        return v1;
      },
      selectIndex(v1,v2){
        return this.defPos();
      }
    },
    updated(){
      this.defPos();
    },
    methods:{
      defPos(){
        let ul=this.$refs.ul;
        let h=587;
        let _index=this.selectIndex;
        if(this.ulPos==false){
          this.clickIndex=_index;
          ul.scrollTop=h*_index;
        }
        if(this.scrollPos==true){
          this.clickIndex=_index;
          ul.scrollTop=h*_index;
        }
      },
      picClick(e,index){
        let sPos=this.scrollPos;
        if(sPos==true){
          sPos=false;
        }
        this.$emit('getScrollPos',sPos);
        let titleDesc=this.listArr[index]['title-desc'];
        this.$emit('listTitleDesc',titleDesc);
        let num2=index;
        let ul=document.getElementById('ul');
        let h=587;
        if(titleDesc!==''){
          if(this.num1==0){
            this.flag=!this.ulPos;
          }else{
            if(this.clickIndex==num2){
              // this.flag=!this.ulPos;
            }else{
              if(this.ulPos==false){
                this.flag=!this.ulPos;
              }else{
                this.flag=this.ulPos;
              }
            }
          }
          this.$emit('getUlPos1',this.flag);
          this.$emit('show',this.flag);
          if(this.flag==false){
            ul.scrollTop=10;
          }else {
            setTimeout(function () {
              ul.scrollTop=h*index;
            },10)
          }
          this.num1=1;
          this.clickIndex=index;
          let isSelected=e.currentTarget.getElementsByClassName('border-active').length;
          this.$emit('isSelected',isSelected);
        }
      },
    },
  }
</script>
