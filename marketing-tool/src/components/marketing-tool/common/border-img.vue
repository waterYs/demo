<template>
  <div class="border-img">
    <p class="img-box" v-bind:class="borderImgObg">
      <!--<img src="../../img/corner.svg" width="100%" alt="">-->
    </p>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .border-img{
    p.img-box{
      width: 3.6*10px;
      height:3.6*10px;
      position: absolute;
      background-color:transparent;
      border-left:0.4*10px solid #52ADCF;
      border-top:0.4*10px solid #52ADCF;
      img{
        width: 100%;
        color:#fff;
      }
      &.left-top{
        left:-.2*10px;
        top:-.2*10px;
      }
      &.left-bottom{
        left:-.2*10px;
        bottom:-.2*10px;
        .transform-rotate-x(180deg);
      }
      &.right-top{
        right:-.2*10px;
        top:-.2*10px;
        .transform-rotate-y(180deg);
      }
      &.right-bottom{
        right:-.2*10px;
        bottom:-.2*10px;
        .transform-rotate-z(180deg);
      }
      &.border-color{
        border-left-color:#fff;
        border-top-color:#fff;
      }
    }
  }
</style>
<script>
  export default {
    props:['borderImgObg'],
  }
</script>
