<template>
  <footer style='background-color:#0A0F1D;background-position:center center; background-repeat:no-repeat;height: 350px;'> 
      <div  class="footer-warp">
        <div class="footer-title-content">
            {{footlist.newspaper}}
        </div>
        <div class="foot-input">
            <input type="text" class="input-email" placeholder="Enter  your email address" />
            <span  class="rotateicon el-icon-back"></span>
        </div>
        <div style="display:flex;justify-content: space-between;margin: 40px 0px;">
            <span>{{footlist.footright}}</span>
            <span>
                <div class="icon-media-five">
                    <span class="mediaicon  facebook" @click="iconclick('https://www.facebook.com/Ambr-209694159653747/?modal=admin_todo_tour')"></span>
                    <span class="mediaicon  instagram" @click="iconclick('https://www.instagram.com/ambrglobal/')"></span>
                    <span class="mediaicon  twitter" @click="iconclick('https://mobile.twitter.com/AmbrGlobal')"></span>
                    <span class="mediaicon  reddit" @click="iconclick('https://www.reddit.com/')"></span>
                    <span class="mediaicon  github" @click="iconclick('https://github.com/Ambr-org/Ambr')"></span>
                    <span class="mediaicon  dianbao" @click="iconclick('http://t.me/AmbrGlobal2')"></span>
                </div>
            </span>
        </div>
      </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'footer',
  data () {
    return {
     footlist:{},
     footlist_EN:{
        newspaper:'Subscribe to electronic newspapers',
        footright:'© Ambr. All Right Reserved 2018.',
     },
     footlist_CN:{
        newspaper:'订阅电子报',
        footright:'© Ambr. 版权所有2018年。',
     }
    }
  },
  mounted(){
      this.footlist = this.footlist_EN;
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
          this.footlist = this.footlist_CN;
      }else{
          this.footlist = this.footlist_EN;
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//@import '../../../style/scss/variables.scss'
ol,ul{list-style:none;}
.footer-warp{
    font-size: 16px;
    color:rgba(255,255,255,1);
    width: calc( 100vw - 560px );
    height: 129px;
    line-height: 129px;
    margin: 0 auto;
    text-align: center;
    .footer-title-content{
        height:28px;
        font-size:30px;
        font-family:Candara-Bold;
        color:rgba(255,255,255,1);
    }
    .foot-input{margin-top: 36px;height: 76px;position:relative;}
    .input-email{
        width:476px;
        height:100%;
        background:rgba(91,130,211,0.58);
        color: #fff;
        border-radius:38px;
        border: 0px;
        font-size: 22px;
        text-indent: 20px;
    }

    .rotateicon{
        width: 138px;
        height: 68px;
        background: white;
        opacity: 0.9;
        border-radius: 40px;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        color: #5B82D3;
        font-size: 46px;
        line-height: 65px;
        position: absolute;
        top: 29px;
        left: 57%;
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
@media (max-width:1600px){
    .footer-warp .rotateicon {
      top: 28px;
      left: 59%;
    }
}

@media (max-width:1366px){
    .footer-warp .rotateicon {
      left: 62%;
    }
}
@media (max-width:1024px){
    .footer-warp {
      height: 0px;
    line-height: 40px;
    text-align: center;
    margin-top: 30px;
    width: 100%;
    }
    .footer-warp .foot-input{margin-top: 66px;}
    .footer-warp .input-email{width: 90%;}
    .footer-warp .rotateicon {
    top: 5%;
    left: 60%;
    }
    .footer-warp .icon-media-five {
  
    margin: 3% 0 0 7%;
}
}
</style>
