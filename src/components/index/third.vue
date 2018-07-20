<template>
  <div class="third-wrap">
    <div class="third-wrap-content">
        
      <div class="wrap-content-person" v-for="(item, index) in thirdlist" :key="index">
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
  name: 'third',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      thirdlist: [{
          src: require('~/assets/img/src/index/img__charlesjia_png.png'),
          name: `Charles Jia`,
          describe: `He has been a blockchain practitioner and has extensive industry experience. He has developed and participated in various blockchain platforms and participated in Dubai Future Accelerator blockchain project.`,
      },
      {
          src: require('~/assets/img/src/index/img_jingzhongxu_png.png'),
          name: `Jingzhong Xu`,
          describe: `He holds a master's degree in software from Zhejiang University. He has extensive experience in the risk control of internet finance and a senior developer of blockchain technology.`,
      },
      {
          src: require('~/assets/img/src/index/img_judithhong_png.png'),
          name: `Judith Hong`,
          describe: `Judith is the only Chinese and English bilingual partner of Fogler Robinoff LLP. He successfully assisted many well-known Chinese companies in listing in North America and has extensive economic and legal experience.`,
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

.third-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .third-wrap-content{
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
