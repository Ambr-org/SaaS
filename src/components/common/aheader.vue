<template>
  <header class="header-warp">
      <div class="header-logo-content">
          <span class="logo-content-img"></span>
          <span class="logo-content-font">Ambr</span>
      </div>
      <div class="header-menu-content">
          <span v-for="(menu, index) in menulist" class="menu-content-item" :class="{active: menu.isActive}" :key="index" >{{ menu.text }}</span>
        <span class="menu-content-select"><div style="display:inline-block; width:54px;height:22px;background:rgba(44,146,165,1);color: #fff;font-size:12px;line-height: 22px;
    text-align: center;" @click="selectshow=!selectshow">{{ langcheck?'EN':'CN' }}</div>
            <div class="menu-content-selectshow" v-show="selectshow == true">
                <ul>
                    <li @click="changelang">
                     <a>   {{ !langcheck?'EN':'CN' }}</a>
                    </li>
                </ul>
            </div>
        </span>
       
    
      </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'header',
  data () {
    return {
      menulist: [{
              text: "HOME",//主页
              isActive:true,
            },
            {
              text: "FORUM",//论坛
              isActive:false,
            },
            {
              text: "TASK",//任务发布
              isActive:false,
            },
            {
              text: "CONTECT",//联系我们
              isActive:false,
            },
            {
              text: "ARTICLE",//文章
              isActive:false,
        }],
        menulist_CN: [{
              text: "HOME",//主页
              isActive:true,
            },
            {
              text: "FORUM",//论坛
              isActive:false,
            },
            {
              text: "TASK",//任务发布
              isActive:false,
            },
            {
              text: "CONTECT",//联系我们
              isActive:false,
            },
            {
              text: "ARTICLE",//文章
              isActive:false,
        }],
        menulist_EN: [{
              text: "主页",//主页
              isActive:true,
            },
            {
              text: "论坛",//论坛
              isActive:false,
            },
            {
              text: "任务发布",//任务发布
              isActive:false,
            },
            {
              text: "联系我们",//联系我们
              isActive:false,
            },
            {
              text: "文章",//文章
              isActive:false,
        }],
        langcheck: true,
        selectshow: false,
    }
  },
  mounted() {
     // console.log(this.doneTodosLang);
    document.addEventListener("click", this.autoHide, false);
  },
  destroyed() {
    document.removeEventListener("click", this.autoHide, false);
  },
  computed: {
    doneTodosLang(){
        //console.log(this.$store);
        return this.$store.getters.getlang;
    }
  },
  methods:{  
     changelang(){
         this.langcheck=!this.langcheck;
         this.selectshow = false;
         if(this.langcheck === true){
             this.menulist = this.menulist_CN;
         }else{
             this.menulist = this.menulist_EN;
         }
        this.$store.commit('changelang');
     },
     autoHide(evt) { 
        if (!this.$el.contains(evt.target)) {
            this.selectshow = false;
       }
    },  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//@import '../../../style/scss/variables.scss'
ol,ul{list-style:none;}
a{text-decoration: none;}

.header-warp{
    font-size: 16px;
    color:rgb(134, 198, 207);
    width: calc( 100vw - 560px );
    height: 129px;
    line-height: 129px;
    margin: 0 auto;
    text-align: left;
    background-color: transparent;
    .header-logo-content{
        float: left;
        cursor: pointer;
        .logo-content-img{
            width: 56px;
            height: 61px;
            // background: url("~assets/img/src/index/img_logo_png.png");
            background: url("../../assets/img/src/index/img_logo_png.png");
            display: block;
            float: left;
            margin-top: 17px;
        }
        .logo-content-font{
            display: block;
            width:71px;
            height: 61px;
            line-height: 100px;
            font-size:27px;
            float: left;
            margin-left: 21px;
        }
    }
    .header-menu-content{
        float: right;
        text-align: left;
        height: 100%;
        line-height: 100px;
        overflow: hidden;
        font-size: 16px;
        .menu-content-item{
            margin: 0 45px;
            width: 48px;
            line-height:50px;
            height:12px;
            padding-bottom: 10px;
            cursor: pointer;
            &:hover{
                border-bottom: 2px solid #2C92A5;
            }
        }
        .active {
            border-bottom: 2px solid #2C92A5;
        }
        .menu-content-select{
            position: relative;
            cursor: pointer;
            .menu-content-selectshow{
                position: absolute;
                top: 0px;
                right: 0px;
                width:54px;
                ul {
                    border: none;
                    height: auto;
                    width: 100%;
                    margin-top: 21px;
                    text-align: center;
                    font-size: 12px;
                    li{
                        height: 25px;
                        width: 100%;
                        line-height: 25px;
                        a{ 
                            width: 100%;
                            height: 100%;
                            cursor: pointer;
                            padding: 4px 20px;
                            &:hover{
                                color: #86c6cf;
                                
                            }
                        }
                        
                }
                }
                
            }
        }


    }
}

@media (max-width:1600px){
    .header-warp{width: calc( 100vw - 250px);}
}
@media (max-width:1366px){
    .header-warp .header-menu-content .menu-content-item {  margin: 0 30px; }
}
@media (max-width:1024px){
    .header-warp{ width: 100%; margin-left: 20px;}
    .header-menu-content{display:none;}
}
</style>
