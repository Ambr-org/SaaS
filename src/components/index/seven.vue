<template>
  <div class="seven-wrap">
    <div class="seven-wrap-content">
        
      <div class="wrap-content-investors" v-for="(item, index) in sevenlist" :key="index">
        <div class="investor-margin">
          <img :src="item.src" />
        </div>
      </div>
  
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'seven',
  data () {
    return {
      sevenlist: [{
          src: require('~/assets/img/src/index/img_meitong_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_businessinsider_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_wandiancaijing_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_nk_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_yahoo_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_ccn_png.png'),
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

.seven-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .seven-wrap-content{
      max-width: 1018px;
      height:526px;
      margin-top: 37px;
      display: flex;
      flex-wrap: wrap;
      .wrap-content-investors{
        width:403px;
        height:200px;
        flex: 0 0 33%;
        margin-right: 3px;
        .investor-margin{
            width: 300px;
        }
      }
    }
}

</style>
