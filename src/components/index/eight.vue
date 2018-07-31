<template>
  <div class="eight-wrap">
    <div class="eight-wrap-content">
       <div>
           <video class="videoclass" style=""  controls="controls"  preload="none"   width="1053" height="554" title="Ambr"
           v-html="eightlist">
               
            </video>
       </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'eight',
  data () {
    return {
      eightlist:'',
      
    }
  },
  mounted(){
      this.eightlist = `<source src="./../../../static/video/video_en.mp4" />`;
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
           this.eightlist = `<source src="./../../../static/video/video_cn.mp4" />`
      }else{
           this.eightlist = `<source src="./../../../static/video/video_en.mp4" />`
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//every title
@mixin height-titles($widths, $tops, $lefts) {
    width: $widths;
    height:13px;
    font-size: 16px;
    font-family:PingHei-Light;
    color:rgba(255,255,255,1);
    position: absolute;
    top: $tops;
    left: $lefts;
}
//圆圈内字体大
@mixin font-big {
    font-size:60px;
    font-family:PingHei-Light;
    color:rgba(255,255,255,1);
}
//圆圈内字体小
@mixin font-small {
    font-size:34px;
    font-family:PingHei-Light;
    color:rgba(255,255,255,1);
}
//green circle
@mixin green-content($tops, $lefts) {
    width: 147px;
    height: 147px;
    background: #49b4ce;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 20px #49b4ce6e;
    position: absolute;
    top: $tops;
    left: $lefts;
    text-align: center;
    z-index: 22;
}
//purple circle
@mixin purple-content($tops, $lefts) {
    width: 147px;
    height: 147px;
    background: #788AE9;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 20px #788ae961;
    position: absolute;
    top: $tops;
    left: $lefts;
    text-align: center;
    z-index: 22;
}

//line connent
%line{
    width: 280px;
    height: 280px;
    border-radius: 50%;
    position: absolute;              
}

img{
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;	
}

.six-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .six-wrap-content{
        min-width: 1018px;
        width: auto;
        height:526px;
        margin-top: 37px;
        display: flex;
        flex-wrap: nowrap;
        margin-right: 130px;
        margin-top: 90px;
       
        .videoclass{
            float: none;margin: 60px 0px 0px 0px;width: 1053px;height: 554px;border: 1px solid #5B82D3;border-radius: 10px;box-shadow: rgb(255, 255, 255) 0px 0px 0px 1px;
        }
    }
}
@media (max-width: 1366px){
    .videoclass{
        margin: 0px;
        height: 500px;
    }
}
</style>
