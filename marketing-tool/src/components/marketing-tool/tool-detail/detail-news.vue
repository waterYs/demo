<template>
  <div id="detail-news">
    <div class="detail-news">
      <h3 class="title">News</h3>
      <div class="news-box" v-for="(item,index) in newsArr">
        <div class="news-left">
          <img :src="item.img" alt="">
        </div>
        <a class="news-right" @click="showNewsDetail(index)">
          <h5 class="title1">{{item.title}}</h5>
          <p class="news-desc">{{item.desc}}</p>
        </a>
        <a href="javascript:;" class="news-more" v-if="index>=1" @click.stop="showMore">More...>></a>
      </div>
    </div>
    <popup :popStyle="popStyle" title="NewsList" v-show="isShow" @close="close">
      <detailNewsList :newsArr1="newsArr" v-if="show1"></detailNewsList>
      <detailNewsDetail :newsLink="newsLink" v-if="show2"></detailNewsDetail>
    </popup>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .detail-news{
    height: 100%;
    h3.title{
      font-size: 2.4*10px;
      color: #52ADCF;
      margin-bottom:2.7*10px;
    }
    .news-box{
      /*height:auto;*/
      height: 10*10px;
      overflow: hidden;
      &:after{
        .clearFloat
      }
      .news-left{
        width: 12*10px;
        height: 8*10px;
        float: left;
        cursor: pointer;
        >img{
          width: 100%;
          height: 8*10px;
        }
      }
      .news-right{
        float:left;
        margin-left: 2*10px;
        width: 32*10px;
        position: relative;
        text-decoration: none;
        color:#fff;
        h5.title1{
          width: 100%;
          font-size:2.4*10px;
          color:#fff;
          height: 3.2*10px;
          .ellipse;
        }
        p.news-desc{
          width: 100%;
          height: 5.2*10px;
          font-size:1.8*10px;
          color: #687493;
          text-align: justify;
          line-height: 2.6*10px;
          .ellipse;
          white-space:normal;
        }
      }
    }
    .news-more{
      color:#52ADCF;
      font-size:1.8*10px;
      float: right;
      height:3*10px;
    }
  }
</style>
<script>
  import htmlFontSize from '../js/html-font-size'
  import detailNewsDetail from './detail-news-detail';
  import detailNewsList from './detail-news-list';
  import popup from '../common/popup';
  export default {
    components:{
      detailNewsDetail,
      detailNewsList,
      popup
    },
    props:['newsArr'],
    data(){
      return{
        isShow:false,
        show1:false,
        show2:false,
        newsLink:'',
        popStyle: { width: "1000px", height: "auto",margin:'0 auto',backgroundColor:'transparent',boxShadow:'0px 0px 5px #888',border:'2px solid #8CDFFF'}
      }
    },
    methods:{
      showMore(){
        this.isShow=true;
        this.show1=true;
      },
      showNewsDetail(index){
        // this.isShow=true;
        this.show1=false;
        this.newsLink=this.newsArr[index]['link'];
        window.open(this.newsLink);
      },
      close(){
        this.isShow=false;
        this.show1=false;
        this.show2=false;
      }
    }
  }
</script>
