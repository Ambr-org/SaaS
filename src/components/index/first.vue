<template>
  <div class="first-wrap">
    <div class="first-wrap-content">
      <el-row>
        <el-col :span="12">
          <div class="wrap-content-margin">
            <div class="content-big-font">Ambr</div>
            <div class="content-smail-font">{{ firstlist.titledescribe }}</div>
            <div class="wrap-button-margin">
              <button class="button-left">{{ firstlist.buttonleft }}</button>
              
              <button class="button-right" @click="iconclick(firstlist.buttonherf)"><span>{{firstlist.buttonright}}</span></button>
              
            </div>
            <div class="little-smail-font">{{firstlist.aboutmedia}}</div>
            <div class="icon-media-five">
              <span class="mediaicon  facebook" @click="iconclick('https://www.facebook.com/Ambr-209694159653747/?modal=admin_todo_tour')"></span>
              <span class="mediaicon  instagram" @click="iconclick('https://www.instagram.com/ambrglobal/')"></span>
              <span class="mediaicon  twitter" @click="iconclick('https://mobile.twitter.com/AmbrGlobal')"></span>
              <span class="mediaicon  reddit" @click="iconclick('https://www.reddit.com/')"></span>
              <span class="mediaicon  github" @click="iconclick('https://github.com/Ambr-org/Ambr')"></span>
              <span class="mediaicon  dianbao" @click="iconclick('http://t.me/AmbrGlobal2')"></span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wrap-content-margin">
            <img src="../../assets/img/src/index/img_home_png.png" alt="banner" class="img-home-width"/>

          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'first',
  data () {
    return {
      firstlist_EN:{
        titledescribe: `the First DAG Architecture for Billions of DApps`,
        buttonleft: `Join our developer community `,
        buttonherf:`../static/whitepaper/Ambr_English.pdf`,
        buttonright:`Download white paper`,
        aboutmedia:`About our social media`
      },
      firstlist_CN:{
        titledescribe: `全球首个面向百亿级Dapp的应用架构`,
        buttonleft: `加入我们开发者社区 `,
        buttonherf:`../static/whitepaper/Ambr_Chinese.pdf`,
        buttonright:`下载白皮书`,
        aboutmedia:`社交媒体`
      },
      firstlist:{},
    }
  },
  methods:{
    iconclick(url){
      window.open(url,'_blank')
    },
     changeLang(lang){
      //console.log(lang);
      if(lang === false){
          this.firstlist = this.firstlist_CN;
      }else{
          this.firstlist = this.firstlist_EN;
      }
         //console.log(this.firstlist);
    },
  },
  mounted(){
    this.firstlist = this.firstlist_EN;
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a{text-decoration: none;}
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
            margin: 0 auto;
            width: 98%;
            line-height: 46px;
            background: #0A0F1D;
            opacity: 0.99;
            display: block;
            color: #fff;

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
        .dianbao{
          background: url("../../assets/img/src/index/icon_dianbao_png.png");
        }
      }

    }
}
@media (max-width:1600px){
    .first-wrap .first-wrap-content{width: calc( 100vw - 250px);}
}
@media (max-width:1366px){
    .img-home-width {
      width: 550px;
    }
}
@media (max-width:1024px){
    .first-wrap .first-wrap-content{
      width: 100%;
      text-align: center;
    }
    .el-col-12{width: 100%;}

    .first-wrap .first-wrap-content .wrap-content-margin .content-smail-font {
      display: none;
    }
    .first-wrap .first-wrap-content .little-smail-font {
      display: none;
    }
    .first-wrap .first-wrap-content .wrap-content-margin{text-align:center;}
    .first-wrap .first-wrap-content .wrap-button-margin{
      text-align: center;
      margin:0px;
    }
    .img-home-width {
      width: 250px;
      margin-top: 25px;
    }
    .first-wrap .first-wrap-content .icon-media-five {
      margin: 47px auto 0px;
      text-align: center;
    }
    .first-wrap .first-wrap-content .icon-media-five .mediaicon {
      margin: 0px 18px;
    }
    .first-wrap .first-wrap-content .wrap-button-margin .button-right {
      margin-top: 20px;
    }
}
</style>
