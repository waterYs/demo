<template>
  <div id="kol">
    <div class="kol">
      <h3 class="title">KOL</h3>
      <div class="kol-list">
        <ul>
          <li v-for="(item,index) in kolList">
            <div class="kol-img">
              <img :src='item.picture' alt="" width="100%" v-if="index!=moreIndex">
              <img :src='require("../img/more.png")' style="cursor: pointer;" alt="" width="100%" v-if="index=moreIndex" @click="showKolList">
            </div>
            <p class="img-title">{{item.name}}</p>
            <p class="img-desc">{{item.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
    <popup :popStyle="popStyle" title="Kol" v-show="isShow" @close="close">
      <detailKolList :kolList="kolList"></detailKolList>
    </popup>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .kol{
    .title{
      font-size: 2.4*10px;
      color:#52ADCF;
      margin-bottom: 5.4*10px;
    }
    .kol-list{
      ul{
        height: auto;
        &:after{
          .clearFloat;
        }
      }
      li{
        width: 30%;
        /*padding:4.6*10px 1*10px;*/
        margin-left: 5%;
        &:nth-child(1),&:nth-child(3n+1){
          margin-left: 0;
        }
        margin-bottom: 5.6*10px;
        float: left;
        .boxSizing;
        .kol-img{
          width:12*10px;
          height: 12*10px;
          border:5px solid #033A4E;
          padding: 0.6*10px;
          /*background-color: red;*/
          overflow: hidden;
          .borderRadius;
          //.boxSizing;
          >img{
            width:100%;
            height:100%;
            .borderRadius;
            overflow: hidden;
          }
        }
        p{
          width: 100%;
          &.img-title{
            font-size: 2.4*10px;
            color: #FFFFFF;
            /*letter-spacing: -1.7px;*/
            text-align: center;
            line-height: 2*10px;
            margin-top: 0.8*10px;
            height:2*10px;
            .ellipse;
          }
          &.img-desc{
            font-size: 1.8*10px;
            color: #A6B5CD;
            text-align: center;
            line-height: 2.4*10px;
            height:2.4*10px;
            .ellipse;
          }
        }
      }
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  import detailKolList from './detail-kol-list'
  import popup from '../common/popup';
  export default {
    props:['kolList','moreIndex'],
    data(){
      return{
        isShow:false,
        popStyle: { width: "1000px", height: "auto",margin:'0 auto',backgroundColor:'transparent',boxShadow:'0px 0px 5px #888',border:'2px solid #8CDFFF'}
      }
    },
    components:{
      detailKolList,
      popup
    },
    methods:{
      showKolList(){
        this.isShow=true;
      },
      close(){
        this.isShow=false;
      }
    }
  }
</script>
