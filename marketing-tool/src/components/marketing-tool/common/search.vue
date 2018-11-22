<template>
  <div class="search">
    <div class="search">
      <input type="text" placeholder="Search : Theme or Mall" v-model="text" @change="search" @keyup="enter($event)">
      <i class="searchTag" v-if="!searchCloseFlag"></i>
      <i class="closeTag" v-if="searchCloseFlag" @click="close"></i>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../css/base";
  .search{
    width:100%;
    height:100%;
    position: absolute;
    overflow: hidden;
    left:0px;
    right: 1px;
    top:1px;
    bottom:1px;
    border:1px solid #52ADCF;
    .boxSizing;
    input{
      width: 100%;
      height:100%;
      padding: 1.2*10px 1.6*10px;
      padding-left: 5*10px;
      .boxSizing;
      font-size:2.4*10px;
      color:#52ADCF;
      border:none;
      background: transparent;
    }
    i.searchTag{
      width: 2*10px;
      height: 2*10px;
      position: absolute;
      left: 2*10px;
      top: 1.5*10px;
      background-image: url("../img/ic_search_white.svg");
      background-size: 100% 100%;
    }
    i.closeTag{
      width: 3.2*10px;
      height: 3.2*10px;
      position: absolute;
      right: 1.6*10px;
      top: 1rem;
      background-image: url("../img/delete1.svg");
      background-size: 100% 100%;
    }
  }
</style>
<script>
  export default {
    // props:['ulPos2'],
    data(){
      return{
        text:'',
        ulPos2:false,
        searchCloseFlag:false
      }
    },
    watch:{
      text:function (v1,v2) {
        if(v1==''){
          this.searchCloseFlag=false;
        }else{
          this.searchCloseFlag=true;
        }
        this.search();
      }
    },
    methods:{
      search(){
        this.$emit('serchText',this.text);
      },
      enter(ev){
        if(ev.keyCode==13){
          this.search();
        }
      },
      close(){
        this.text='';
        this.searchCloseFlag=false;
        this.search();
      }
    }
  }
</script>
