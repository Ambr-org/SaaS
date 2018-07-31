<template>
  <ul>
    <li v-for="(item ,index) in pagecount"  :key="index" :class="curpagenum === index+1?'active':''">
      <span>{{index}}</span>
    </li>  
 </ul>
</template>

<script>
export default {
  name: 'progress',
  data () {
    return {
      pagecount: 9,
      curpagenum :2,
    }
  },
  props: {
     pagenum: {
      type: Number,
      default: 2
    },
  },
  watch: {
    pagenum: function (val) {
      this.curpagenum = val;
    },
  },
  mounted () {
    //console.log(this.curpagenum);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{ list-style:none;}

li{ width: 15px;
    height: 15px;
    background: #86c6cf;
    margin-bottom: 58px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 2px 6px #35798a1f;}
    li>span{position:absolute; color:#fff; font-size:12px;top: 40px;right: 49px;display:none;}
    li.active>span{display:block;}
    li:nth-of-type(1){
     width: 20px;
    height: 20px;
    background: #86c6cf;
    margin-bottom: 58px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 2px 6px #35798a1f;
    right: 9%;}
    li:nth-of-type(1):before{content: 'Top';
    width: 10px;
    height: 35px;
    border:none;
    color:#fff;
    font-size: 12px;
    top: 2px;
    left: 1px;
    position: absolute;}
    li:nth-of-type(1):after{content: '';
    width: 10px;
    height: 35px;
    border-left: 1px solid #86c6cf;
    top: 26px;
    left: 8px;
    position: absolute;}
li:after{content: '';
    width: 10px;
    height: 35px;
    border-left: 1px solid #86c6cf;
    top: 26px;
    left: 6px;
    position: absolute;}
li:nth-last-of-type(1):after{content:'';width:10px;height:10px;border:0px;}

li.active:after {
    content: '';
    transition: all 1s ease;
    transform: translateX(-18px) rotate(45deg) scale(.7);
    border-bottom: 2px solid #86c6cf;
    top: 16px;
    width: 60px;
    height: 60px;
    left: -7px;
}

li.active{
  transform: translateY(-7px);
}
</style>
