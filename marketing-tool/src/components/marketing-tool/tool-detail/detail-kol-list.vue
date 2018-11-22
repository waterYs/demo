<template>
  <div id="kol-list">
    <div class="kol">
      <!--<h3 class="title">KOL</h3>-->
      <div class="kol-list">
        <ul>
          <li v-for="(item,index) in kolList">
            <div class="kol-img">
              <img :src='item.picture' alt="" width="100%">
            </div>
            <p class="img-title">{{item.name}}</p>
            <p class="img-desc">{{item.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .kol{
    .title{
      font-size: 2.4rem;
      color:#52ADCF;
      margin-bottom: 5.4rem;
    }
    .kol-list{
      ul{
        height: auto;
        &:after{
          .clearFloat;
        }
      }
      li{
        width: 20%;
        /*padding:4.6*10px 1*10px;*/
        /*margin-left: 5%;*/
        &:nth-child(1),&:nth-child(4n+1){
          /*margin-left: 0;*/
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
          margin: 0 auto;
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
            line-height:20px;
            margin-top: 0.8*10px;
            height:20px;
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
  export default {
    props:['kolList'],
    data(){
      return{
        isShow:false,
      }
    },
    components:{

    },
    methods:{

    }
  }
</script>
