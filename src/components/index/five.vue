<template>
  <div class="five-wrap">
    <div class="five-wrap-content">
        
      <div class="wrap-content-investors" v-for="(item, index) in fivelist" :key="index">
        <div class="investor-margin">
          <img :src="item.src" />
        </div>
      </div>
  
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'five',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fivelist: [{
          src: require('~/assets/img/src/index/img_bishen_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_chainpe_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_dushu_png.png'),
      },
      {
          src: require('~/assets/img/src/index/img_bilai_png.png'),
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

.five-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .five-wrap-content{
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
