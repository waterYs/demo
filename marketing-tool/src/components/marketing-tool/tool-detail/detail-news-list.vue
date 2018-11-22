<template>
  <div id="detail-news-list">
    <div class="detail-news">
      <div class="news-box" v-for="(item,index) in newsArr1">
        <div class="news-left">
          <img :src="item.img" alt="">
        </div>
        <a class="news-right" @click="showNewsDetail(index)">
          <div class="right-top">
            <h5 class="title1">{{item.title}}</h5>
            <span class="time">{{item.time}}</span>
            </div>
          <p class="news-desc">{{item.desc}}</p>
        </a>
        <i class="copy" @click.stop="copy" v-clipboard:copy="item.link" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>

      </div>
    </div>
    <!--<popup :popStyle="popStyle" title="News" v-show="isShow" @close="close">-->
      <!--<detailNewsDetail :newsLink="newsLink"></detailNewsDetail>-->
    <!--</popup>-->
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .detail-news{
    height: 100%;
    width: 100%;
    .news-box{
      height:auto;
      position: relative;
      &:after{
        .clearFloat
      }
      margin-bottom: 2*10px;
      .news-left{
        width: 12*10px;
        height: 8*10px;
        float: left;
        overflow: hidden;
        &>img{
          width: 100%;
        }
      }
      .news-right{
        float:left;
        margin-left: 2*10px;
        width:83*10px;
        cursor: pointer;
        color:#fff;
        text-decoration: none;
        .right-top{
          width: 100%;
          font-size:2.4*10px;
          color:#fff;
          height: 3.2*10px;
          .ellipse;
          position: relative;
          h5.title1{
            width: 60%;
            .ellipse;
          }
          span.time{
            position: absolute;
            right:0%;
            top:0;
            width: 20%;
          }

        }

        p.news-desc{
          width: 100%;
          height: 5.2*10px;
          font-size:1.8*10px;
          color: #687493;
          text-align: justify;
          line-height: 2.6*10px;
          .ellipse;
          white-space: normal;
        }
      }
      i.copy{
        width: 23px;
        height: 23px;
        display: inline-block;
        position:absolute;
        right: 20%;
        top: 0;
        background-image:url("../img/ic_link.png");
        background-size: 100% 100%;
      }
    }
    .news-more{
      color:#52ADCF;
      font-size:1.8*10px;
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  import detailNewsDetail from './detail-news-detail';
  import popup from '../common/popup';
  import Vue from 'vue'
  // import VueClipboard from 'vue-clipboard2'
  // Vue.use(VueClipboard);
  export default {
    props:['newsArr1'],
    components:{
      detailNewsDetail,
      popup
    },
    data(){
      return{
        isShow:false,
        newsLink:'',
        popStyle: { width: "1000px", height: "auto",margin:'0 auto',backgroundColor:'transparent',boxShadow:'0px 0px 5px #888',border:'2px solid #8CDFFF'}
      }
    },
    methods:{
      showNewsDetail(index){
        this.isShow=true;
        this.newsLink=this.newsArr1[index]['link'];
        window.open(this.newsLink);
      },
      close(){
        this.isShow=false;
      },
      onCopy: function (e) {
        alert('你刚刚复制: ' + e.text);
        console.log('你刚刚复制: ' + e.text)
      },
      onError: function (e) {
        console.log('无法复制文本！')
      },
      copy(){

      }
    }
  }
</script>
