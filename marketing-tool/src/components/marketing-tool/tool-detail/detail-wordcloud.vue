<template>
  <div class="key-charts">
    <div class="event-cloud-words">
      <echarts
        :options="eventCloudWordsOption"
        class="main-charts"
        :auto-resize="true"
      >
      </echarts>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .event-cloud-words {
    height: 15.4*10px;
    margin-top: 1.4*10px;
    .main-charts {
      width: 100%;
      height: 100%;
    }
  }

  .app-device--bigScreen {
    .event-cloud-words {
      height: 387px;
      margin-top: 28px;
    }
  }
</style>
<script>
  import utils from "../../../utils";
  import htmlFontSize from '../js/html-font-size'
  const echarts=require('echarts');
  export default {
    data() {
      return {
        eventCloudWordsOption: null
      };
    },
    methods: {
      async loadCloudWords() {
        let rsp = await this.$http.get("/api/sentiment/event/cloudwords", {
          params: {
            brandId: this.brandId,
            days: this.days,
            eventId: this.eventId
          }
        });

        this.drawCloudWordsChart(rsp.data.data);
      },
      drawCloudWordsChart(data) {
        let wordsData = data.map(item => {
          return {
            name: item.keyword,
            realWeight: item.weight,
            value: Math.sqrt(item.weight)
          };
        });

        let design_max_font_size = utils.isIpad() ? 28 : 50;
        let min_font_size = utils.getDeviceRealPixelValue(18);
        let max_font_size = utils.getDeviceRealPixelValue(design_max_font_size);

        this.eventCloudWordsOption = {
          title: {
            text: "词云图",
            show: false
          },
          tooltip: {
            position: "top",
            formatter: function(params) {
              return params.name;
            }
          },
          series: [
            {
              type: "wordCloud",
              gridSize: utils.getDeviceRealPixelValue(64),
              sizeRange: [min_font_size, max_font_size],
              textRotation: [0, 0],
              rotationRange: [0, 0],
              shape: function shapeSquare(theta) {
                return Math.min(
                  1 / Math.abs(Math.cos(theta)),
                  1 / Math.abs(Math.sin(theta))
                );
              },
              top: "top",
              left: "left",
              width: "100%",
              height: "100%",
              drawOutOfBound: false,
              textStyle: {
                normal: {
                  color: function() {
                    const colorSet = [
                      "#5B89A1",
                      "#0DA185",
                      "#2D96D3",
                      "#B31616",
                      "#BC6D1C",
                      "#D34E31"
                    ];
                    return colorSet[
                    utils.getRandomNumber(0, 10) % colorSet.length
                      ];
                  }
                }
                // emphasis: {
                //   shadowBlur: 10,
                //   shadowColor: "#333"
                // }
              },
              data: wordsData
              //data: [{
              //    name: 'Sam S Club',
              //    value: 10000,
              //    //textStyle: {
              //    //    normal: {
              //    //        color: 'black'
              //    //    },
              //    //    emphasis: {
              //    //        color: 'red'
              //    //    }
              //    //}
              //}, {
              //    name: 'Macys',
              //    value: 6181
              //}, {
              //    name: 'Point Break',
              //    value: 265
              //}]
            }
          ]
        };
      }
    },
    watch: {
      eventId(eventId) {
        this.loadCloudWords();
      }
    }
  }
</script>
