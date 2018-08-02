<template>
  <div class="second-wrap">
    <div class="second-wrap-content">            
      <div class="row-dag">
          <div class="col-dag">
              <img src="../../assets/img/src/index/img_page2_01_png.png" alt="DAG" />
          </div>
          <div class="col-font-dag">
            <div class="font-dag-title">{{secondlist.dagtitle}}</div>
            <div class="font-dag-descibe">{{secondlist.dagdescibe}}</div>
          </div>
      </div>
      <div class="row-contract">
          <div class="col-contract">
              <img src="../../assets/img/src/index/img_page2_02_png.png" alt="project" />
          </div>
          <div class="col-font-contract">
            <div class="font-contract-title">{{secondlist.contracttitle}}</div>
            <div class="font-contract-descibe">{{secondlist.contractdescibe}}</div>
          </div>
      </div>
      <div class="row-chaining">
          <div class="col-chaining">
              <img src="../../assets/img/src/index/img_page2_03_png.png" alt="project" />
          </div>
          <div class="col-font-chaining">
              <div class="font-chaining-title">{{secondlist.chainingtitle}}</div>
            <div class="font-chaining-descibe">{{secondlist.chainingdescibe}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'second',
  data () {
    return {
     secondlist:{},
     secondlist_EN:{
        dagtitle:'DAG',
        dagdescibe:'Redefining trading units to expand to a variety of transaction types.',
        contracttitle:'Smart Contract',
        contractdescibe:'This solves the problem of DAG unable to support smart contracts.',
        chainingtitle:'Multi-chain &  cross-chain',
        chainingdescibe:'A messenger and verifier system will help achieve consensus between chains for communication and transaction confirmation, respectively.',
     },
     secondlist_CN:{
        dagtitle:'DAG',
        dagdescibe:'重新定义交易单元以扩展到各种交易类型',
        contracttitle:'智能合约',
        contractdescibe:'这解决了DAG无法支持智能合约的问题',
        chainingtitle:'多链和交叉链',
        chainingdescibe:'信使和验证者系统将分别帮助实现通信和交易确认链之间的共识',
     }
    }
  },
  mounted(){
      this.secondlist = this.secondlist_EN;
  },
  computed: {
    doneTodosLang(){
        //console.log(this.$store);
        return this.$store.getters.getlang;
    }
  },
   watch: {
    doneTodosLang(val){
      let langcheck = val;
      this.changeLang(langcheck);
    }
  },
  methods:{ 
     changeLang(lang){
      //console.log(lang);
      if(lang === false){
          this.secondlist = this.secondlist_CN;
      }else{
          this.secondlist = this.secondlist_EN;
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//每行混合器
@mixin row-widths($wval, $p1, $p2, $p3) {
    width: 100%;
    clear: both;
        display: inline-block;
        padding-left: 13%;
    // overflow: hidden;
    // padding: $p1 $p2 $p3;
    // width: $wval;
    // margin: 0 auto 30px;
        border: 2px solid transparent;
        &:hover{
        background: #0E152E;
        border: 2px solid #342A5F;
        border-radius: 10px;
        }
}
//图片宽度混合器 159px
@mixin col-widths($normal) {width:$normal;float: left;}
//文字内容
@mixin font-left {float: left;text-align: left;width: 60%;}
//文字标题
@mixin font-title {font-size: 50px;color: #fff;font-weight: 500;}
//文字描述 316px
@mixin font-descibe($normal) {font-size: 18px;color: #fff;font-weight: 500;width: $normal;}

img{
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;	
}

.second-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .second-wrap-content{
      width: 1056px;
    //   padding-left: 13%;
    //   height:526px;
    //   margin-top: 37px;
      text-align: left;
      .row-dag{
        @include row-widths(532px, 19px, 50px, 7px);
        }
      .row-contract{
          @include row-widths(584px, 17px, 50px, 36px);
        }
      .row-chaining{
          padding-top: 50px;
          @include row-widths(888px, 20px, 50px, 36px);
        }
        .col-dag{
           @include col-widths(21%);
        }

        .col-contract{
            margin-top: 20px;
            @include col-widths(24%);
        }

        .col-chaining{
            @include col-widths(21%);
        }
        .col-font-dag{
            margin-left: 6%;
            @include font-left;
        }
        .font-dag-title{
            @include font-title;
        }
        .font-dag-descibe{
            @include font-descibe(316px);
        }

        .col-font-contract{
            margin-left: 3%;
            @include font-left;
        }
        .font-contract-title{
            @include font-title;
        }
        .font-contract-descibe{
            @include font-descibe(403px);
        }

        .col-font-chaining{
            margin-left: 6%;
            @include font-left;
        }
        .font-chaining-title{
            @include font-title;
        }
        .font-chaining-descibe{
            @include font-descibe(630px);
        }
    }
}

@media (max-width: 1366px){
    // .second-wrap .second-wrap-content .row-dag {
    //     height: 170px;
    // }
    // .second-wrap .second-wrap-content .row-contract {
    //     height: 170px;
    // }
}

@media screen and (max-width: 1024px) and (min-width: 0) {
    .second-wrap .second-wrap-content{
        width: 100%;
        text-align: center;
    }
	.second-wrap .second-wrap-content .row-dag,.second-wrap .second-wrap-content .row-contract,.second-wrap .second-wrap-content .row-chaining {
        width: 80%;
        padding: 5% 0 5% 8%;
    }
    
    .second-wrap .second-wrap-content .font-dag-title,.second-wrap .second-wrap-content .font-contract-title,.second-wrap .second-wrap-content .font-chaining-title {
        font-size: 35px;
    }
    .second-wrap .second-wrap-content .font-dag-descibe,.second-wrap .second-wrap-content .font-contract-descibe,.second-wrap .second-wrap-content .font-chaining-descibe{ 
        width: 100%;
    }
}


</style>
