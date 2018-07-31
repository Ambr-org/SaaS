<template>
  <div class="seven-wrap">
    <div class="seven-wrap-content">
        
      <div class="wrap-content-investors" v-for="(item, index) in sevenlist" :key="index">
        <div class="investor-margin" @click="iconclick(item.url)">
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
          url: `https://www.prnasia.com`,
      },
      {
          src: require('~/assets/img/src/index/img_businessinsider_png.png'),
          url: `http://markets.businessinsider.com/news/stocks/ambr-the-asynchronous-smart-contract-and-cross-chain-platform-with-infinite-augmentability-1027318905`,
      },
      {
          src: require('~/assets/img/src/index/img_wandiancaijing_png.png'),
          url: `http://www.windin.com/windin2/Index.htm`,
      },
      {
          src: require('~/assets/img/src/index/img_nk_png.png'),
          url: `http://www.im2maker.com/news/20180327/b1e534f7d2ce84f1.html`,
      },
      {
          src: require('~/assets/img/src/index/img_yahoo_png.png'),
          url: `https://finance.yahoo.com/news/ambr-asynchronous-smart-contract-cross-132900816.html`,
      },
      {
          src: require('~/assets/img/src/index/img_ccn_png.png'),
          url: `http://www.cryptocurrencydirectory.com/crypto-currency-news.php?rkey=20180626CN38165&filter=7152`,
      }]
    }
  },
  methods:{
    iconclick(url){
      window.open(url,'_blank')
    },
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
a{text-decoration: none;cursor: pointer;}
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
@media (max-width:1024px){
    .seven-wrap .seven-wrap-content {
      text-align: center;
    }

    .seven-wrap .seven-wrap-content .wrap-content-investors {
    
    margin: 0 auto;
}
}

</style>
