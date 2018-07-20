<template>
  <div class="four-wrap">
    <div class="four-wrap-content">
        
      <div class="wrap-content-person" v-for="(item, index) in fourlist" :key="index">
        <div class="person-margin">
          <img :src="item.src" />
        </div>
        <div class="name-margin">
          {{ item.name }}
        </div>
        <div class="describe-margin">
          {{ item.describe }}
        </div>
        <div>
          <button class="button-style">Linkedin</button>
        </div>
      </div>
  
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'four',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fourlist: [{
          src: require('~/assets/img/src/index/img_SrinivasonKeshav_png.png'),
          name: `Srinivason Keshav`,
          describe: `Professor at Waterloo University, Associate Professor at Cornell University, Ph.D. Now he provides technical support and research for Ambr.`,
      },
      {
          src: require('~/assets/img/src/index/img_Geleifen_png.png'),
          name: `Geleifen`,
          describe: `Group Chairman and CEO of Baryon Corporation and Director of Internation
al Trade ouncil, US Department of Commerce He has participated in and led over $800,000,000 of capital placement and participated in 11 IPOs in five countries.`,
      },
      {
          src: require('~/assets/img/src/index/img_WangweiHe_png.png'),
          name: `Wangwei He`,
          describe: `Vice President of the Zhejiang Blockchain Technology Application Association, founder and CEO of Hangzhou YiBei Ltd. , he has a decade of experience in the telecom industry, Yibei has conducted in-depth research on blockchain based IoT applications.`,
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//每行混合器
@mixin row-widths($normal) {height: 214px; overflow: hidden;padding: 0 $normal;}
//图片宽度混合器 159px
@mixin col-widths($normal) {width:$normal;float: left;}
//文字内容
@mixin font-left {float: left;text-align: left;margin-left: 45px;}
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

.four-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .four-wrap-content{
      max-width: 1018px;
      height:526px;
      margin-top: 37px;
      display: flex;
      .wrap-content-person{
        width: 331px;
        height: 462px;
        background-color: rgba(34,59,129,0.29);
        border-radius:10px;
        flex: 0 0 33%;
        margin-right: 64px;
        .person-margin{
          margin-top: 21px;
        }
        .name-margin {
          margin-top: 21px;
          height:18px;
          font-size:24px;
          color:rgba(71,182,206,1);
          line-height: 25px;
        }

        .describe-margin{
          padding: 26px;
          height: 83px;
          font-size: 12px;
          font-family: Candara;
          color: white;
          line-height: 18px;
        }
        .button-style{
          width:84px;
          height:27px;
          background:transparent;
          border: 1px solid #2C92A5;
          color: #fff;
        }
      }
    }
}

</style>
