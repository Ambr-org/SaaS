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
            <div class="little-knownsec-font" v-html="firstlist.knownsec"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="wrap-content-margin wrap-mobile-img">
            <img src="../../assets/img/src/index/img_home_png.png" alt="banner" class="img-home-width"/>
          </div>
          <div class="mobile-icon">
            <div class="little-smail-font">{{firstlist.aboutmedia}}</div>
            <div class="icon-media-five">
              <span class="mediaicon  facebook" @click="iconclick('https://www.facebook.com/Ambr-209694159653747/?modal=admin_todo_tour')"></span>
              <span class="mediaicon  instagram" @click="iconclick('https://www.instagram.com/ambrglobal/')"></span>
              <span class="mediaicon  twitter" @click="iconclick('https://mobile.twitter.com/AmbrGlobal')"></span>
              <span class="mediaicon  reddit" @click="iconclick('https://www.reddit.com/')"></span>
              <span class="mediaicon  github" @click="iconclick('https://github.com/Ambr-org/Ambr')"></span>
              <span class="mediaicon  dianbao" @click="iconclick('http://t.me/AmbrGlobal2')"></span>
            </div>
            <!-- <div></div> -->
            <div class="little-knownsec-font" v-html="firstlist.knownsec"></div>
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
        aboutmedia:`About our social media`,
        knownsec: `The security of Ambr is provided by<a href="https://www.knownsec.com" target="_blank">KNOWNSEC.COM</a>`
      },
      firstlist_CN:{
        titledescribe: `全球首个面向百亿级Dapp的应用架构`,
        buttonleft: `加入我们开发者社区 `,
        buttonherf:`../static/whitepaper/Ambr_Chinese.pdf`,
        buttonright:`下载白皮书`,
        aboutmedia:`社交媒体`,
        knownsec:`本项目安全由知道创宇独家提供<a href="https://www.knownsec.com" target="_blank">KNOWNSEC.COM</a>`
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
      .mobile-icon{
        display: none;
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
      .little-knownsec-font{
        clear: both;
        color: #fff;
        padding: 25px 0;
        font-size: 22px;
        &>a:link {
          text-decoration: underline;
        }
        &>a:link, &>a:visited, &>a:hover, &>a:active {
            color: #6897DF;
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

@media screen and (max-width: 1024px) and (min-width: 0) {
    .first-wrap {
      display: flex;
      flex-direction: column;
      padding-left: 10%;
      justify-content: flex-start;
    }
    .first-wrap .first-wrap-content{
      width: 100%;
      text-align: center;
    }
    .el-col-12{width: 80%;}
    .first-wrap .first-wrap-content .wrap-content-margin .content-big-font{
      font-size: 90px;
      font-family:Roboto-Medium;
    }
    .first-wrap .first-wrap-content .wrap-content-margin .content-smail-font {
      font-size: 36px;
      font-family:Roboto-Medium;
    }
    .first-wrap .first-wrap-content .wrap-button-margin{
      width: 25%;
    }
    .first-wrap .first-wrap-content .wrap-button-margin .button-left{
      margin-bottom: 10%
    }
    .first-wrap .first-wrap-content .little-smail-font {
      display: none;
    }
    .first-wrap .first-wrap-content .icon-media-five{
      display: none;
    }
    .first-wrap .first-wrap-content .little-knownsec-font{
      display: none;
    }
    .first-wrap .first-wrap-content .wrap-mobile-img {
      margin-top: 7%;
    }
    .wrap-mobile-img .img-home-width{
      width: 80%;
      height: 35%;
    }
    .mobile-icon{
      display: block !important;
      text-align: left;
      .little-smail-font {
        font-size:22px;
        font-family:Roboto-Regular;
        color:rgba(255,255,255,1);
        display: block !important;
      }
      .icon-media-five{
        display: block !important;
        margin: 2% 0;
        padding: 0 0 4% 0px;
      }
      .little-knownsec-font{
        display: block !important;
        clear:both;
      }
    }
}
// @media (max-width:1024px){
//     .first-wrap .first-wrap-content{
//       width: 100%;
//       text-align: center;
//     }
//     .el-col-12{width: 100%;}

//     .first-wrap .first-wrap-content .wrap-content-margin .content-smail-font {
//       display: none;
//     }
//     .first-wrap .first-wrap-content .little-smail-font {
//       display: none;
//     }
//     .first-wrap .first-wrap-content .wrap-content-margin{text-align:center;}
//     .first-wrap .first-wrap-content .wrap-button-margin{
//       text-align: center;
//       margin:0px;
//     }
//     .img-home-width {
//       width: 250px;
//       margin-top: 25px;
//     }
//     .first-wrap .first-wrap-content .icon-media-five {
//       margin: 47px auto 0px;
//       text-align: center;
//     }
//     .first-wrap .first-wrap-content .icon-media-five .mediaicon {
//       margin: 0px 18px;
//     }
//     .first-wrap .first-wrap-content .wrap-button-margin .button-right {
//       margin-top: 20px;
//     }
// }

@media screen and(min-width: 320px)and(max-width: 359px){ 
  
} 
@media screen and(min-width: 360px)and(max-width: 374px){ 
    
} 
@media screen and(min-width: 375px)and(max-width: 385px){ 
    .first-wrap .first-wrap-content .wrap-content-margin .content-big-font{
      font-size: 45px;
      line-height: 30px;
    }
    .first-wrap .first-wrap-content .wrap-content-margin .content-smail-font {
      font-size: 18px;
      line-height: 50px;
    }
    .first-wrap .first-wrap-content .wrap-button-margin{
      margin-top: 12px;
    }
    .first-wrap .first-wrap-content .little-smail-font {
      margin-top: 0px;
      font-size: 12px;   
    }
    .first-wrap .first-wrap-content .icon-media-five {
      margin-top: 10px;
    }
    .first-wrap .first-wrap-content .icon-media-five .mediaicon{margin-right: 14px;}
    .first-wrap .first-wrap-content .little-knownsec-font{font-size: 12px;}
} 
@media screen and(min-width: 386px)and(max-width: 392px) { 

} 
@media screen and(min-width: 393px)and(max-width: 400px){ 

} 
@media screen and(min-width: 401px)and(max-width: 414px){ 
    
} 
@media screen and(min-width: 414px)and (max-width: 767px) {

}

@media (min-width: 768px) and (max-width:991px) {
   
}

@media (min-width: 992px) and (max-width:1199px) {
   
}

// @media screen and (max-width: 1024px) and (min-width: 0) {
//     .first-wrap {
//       display: flex;
//       flex-direction: column;
//       padding-left: 10%;
//       justify-content: flex-start;
//     }
//     .first-wrap .first-wrap-content{
//       width: 100%;
//       text-align: center;
//     }
//     .el-col-12{width: 100%;}
//     .first-wrap .first-wrap-content .wrap-content-margin .content-big-font{
//       font-size: 90px;
//       font-family:Roboto-Medium;
//     }
//     .first-wrap .first-wrap-content .wrap-content-margin .content-smail-font {
//       font-size: 36px;
//       font-family:Roboto-Medium;
//     }
//     .first-wrap .first-wrap-content .wrap-button-margin{
//       width: 25%;
//     }
//     .first-wrap .first-wrap-content .wrap-button-margin .button-left{
//       margin-bottom: 10%
//     }
//     .first-wrap .first-wrap-content .little-smail-font {
//       display: none;
//     }
//     .first-wrap .first-wrap-content .icon-media-five{
//       display: none;
//     }
//     .first-wrap .first-wrap-content .little-knownsec-font{
//       display: none;
//     }
//     .first-wrap .first-wrap-content .wrap-mobile-img {
//       margin-top: 7%;
//     }
//     .wrap-mobile-img .img-home-width{
//       width: 80%;
//       height: 35%;
//     }
//     .mobile-icon{
//       display: block !important;
//       text-align: left;
//       .little-smail-font {
//         font-size:22px;
//         font-family:Roboto-Regular;
//         color:rgba(255,255,255,1);
//         display: block !important;
//       }
//       .icon-media-five{
//         display: block !important;
//         margin: 2% 0;
//         padding: 0 0 4% 0px;
//       }
//       .little-knownsec-font{
//         display: block !important;
//         clear:both;
//       }
//     }
// }	
</style>
