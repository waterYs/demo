<template>
  <div id="heat-map">
    <div class="heat-map">
      <h3 class="title">Target Group Heatmap</h3>
      <div id="container" class="container heat-map-box">

      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  #heat-map{
    padding: 2*10px;
    .boxSizing;
  }
  .heat-map{
    height: 100%;
    padding:2*10px;
    .boxSizing;
    .title{
      font-size: 2.4*10px;
      color: #52ADCF;
      height: 15%;
    }
    .heat-map-box{
      height:85%;
    }
  }
</style>
<script>
  import jinganqu from '../data/geo-jinanqu-data'
  import {marketingToolObj} from '../data/marketingTool'
  import shanghaiData from '../js/shanghai_data'
  export default {
    props:['heatmap'],
    data(){
      return{
        // heatMapObj:marketingToolObj.recom.heatMapObj
      }
    },
    watch:{
      heatmap(v1,v2){
        return this.dragMap();
      }
    },
    mounted(){
      this.dragMap();
    },
    methods:{
      dragMap(){
        var heatmapData=this.heatmap;
        //初始化地图对象，加载地图
        var map=new AMap.Map('container', {
          features: ['bg', 'road'],
          resizeEnable: true,
          center:[heatmapData[0]['lng'],heatmapData[0]['lat']],//地图中心点
          expandZoomRange:true,
          zoom:15, //地图显示的缩放级别
          zooms:[9,14],
          level:2,
          mapStyle: "amap://styles/01839fe30d9532c8576b73962fca44d1",
          dragEnable: false,
          zoomEnable: true
        })
        let zoomLevel = map.getZoom();
        let leftTopPoint=map.containerToLngLat(_pixelFactory(0,0));
        let rightBottom=map.containerToLngLat(_pixelFactory(600,350));
        let heatmapData1;
        AMap.GeometryUtil.distance(leftTopPoint,rightBottom);
        //鼠标移除后触发事件
        function getRadius(){
          var zoom=map.getZoom();
          var radius;
          switch (zoom){
            case 14:
              radius = 250;
              break;
            case 13:
              radius = 100;
              break;
            case 12:
              radius = 50;
              break;
            case 11:
              radius = 25;
              break;
            case 10:
              radius=25;
              break;
            case 9:
              radius=25;
              break;
          }
          return radius;
        }
        function getRadius1(){
          var zoom=map.getZoom();
          var radius;
          switch (zoom){
            case 14:
              radius =25;
              break;
            case 13:
              radius = 20;
              break;
            case 12:
              radius =15;
              break;
            case 11:
              radius =10;
              break;
            case 10:
              radius=5;
              break;
            case 9:
              radius=1;
              break;
          }
          return radius;
        }
        AMap.event.addDomListener(document.getElementById('container'), 'mouseout', function() {
          // zoomLevel = map.getZoom();
          // getRadius();
          map.panTo([heatmapData[0]['lng'],heatmapData[0]['lat']]);
          getGeo();
        });
        AMap.event.addDomListener(document.getElementById('container'), 'mousewheel', function() {
          // zoomLevel = map.getZoom();
          // getRadius();
          map.panTo([heatmapData[0]['lng'],heatmapData[0]['lat']]);
          getGeo();
        });
        // 构造点标记
        var marker = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position:[heatmapData[0]['lng'],heatmapData[0]['lat']],
          title:heatmapData[0]['name'],
          animation:'AMAP_ANIMATION_BOUNCE'
        });
        map.add(marker);
        //添加缩放控件
        AMap.plugin(['AMap.Scale'],function(){
          map.addControl(new AMap.Scale());
        });
       function _pixelFactory(x, y) {
          return new AMap.Pixel(x, y);
        }
      // var heatmapData=this.heatmap;
        let _that=this;
        getGeo();
        function getGeo() {
          let _radius=getRadius();/*http://wr.remarkdip.com/api/insight/hot/graph*/
          // heatmapData1=shanghaiData.data;
          // var heatmap1;
          // map.plugin(["AMap.Heatmap"], function() {
          //   //初始化heatmap对象
          //   heatmap1 = new AMap.Heatmap(map, {
          //     radius:getRadius1(), //给定半径
          //     opacity: [0, 0.8],
          //     gradient: {
          //       "0.05": "#003067",
          //       "0.38": "#7ed321",
          //       "0.63": "#fbe800",
          //       "1.0": "#ea4f18"
          //     },
          //   });
          //   heatmap1.hide();
          //   //设置数据集：该数据为北京部分“公园”数据
          //   heatmap1.setDataSet({
          //     data: heatmapData1,
          //     max:100
          //   });
          //   heatmap1.show();
          // });
          _that.$http.get('/api/insight/hot/graph',{
            params:{
              leftTop:`${leftTopPoint.lat},${leftTopPoint.lng}`,
              rightBottom:`${rightBottom.lat},${rightBottom.lng}`,
              radius:_radius,
              income:[],
              source:[],
              age:[],
              gender:[]
            }
          }).then(function (response) {
            heatmapData1=response.data.data;
            // heatmapData1=jinganqu;
            // heatmapData1=[
            //   {lng: 121.50385300000002, lat: 31.238666999999985, count: 78, hourType: "afternoon"},
            //   {lng: 121.49042999999999, lat: 31.240010000000005, count: 137, hourType: "noon"},
            //   {lng: 121.48901299999997, lat: 31.241206999999992, count: 81, hourType: "morning"}
            // ];
            var heatmap1;
            map.plugin(["AMap.Heatmap"], function() {
              //初始化heatmap对象
              heatmap1 = new AMap.Heatmap(map, {
                radius:getRadius1(), //给定半径
                opacity: [0, 0.8],
                gradient: {
                  "0.05": "#003067",
                  "0.38": "#7ed321",
                  "0.63": "#fbe800",
                  "1.0": "#ea4f18"
                },
              });
              //设置数据集：该数据为北京部分“公园”数据
              heatmap1.setDataSet({
                data: heatmapData1,
                max:100
              });
            });
          }).catch(function (response) {
            console.log(response);
          });
        }
      }
    }
  }
</script>
