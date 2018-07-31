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
                    <li @click="aaa">
                     <a>   {{ !langcheck?'EN':'CN' }}</a>
                    </li>
                </ul>
            </div>
        </span>
       
        <!-- <span class="menu-content-select">
            <select>
                <option selected = "selected">EN</option>
                <option>CN</option>
            </select>
        </span> -->
      </div>
  </header>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      menulist: [{
              text: "首页",
              isActive:true,
            },
            {
              text: "FORUM",
              isActive:false,
            },
            {
              text: "TASK",
              isActive:false,
            },
            {
              text: "CONTECT",
              isActive:false,
            },
            {
              text: "ARTICLE",
              isActive:false,
        }],
        langcheck: true,
        selectshow: false,
    }
  },
  mounted() {
document.addEventListener("click", this.autoHide, false);
},
destroyed() {
document.removeEventListener("click", this.autoHide, false);
},
  methods:{
     aaa(){
         this.langcheck=!this.langcheck;
         alert(222222);
         this.selectshow = false;
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
        width: 60%;
        font-size: 16px;
        .menu-content-item{
            margin: 0 45px;
            width: 48px;
            line-height:50px;
            height:12px;
        }
        .menu-content-select{
            position: relative;
            .menu-content-selectshow{
                position: absolute;
                top: 0px;
                right: 0px;
                width:54px;
                ul {
                    border: 1px solid #000;
    height: auto;
    width: 100%;
    margin-top: 21px;
    text-align: center;
    font-size: 12px;
                    li{
                        padding: 20px 0;
                   height: 25px;
    width: 100%;
    
    line-height: 25px;
    a{ width: 100%;
    height: 100%;
        cursor: pointer;
    }
                }
                }
                
            }
        }


    }
}

</style>
