<template>
  <div class="six-wrap">
    <div class="six-wrap-content">
        <!-- firstpart -->
        <div class="first-head">
            <div class="head-title">{{sixlist.one}}</div>     
            <div class="q3-content">
                <p>Q3</p>
                <p>2018</p>
            </div>
            <div class="line1"></div>
            <div class="q4-content">
                <p>Q4</p>
                <p>2018</p>
            </div>
            <div class="line2"></div>
            <div class="end-title">{{sixlist.two}}</div>
        </div>
        <!-- secondpart -->
        <div class="second-center">
            <div class="head-title">{{sixlist.three}}</div>     
            <div class="q3-content">
                <p>Q1</p>
                <p>2019</p>
            </div>
            <div class="line1"></div>
            <div class="q4-content">
                <p>Q2</p>
                <p>2019</p>
            </div>
            <div class="line2"></div>
            <div class="end-title">{{sixlist.four}}</div>
        </div>
        <!-- thirdpart -->
        <div class="third-end">
            <div class="head-title">{{sixlist.five}}</div>     
            <div class="q3-content">
                <p>Q3</p>
                <p>2019</p>
            </div>
            <div class="line1"></div>
            <div class="q4-content">
                <p>Q4</p>
                <p>2019</p>
            </div>
            <div class="end-title">{{sixlist.six}}</div>
        </div>
       <div></div>
       <div></div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'six',
  data () {
    return {
      sixlist_EN: {
          one:`Main network on line`,
          two:`Smart contract function improved`,
          three:`Smart contract officially lanuched`,
          four:`Cross chain Demo`,
          five:`Partial cross chain function realized`,
          six:`Stay tuned`
      },
      sixlist_CN: {
          one:`主网络上线`,
          two:`智能合约功能的完善`,
          three:`智能合约正式启动`,
          four:`交叉链演示`,
          five:`部分交叉链功能被实现`,
          six:`敬请关注`
      },
      sixlist:{}
    }
  },
  mounted(){
      this.sixlist = this.sixlist_EN;
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
          this.sixlist = this.sixlist_CN;
      }else{
          this.sixlist = this.sixlist_EN;
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//every title
@mixin height-titles($widths, $tops, $lefts) {
    width: $widths;
    height:13px;
    font-size: 16px;
    font-family:PingHei-Light;
    color:rgba(255,255,255,1);
    position: absolute;
    top: $tops;
    left: $lefts;
}
//圆圈内字体大
@mixin font-big {
    font-size:60px;
    font-family:PingHei-Light;
    color:rgba(255,255,255,1);
}
//圆圈内字体小
@mixin font-small {
    font-size:34px;
    font-family:PingHei-Light;
    color:rgba(255,255,255,1);
}
//green circle
@mixin green-content($tops, $lefts) {
    width: 147px;
    height: 147px;
    background: #49b4ce;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 20px #49b4ce6e;
    position: absolute;
    top: $tops;
    left: $lefts;
    text-align: center;
    z-index: 22;
}
//purple circle
@mixin purple-content($tops, $lefts) {
    width: 147px;
    height: 147px;
    background: #788AE9;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 20px #788ae961;
    position: absolute;
    top: $tops;
    left: $lefts;
    text-align: center;
    z-index: 22;
}

//line connent
%line{
    width: 280px;
    height: 280px;
    border-radius: 50%;
    position: absolute;              
}


img{
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;	
}


.six-wrap{

    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .six-wrap-content{
        min-width: 1018px;
        width: auto;
        height:526px;
        margin-top: 37px;
        display: flex;
        flex-wrap: nowrap;
        margin-right: 130px;
        margin-top: 90px;
       .first-head{
           flex: 0 0 33%;
           position: relative;
           .head-title{
               @include height-titles(167px, 0px, 0px);
           }
           
           .q3-content{
                @include green-content(61px, 0px);
                & p:nth-of-type(1){
                    @include font-big;
                }
                & p:nth-of-type(2){
                    @include font-small;
                }

           }
           .line1{
                @extend %line;
                border-left: 3px solid #49b4ce;
                top: 75px;
                left: 79px;
                transform: rotate(-38deg);
           }
           .q4-content{
                @include purple-content(293px, 223px);
                & p:nth-of-type(1){
                    @include font-big;
                }
                & p:nth-of-type(2){
                    @include font-small;
                }
           }
           .line2{
              @extend %line;
                border-left: 3px solid #788AE9;
                border-radius: 50%;
                top: 121px;
                left: 287px;
                transform: rotate(25deg);
           }
           .end-title{
               @include height-titles(272px, 485px, 162px);
           }
       }
       .second-center{
           flex: 0 0 33%;
           position: relative;

           .head-title{
               @include height-titles(275px, 0px, 0px);
           }
           
           .q3-content{
                @include green-content(61px, 61px);
                & p:nth-of-type(1){
                    @include font-big;
                }
                & p:nth-of-type(2){
                    @include font-small;
                }

           }
           .line1{
                @extend %line;
                border-left: 3px solid #49b4ce;
                top: 78px;
                left: 125px;
                transform: rotate(-38deg);
           }
           .q4-content{
                @include purple-content(293px, 270px);
                & p:nth-of-type(1){
                    @include font-big;
                }
                & p:nth-of-type(2){
                    @include font-small;
                }
           }
           .line2{
              @extend %line;
                border-left: 3px solid #788AE9;
                border-radius: 50%;
                top: 121px;
                left: 338px;
                transform: rotate(25deg);
           }
           .end-title{
               @include height-titles(272px, 485px, 162px);
           }
       }
       .third-end{
           flex: 0 0 33%;
           position: relative;
           .head-title{
               @include height-titles(275px, 0px, 60px);
           }
           
           .q3-content{
                @include green-content(61px, 115px);
                & p:nth-of-type(1){
                    @include font-big;
                }
                & p:nth-of-type(2){
                    @include font-small;
                }

           }
           .line1{
                @extend %line;
                border-left: 3px solid #49b4ce;
                top: 78px;
                left: 179px;
                transform: rotate(-38deg);
           }
           .q4-content{
                @include purple-content(293px, 300px);
                & p:nth-of-type(1){
                    @include font-big;
                }
                & p:nth-of-type(2){
                    @include font-small;
                }
           }
           
           .end-title{
               @include height-titles(272px, 485px, 246px);
           }
       }
    }
}
@media (max-width: 1366px){
    .six-wrap .six-wrap-content{margin-top:0px;}
}


</style>
