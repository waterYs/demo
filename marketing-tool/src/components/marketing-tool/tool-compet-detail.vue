<template>
  <div id="coptem-detail">
    <div class="coptem-detail">
      <div class="recom-box1">
        <detailDefault class="box1-default" :defDeal="defDeal"></detailDefault>
      </div>
      <div class="recom-box2">
        <borderImg :borderImgObg="{'left-top':true}"></borderImg>
        <borderImg :borderImgObg="{'left-bottom':true}"></borderImg>
        <borderImg :borderImgObg="{'right-top':true}"></borderImg>
        <borderImg :borderImgObg="{'right-bottom':true}"></borderImg>
        <div class="box2-top">
          <detailKeyWords class="box2-top-key" :keyChartOption="keyChartOption"></detailKeyWords>
          <!--<myEcharts class="box2-top-key" :id="key" :options="keyChartOption" :titleNavs="keyTitle"></myEcharts>-->
          <detailColla class="box2-top-colla" :collaList="collaList"></detailColla>
        </div>
        <div class="box2-bottom">
          <detailBrands class="box2-bottom-brands" :bransList="bransList"></detailBrands>
        </div>
      </div>
      <div class="recom-box3">
        <borderImg :borderImgObg="{'left-top':true}"></borderImg>
        <borderImg :borderImgObg="{'left-bottom':true}"></borderImg>
        <borderImg :borderImgObg="{'right-top':true}"></borderImg>
        <borderImg :borderImgObg="{'right-bottom':true}"></borderImg>
        <myEcharts class="box3-media" :id="media" :options="mediaOpt" :titleNavs="mediaTitle"></myEcharts>
        <detailNews class="box3-news" :newsArr="newsArr"></detailNews>
        <detailKol class="box3-kol" :kolList="kolList" moreIndex="2"></detailKol>
      </div>
      <div class="recom-box4">
        <borderImg :borderImgObg="{'left-top':true}"></borderImg>
        <borderImg :borderImgObg="{'left-bottom':true}"></borderImg>
        <borderImg :borderImgObg="{'right-top':true}"></borderImg>
        <borderImg :borderImgObg="{'right-bottom':true}"></borderImg>
        <div class="box4-left">
          <div class="left-top">
            <detailSale class="left-top-sale" :saleOpt="saleOpt" :title="saleTitle"></detailSale>
            <myEcharts class="left-top-pic" :id="pic1" :options="saleOpt"></myEcharts>
            <detailSale class="left-top-sale" :saleOpt="passenOpt" :title="passenTitle"></detailSale>
            <myEcharts class="left-top-pic" :id="pic2" :options="passenOpt"></myEcharts>
          </div>
          <div class="left-bottom">
            <div class="bottom1">
              <myEcharts class="bottom1-bar" :id='bar2' :options="genderOpt" :titleNavs="bars2Titles" :bgColor="bgColor"></myEcharts>
              <myEcharts class="bottom1-pic1" :id='pic1_1' :options="consuOpt" :titleNavs="pic1_1Titles" :bgColor="bgColor"></myEcharts>
            </div>
            <div class="bottom2">
              <myEcharts class="bottom2-pic1" :id='pic1_2' :options="ageRangeOpt" :titleNavs="pic1_2Titles" :bgColor="bgColor"></myEcharts>
              <myEcharts class="bottom2-word-cloud" :id='cloud1' :options="cloundOpt" :titleNavs="cloud1Titles" :bgColor="bgColor"></myEcharts>
            </div>
          </div>
        </div>
        <div class="box4-right">
          <myEcharts class="box4-right-line" :id="line1" :options="trendOpt"></myEcharts>
          <detailHeatMap class="box4-rigth-heat-map" :heatmap="heatmap"></detailHeatMap>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "./css/base";
  .coptem-detail{
    &:after{
      .clearFloat;
    }
    .recom-box1{
      width: 20*10px;
      height: 92*10px;
      float: left;
    }
    .recom-box2,.recom-box3,.recom-box4{
      height:92*10px;
      border:1px solid #52ADCF;
      padding:3*10px 4*10px;
      float: left;
      position: relative;
      margin-left: 4*10px;
      .boxSizing;
    }
    .recom-box2{
      width: auto;
      margin-left: 0;
      .box2-top{
        margin-bottom:1*10px;
        &:after{
          .clearFloat;
        }
        .box2-top-key{
          width: 70*10px;
          height:39*10px;
          float: left;
        }
        .box2-top-colla{
          float: left;
          width: 39*10px;
          height:39*10px;
          margin-left:3*10px;
          overflow-y: hidden;
        }
      }
      .box2-bottom{
        .box2-bottom-brands{
          height: 50*10px;
        }
      }

    }
    .recom-box3{
      width: 55*10px;
      .box3-media{
        height:33*10px;
        /*margin-bottom: 5.4*10px;*/
      }
      .box3-news{
        height: 25*10px;
        overflow: hidden;
      }
      .box3-kol{
        height:30*10px;
        overflow: hidden;
      }
    }
    .recom-box4{
      width:auto;
      &:after{
        .clearFloat;
      }
      .box4-left{
        float: left;
        margin-right:8*10px;
        width:auto;
        .left-top{
          height: 13.5%;
          &:after{
            .clearFloat;
          }
          .left-top-sale{
            width:25*10px;
            height: 16*10px;
            float: left;
            margin-right:1*10px;
            background-color:#002941 ;
          }
          .left-top-pic{
            width:38*10px;
            height: 16*10px;
            float: left;
            background-color:#002941 ;
            &:nth-child(2){
              margin-right:3*10px;
            }
          }
        }
        .left-bottom{
          margin-top: 5.4*10px;
          .bottom1{
            height: 33*10px;
            &:after{
              .clearFloat;
            }
            .bottom1-bar{
              float: left;
              width:39*10px;
              height:100%;
              margin-right:13*10px;
            }
            .bottom1-pic1{
              float: left;
              width: 79*10px;
              height:100%;
              background: rgba(104,116,147,0.10);
            }
          }
          .bottom2{
            margin-top: 5.4*10px;
            height:25*10px;
            &:after{
              .clearFloat;
            }
            .bottom2-pic1{
              float: left;
              width: 39*10px;
              height:100%;
              margin-right:13*10px;
              background: rgba(104,116,147,0.10);
            }
            .bottom2-word-cloud{
              float: left;
              width: 79*10px;
              height:100%;
              /*opacity: 0.1;*/
              /*background: #5D6886;*/
            }
          }
        }
      }
      .box4-right{
        width: auto;
        float: left;
        .box4-right-line{
          width:70*10px;
          height:44*10px;
        }
        .box4-rigth-heat-map{
          /*margin-top: 5.4*10px;*/
          width:70*10px;
          height: 45*10px;
        }
      }
    }
  }
</style>
<script>
  import {marketingToolObj} from './data/marketingTool'
  import borderImg from './common/border-img'
  import detailBarChart1 from './common/detail-bar-chart1';
  import myEcharts from './common/echarts'
  import detailBrands from './tool-detail/detail-brands';
  import detailColla from './tool-detail/detail-colla';
  import detailDefault from './tool-detail/detail-default';
  import detailHeatMap from './tool-detail/detail-heat-map';
  import detailKeyWords from './tool-detail/detail-key-words';
  import detailKol from './tool-detail/detail-kol';
  // import detailLineChart from './tool-detail/detail-line-chart';
  // import detailMedia from './tool-detail/detail-media';
  import detailNews from './tool-detail/detail-news';
  import detailSale from './tool-detail/detail-sale';
  import detailWordCloud from './tool-detail/detail-wordcloud';
  export default {
    props:['titleDesc'],
    components:{
      detailBarChart1,
      detailBrands,
      myEcharts,
      detailColla,
      detailDefault,
      detailHeatMap,
      detailKeyWords,
      detailKol,
      // detailLineChart,
      // detailMedia,
      detailNews,
      detailSale,
      detailWordCloud,
      borderImg
    },
    data(){
      return{
        listDetail:{},
        defDeal:{},
        default1Arr:[],
        keyChartOption:[],
        collaList:[],
        bransList:[],
        mediaOpt:{},
        newsArr:[],
        kolList:[],
        saleOpt:{},
        passenOpt:{},
        genderOpt:{},
        consuOpt:{},
        ageRangeOpt:[],
        cloundOpt:{},
        trendOpt:{},
        saleTitle:'Sales',
        passenTitle:'Traffic',
        keyTitle:[{
          title:'Key Words',
        }],
        key:'key',
        heatmap:[],
        chartH:'100%',

        media:'media',
        bar2:'bar2',
        pic1:'pic1',
        pic2:'pic2',
        pic1_1:'pic1_1',
        pic1_2:'pic1_2',
        line1:'line1',
        cloud1:'cloud1',
        mediaTitle:[{
          title:'Media Channel'
        }],
        bars2Titles:[{
          title:'Target Group'
        },{
          title:'Gender Ratio'
        }],
        pic1_1Titles:[{
          title:'Target Group'
        },{
          title:'Consumption Ability & Contribution Analysis Average Month'
        }],
        pic1_2Titles:[{
          title:'Target Group'
        },{
          title:'Age Range'
        }],
        cloud1Titles:[{
          title:'Target Group'
        },{
          title:'Interest'
        }],
        bgColor:'bg-color',
      }
    },
    watch:{
      titleDesc(v1,v2){
        this.getDetail(v1);
      }
    },
    beforeMount(){
      this.getDetail(this.titleDesc);
    },
    mounted(){
      this.getDetail(this.titleDesc);
    },
    updated(){
      this.getDetail(this.titleDesc);
    },
    methods:{
      getDetail(titleDesc){
        let arr=marketingToolObj.listDetail;
        for (let i=0;i<arr.length;i++){
          if(arr[i][titleDesc]){
            this.listDetail=arr[i][titleDesc];
            let d=this.listDetail;
            this.defDeal=d['defDeal'];
            this.keyChartOption=d['keyChartOption'];
            this.collaList=d['collaList'];
            this.bransList=d['bransList'];
            this.mediaOpt=d['mediaOpt'];
            this.newsArr=d['newsArr'];
            this.kolList=d['kolList'];
            this.saleOpt=d['saleOpt'];
            this.passenOpt=d['passenOpt'];
            this.genderOpt=d['genderOpt'];
            this.consuOpt=d['consuOpt'];
            this.ageRangeOpt=d['ageRangeOpt'];
            this.cloundOpt=d['cloundOpt'];
            this.trendOpt=d['trendOpt'];
            this.heatmap=d['heatmap'];
            break;
          }else{
            this.default1Arr={};
          }
        }
      }
    }
  }

</script>
