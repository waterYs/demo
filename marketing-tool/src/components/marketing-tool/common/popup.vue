<style scoped>
@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(0.6, 0.6);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.popup-box-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    /*background-color: rgba(200, 200, 200, 0.5);//old*/
    background-color:rgba(19,33,57,0.90);
    -webkit-box-pack: center;
    -webkit-box-align: center;
    z-index: 9999999;
}

.popup-box {
  background: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #888888;
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 5%;
  right: 5%;
}
.popup-box {
  -webkit-animation-delay: 0.3s;
  -ms-animation-delay: 0.3s;
  animation-delay: 0.3s;
  -webkit-animation-name: scale;
  -webkit-animation-fill-mode: forwards;
  -ms-animation-name: scale;
  -ms-animation-fill-mode: forwards;
  animation-name: scale;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  -ms-animation-duration: 1s;
  opacity: 0;
}

.popup-box {
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -ms-animation-duration: 0.5s;
}
.popup-box-inner {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 10px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.popup-box-header {
  border-bottom: 1px solid #eeeeee;

  width: 100%;
  height: 33px;
  position: relative;
}
.popup-box-header .left {
  height: 33px;
  line-height: 33px;
  text-align: left;
  width: 70px;
  position: absolute;
  left: 0px;
}
.popup-box-header .center {
  height: 33px;
  line-height: 33px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  left: 70px;
  right: 70px;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}
.popup-box-header .right {
  height: 33px;
  line-height: 33px;
  text-align: right;
  position: absolute;
  right: 0px;
  width: 70px;
}
.popup-box-header .right a {
  font-size: 16px;
  font-weight: bolder;
  color: #0096d6;
  text-decoration: none;
}
.popup-box-header .right a:hover {
  color: #f00;
}
.popup-content {
  position: absolute;
  top: 55px;
  bottom: 12px;
  left: 10px;
  right: 10px;
}

.popup-content iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
.frame-warp{
    height:100%;
    width:100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>

<template>
    <div class="popup-box-background">
        <div :style="popStyle" class="popup-box">
            <div class="popup-box-inner">
                <div class="popup-box-header">
                    <div class="left" style="color:#fff;">{{title}}</div>
                    <div class="center" id="popup-title"></div>
                    <div class="right">
                        <a href="javascript:void(0);" @click="clickClose" style="color:#fff;">X</a>
                    </div>
                </div>
                <div class="popup-content" id="popup-content" >
					        <div class="frame-warp" style="">
                        <slot></slot>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title:String,
    popStyle: {
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods: {
      clickClose(){
          this.$emit('close')
      }
  }
}
</script>

