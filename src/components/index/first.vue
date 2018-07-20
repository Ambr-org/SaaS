<template>
  <div class="first-wrap">
    <div class="first-wrap-content">
      <el-row>
        <el-col :span="12">
          <div class="wrap-content-margin">
            <div class="content-big-font">Ambr</div>
            <div class="content-smail-font">the First DAG Architecture for Billions of DApps</div>
            <div class="wrap-button-margin">
              <button class="button-left">Join our developer community </button>
              <button class="button-right"><span>Download white paper</span></button>
            </div>
            <div class="little-smail-font">About our social media</div>
            <div class="icon-media-five">
              <span class="mediaicon  facebook"></span>
              <span class="mediaicon  instagram"></span>
              <span class="mediaicon  twitter"></span>
              <span class="mediaicon  reddit"></span>
              <span class="mediaicon  github"></span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wrap-content-margin">
            <img src="../../assets/img/src/index/img_home_png.png" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.first-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: center;
    justify-content: center;
    .first-wrap-content{
      width: calc( 100vw - 560px );
      height:526px;

      .wrap-content-margin{
        text-align: left;
        color: #fff;
        font-weight: bold;
        .content-big-font{
          font-size:45px;
          font-family:Candara-Bold;
          line-height:120px;
        }
        .content-smail-font{
          font-size:15px;
        }
      }
      .wrap-button-margin{
        margin-top: 57px;
        text-align: left;
        font-size:20px;
        .button-left{
          background: linear-gradient(to left, #9D62FE , #4ABAD0); 
          width:275px;
          height:54px;
          opacity:0.99;
          color: #fff;
          border-radius:10px;
          border: none;
          outline: 0;
        }
        .button-right{
          background: linear-gradient(to top left, #9D62FE , #4ABAD0); 
          width:218px;
          height:54px;
          opacity:0.99;
          border-radius:10px;
          border: 2px solid;
          text-align: center;
          outline: 0;

          &>span{
            background: #0A0F1D;
            opacity:0.99;
            color: #fff;
            padding: 15px 38px;
            border-radius: 7px;
          }
        }
      }
      .little-smail-font{
          margin-top: 47px;
          font-size:20px;
          font-weight: 500;
      }
      .icon-media-five{
        margin-top: 47px;
        .mediaicon{
          width:35px;
          height:35px;
          display: block;
          float: left;
          margin-right: 39px;
        }
        .facebook{
          background: url("../../assets/img/src/index/icon_facebook_png.png");
        }
        .instagram{
          background: url("../../assets/img/src/index/icon_instagram_png.png");
        }
        .twitter{
          background: url("../../assets/img/src/index/icon_twitter_png.png");
        }
        .reddit{
          background: url("../../assets/img/src/index/icon_reddit_png.png");
        }
        .github{
          background: url("../../assets/img/src/index/icon_github_png.png");
        }
      }

    }
}
</style>
