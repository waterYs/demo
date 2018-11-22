<template>
  <div id="tool-home">
    <div class="tool-home" :class="{'overflow-home':ulPos1}">
      <toolNav :ulPos2="ulPos2" @getNav="getNav" @getUlPos="getUlPos"></toolNav>
      <!--<toolList class="tool-list" :listArr="listArr" :ulPos="ulPos1" :scrollPos="scrollPos" :selectIndex="selectIndex" @getScrollPos="getScrollPos" :active="active" @show="show" @getUlPos1="getUlPos1" @listTitleDesc="getListTitleDesc" @isSelected="getSelected"></toolList>-->
      <!--<div class="recom-detail" v-if="isShow">-->
        <!--<toolRecomDetail :titleDesc="titleDesc" v-if="navTitle!='Competitor Plan'"></toolRecomDetail>-->
        <!--<toolCompetDetail :titleDesc="titleDesc" v-if="navTitle=='Competitor Plan'"></toolCompetDetail>-->
      <!--</div>-->
    </div>
  </div>
</template>
<style lang="less" scoped>
  #tool-home{

  }
  .tool-home{
    position: relative;
    background: #1D283F;
    min-height:109*10px;
    .tool-list{
      position: relative;
      z-index: 0;
    }
    &.overflow-home{
      height: 100%;
      overflow-y: hidden;
    }
  }
  .recom-detail{
    background-color: #000;
    padding: 4*10px 0;
    position: absolute;
    left: 46*10px;
    right: 0*10px;
    top:8*10px;
    bottom: 0;
    z-index: 1;
    height:auto;
    border: 1px solid #52ADCF;
  }
</style>
<script>
  import htmlFontSize from './js/html-font-size'
  import {marketingToolObj} from './data/marketingTool'
  import toolNav from './tool-nav';
  import toolList from './tool-list';
  import toolRecomDetail from './tool-recom-detail';
  import toolCompetDetail from './tool-compet-detail';
  export default {
    components:{
      toolNav,
      toolList,
      toolRecomDetail,
      toolCompetDetail
    },
    data(){
      return{
        isShow:false,
        ulPos1:false,
        ulPos2:false,
        listArr:`${marketingToolObj}.recom.listArr_jieri`,
        titleDesc:'',
        navTitle:'',
        scrollPos:false,
        active:false,
        searchText:'',
        isSelected:0,
        isNullText:'text',
        chState:false,
        foState:false,
        isIndex0:100,
        selectIndex:0,
        searchFood:'food'||'f&b'||'taste',
        searchChris:'christmas'
      }
    },
    watch:{
      titleDesc(v1,v2){
        this.titleDesc=v1;
        if(v1=='ch1'){
          this.chState=true;
          this.foState=false;
        }else if(v1=='su1'){
          this.chState=false;
          this.foState=true;
        }
      },
      navTitle(v1,v2){
        if(v1!==v2){
          this.scrollPos=true;
          this.isNullText='text';
        }else {
          this.scrollPos=false;
        }
      },
      isSelected(v1,v2){
        this.isSelected=v1;
      },
      searchText(v1,v2){
        this.isNullText=v1;
      }
    },
    methods:{
      getSelected(val){
        this.isSelected=val;
      },
      list(arr){
        let recom=`${marketingToolObj}.recom`;
        let str=arr[1];
        let strList1=[];
        if(str.length>0){
          str=arr[1].toLowerCase().substring(0,str.length);

          /**
           * 根据搜索商场判断竞品显示列表
           * @param _str 搜索商场或与之相关的关键字匹配到对应的列表
           * @param strArr 导航名称和输入框的值组成的数组
           */
          function f(_str,strArr) {
            let str3=_str;
            if(strArr[0]=='Competitor Plan'){
              strList1=recom['listArr_'+str3];
            }else{
              strList1=recom.listArr_su;
            }
          }
          if(str=='super brand mall'||str=='super'||str=='brand'||str=='mall'){
            if(arr[0]=='Recommended Plan'){
              this.listArr=recom.listArr_su;
            }else{
              strList1=recom.listArr_copet;
              this.listArr=strList1;
            }
          }else if(str=='global'||str=='global harbor'){
            f('gl',arr);
            this.listArr=strList1;
          }else if(str=='iapm'){
            f('ia',arr);
            this.listArr=strList1;
          }else if(str=='jingan'||str=='jingan kerry'||str=='kerry'){
            f('ji',arr);
            this.listArr=strList1;
          }else if(str=='k11'){
            f('k1',arr);
            this.listArr=strList1;
          }else if(str=='raffles'||str=='raffles city changning'||str=='raffles city'){
            f('ra',arr);
            this.listArr=strList1;
          }else if(str=='hkri'||str=='hkri taikoo hui'||str=='hkri taikoo'){
            f('hk',arr);
            this.listArr=strList1;
          }else if(str=='food'||str=='f&b'||str=='taste'){
            if(arr[0]=='Recommended Plan'){
              this.listArr=recom.listArr_fo;
            }else{
              this.listArr=recom.listArr_fo_rev;
            }
          }else if(str=='christmas'){
            if(arr[0]=='Recommended Plan'){
              this.listArr=recom.listArr_ch;
            }else{
              this.listArr=recom.listArr_ch_rev;
            }
          }else{
            this.listArr=[];
            this.ulPos1=false;
            this.isShow=false;
          }
        }else if(str.length==0){
          if(arr[0]=='Recommended Plan'){
            this.listArr=recom.listArr_jieri;
          }else if(arr[0]=='Competitor Plan'){
            this.listArr=recom.listArr_copet;
          }
        }
      },
      getNav(val){
        this.navTitle=val[0];
        this.searchText=val[1];
        if(val[1].length<2){
          this.scrollPos=true;
        }
        this.active=true;
        this.list(val);
        this.defaultList(val,this.titleDesc,this.ulPos1);
        let _selectIndex=this.selectIndex;
        if((val[1]=='food'||val[1]=='f&b'||val[1]=='taste'||val[1]=='christmas')&&val[0]=='Recommended Plan'){
          _selectIndex=0;
        }else{
          _selectIndex=this.selectIndex;
        }
        if(this.listArr!==undefined){
          if(this.listArr.length>0){
            this.titleDesc=this.listArr[_selectIndex]['title-desc'];
            this.scrollPos=true;
          }
        }
      },
      show(val){
        this.isShow=val;
      },
      getListTitleDesc(val){
        this.titleDesc=val;
        // this.defaultList([this.navTitle,this.searchText],this.titleDesc,this.ulPos1);
      },
      getUlPos(val){
        this.ulPos1=val;
        this.isShow=val;
        let navTitle=this.navTitle;
        let searchText=this.searchText;
        if(this.isShow==false){
          let recom=`${marketingToolObj}.recom`;
          let _that=this;

          /**
           * 点击返回按钮后出现的列表
           * @param txt 搜索框文本
           * @param navTitle 标题
           * @param arr1 推荐列表
           * @param arr2 竞品列表
           */
          function f(txt,navTitle,arr1,arr2) {
            if(searchText==txt){
              if(navTitle=='Recommended Plan'){
                _that.listArr=arr1;
              }else{
                _that.listArr=arr2;
              }
            }
          }
          f('',navTitle,recom.listArr_jieri,recom.listArr_copet);

          f('super brand mall',navTitle,recom.listArr_su,recom.listArr_copet);
          f('super',navTitle,recom.listArr_su,recom.listArr_copet);
          f('brand',navTitle,recom.listArr_su,recom.listArr_copet);
          f('mall',navTitle,recom.listArr_su,recom.listArr_copet);

          f('global harbor',navTitle,recom.listArr_jieri,recom.listArr_gl);
          f('global',navTitle,recom.listArr_jieri,recom.listArr_gl);
          f('harbor',navTitle,recom.listArr_jieri,recom.listArr_gl);

          f('iapm',navTitle,recom.listArr_jieri,recom.listArr_ia);

          f('jingan kerry',navTitle,recom.listArr_jieri,recom.listArr_ji);
          f('jingan',navTitle,recom.listArr_jieri,recom.listArr_ji);
          f('kerry',navTitle,recom.listArr_jieri,recom.listArr_ji);

          f('k11',navTitle,recom.listArr_jieri,recom.listArr_k1);

          f('raffles city changning',navTitle,recom.listArr_jieri,recom.listArr_ra);
          f('raffles',navTitle,recom.listArr_jieri,recom.listArr_ra);
          f('city',navTitle,recom.listArr_jieri,recom.listArr_ra);
          f('changning',navTitle,recom.listArr_jieri,recom.listArr_ra);

          f('hkri taikoo hui',navTitle,recom.listArr_jieri,recom.listArr_hk);
          f('hkri',navTitle,recom.listArr_jieri,recom.listArr_hk);
          f('taikoo',navTitle,recom.listArr_jieri,recom.listArr_hk);
          f('hui',navTitle,recom.listArr_jieri,recom.listArr_hk);
        }
      },
      getUlPos1(val){
        this.ulPos1=val;
      },
      getScrollPos(val){
        this.scrollPos=val;
      },
      /**
       * 输入框没有值或为正大广场时,推荐与竞品切换时详情列表显示
       * @param strArr 输入框的值与导航的值组成的数组
       * @param str1 海报列表标题的描述字符串
       * @param flag1 详情弹出层的状态
       * @param listArr 海报列表的存放数组
       */
      defaultList(strArr,str1,flag1){
        let recom=`${marketingToolObj}.recom`;
        let listArr=[];
        let _isSelected=this.isSelected;
        let _isNullText=this.isNullText;
        let _that=this;
        function f(_str0,_str1,_str2,_str3,_str4,_str5) {
          /**
           * 根据输入框购物名称判断推荐和竞品详情展示
           * @param _str0 输入框搜索的商场名称或主题
           * @param _str1 竞品显示的与商场名称或主题有关的海报列表
           * @param _str2 竞品显示的与美食或圣诞有关的海报列表
           * @param _str3 输入框搜索商场竞品显示列表
           * @param _str4 推荐显示的初始列表
           * @param _str5 推荐详情出现后显示的列表
           */
          let str=strArr[1].toLowerCase();
          if(str==_str0){
            if(flag1==true){
              if(strArr[0]=='Recommended Plan'){
                listArr=recom['listArr_'+_str5];
                if(str1=='do1'||str1=='be1'||str1=='wi1'){
                  _that.selectIndex=0;
                }else if(str1=='he1'||str1=='bo1'||str1=='fe1'){
                  if(_str0=='food'||_str0=='f&b'||_str0=='taste'){
                    _that.selectIndex=0;
                  }else{
                    _that.selectIndex=1;
                  }
                }
              }else{
                _that.selectIndex=0;
                if(str1=='ch1'){
                  listArr=recom['listArr_'+_str1];
                }else if(str1=='su1'){
                  listArr=recom['listArr_'+_str2];
                }else if(str1=='do1'||str1=='be1'||str1=='wi1'){
                  if(_isSelected==1||_isNullText==''){
                    listArr=recom['listArr_'+_str3];
                  }else{
                    listArr=recom['listArr_'+_str1];
                  }
                }else if(str1=='he1'||str1=='bo1'||str1=='fe1'){
                  if(_isSelected==1||_isNullText==''){
                    listArr=recom['listArr_'+_str3];
                  }else{
                    listArr=recom['listArr_'+_str2];
                  }
                }else{
                  listArr=recom['listArr_'+_str3];
                }
              }
              if(listArr==undefined){
                _that.isShow=false;
                _that.ulPos1=false;
              }else{
                _that.isShow=true;
                _that.ulPos1=true;
              }
            }else{
              if(strArr[0]=='Recommended Plan'){
                listArr=recom['listArr_'+_str4];
              }else{
                listArr=recom['listArr_'+_str3];
              }
            }
          }
        }
        f('','ch_rev','fo_rev','copet','jieri','jieri');

        f('super brand mall','ch_rev','fo_rev','copet','su','su');
        f('super','ch_rev','fo_rev','copet','su','su');
        f('brand','ch_rev','fo_rev','copet','su','su');
        f('mall','ch_rev','fo_rev','copet','su','su');

        f('global','gl','','gl','jieri','ch','ch');
        f('global harbor','gl','fo_rev','gl','jieri','ch');
        f('harbor','gl','fo_rev','gl','jieri','ch');

        f('iapm','ia','fo_rev','ia','jieri','ch');

        f('jingan','ji','fo_rev','ji','jieri','ch');
        f('jingan kerry','ji','fo_rev','ji','jieri','ch');
        f('kerry','ji','fo_rev','ji','jieri','ch');

        f('k11','k1','k1','k1','jieri','fo');

        f('raffles','ra','ra','ra','jieri','fo');
        f('raffles city changning','ra','ra','ra','jieri','fo');
        f('city','ra','ra','ra','jieri','fo');
        f('changning','ra','ra','ra','jieri','fo');

        f('hkri','hk','hk','hk','jieri','fo');
        f('hkri taikoo hui','hk','hk','hk','jieri','fo');
        f('taikoo','hk','hk','hk','jieri','fo');
        f('hui','hk','hk','hk','jieri','fo');

        f('food','fo_rev','fo_rev','fo_rev','fo','fo');
        f('f&b','fo_rev','fo_rev','fo_rev','fo','fo');
        f('taste','fo_rev','fo_rev','fo_rev','fo','fo');

        f('christmas','ch_rev','ch_rev','ch_rev','ch','ch');
        this.listArr=listArr;
      }

    }
  }

</script>
