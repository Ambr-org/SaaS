<template>
  <div class="four-wrap">
    <div class="four-wrap-content">

      <div class="wrap-content-person" :style="{ 'transform': transform, '-ms-transform': transform, '-webkit-transform': transform,'-moz-transform': transform}" v-for="(item, index) in fourlist" :key="index">

        <div class="person-margin">
          <img :src="item.src" />
        </div>
        <div class="name-margin">
          {{ item.name }}
        </div>
        <div class="describe-margin">
          {{ item.describe }}
        </div>
        <div>
          <button class="button-style" @click="iconclick(item.gohref)" v-if="item.gohref !=''">{{item.type===0?'Github':'Linkedin'}}</button>
        </div>
      </div>
  
      <nav class="navlist">
        <ul>
          <li :class="isActive == index ? 'active':'' " @click="gotranx(index)" v-for="(item, index) in Math.ceil(fourlist.length/3)" :key="index"></li>
         
        </ul>
      </nav>

      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'four',
  data () {
    return {
      fourlist:[],
      fourlist_EN: [{
          src: require('~/assets/img/src/index/img_SrinivasonKeshav_png.png'),
          name: `Srinivason Keshav`,
          describe: `Professor at Waterloo University, Associate Professor at Cornell University, Ph.D. Now he provides technical support and research for Ambr.`,

          gohref:'',
          type: 1,
      },  
      {
          src: require('~/assets/img/src/index/img_Geleifen_png.png'),
          name: `David H. Setiadi`,
          describe: `He is a postdoctoral fellow at the University of Toronto and a Ph.D. from the University of Sigade. He once worked for Microsoft and served as chief information officer for Projects In Knowledge, Inc.`,
          gohref:'',
          type: 1,
      },
      {
          src: require('~/assets/img/src/index/img_DavidH.Setiadi_png.png'),
          name: `Geleifen`,
          describe: `Group Chairman and CEO of Baryon Corporation and Director of Internation
al Trade ouncil, US Department of Commerce He has participated in and led over $800,000,000 of capital placement and participated in 11 IPOs in five countries.`,
          gohref:'https://www.linkedin.com/in/david-setiadi-8868ab77/',
          type: 1,
      },
      {
          src: require('~/assets/img/src/index/img_KobeCannaerts_png.png'),
          name: `Kobe Cannaerts`,
          describe: `Independent consultant, graduated from Ghent University in Belgium, currently working for Kconsult, UNESCO consultant. His consulting company has offices in New York, Belgium, Paris, Frankfurt, Monza and other cities.`,
          gohref:'https://www.linkedin.com/in/kobecannaerts/',
          type: 1,

      },
   
      {
          src: require('~/assets/img/src/index/img_WangweiHe_png.png'),
          name: `Wangwei He`,
          describe: `Vice President of the Zhejiang Blockchain Technology Application Association, founder and CEO of Hangzhou YiBei Ltd. , he has a decade of experience in the telecom industry, Yibei has conducted in-depth research on blockchain based IoT applications.`,

          gohref: '',
          type: 1,
      },
      {
        src: require('~/assets/img/src/index/img_XiaopingLi_png.png'),
          name: `Xiaoping Li`,
          describe:`Xiaoping Li,He is a master of software from Zhejiang University and is currently working at NetEase, former Yaxin Technology, CMCC, and other large companies. He is well versed in the architecture and use of Hadoop's ecosystem.`,
          gohref: '',
          type: 1,
      }],
      fourlist_CN:[{
          src: require('~/assets/img/src/index/img_SrinivasonKeshav_png.png'),
          name: `Srinivason Keshav`,
          describe: `加拿大滑铁卢大学教授，康奈尔大学副教授，加利福尼亚伯克利大学博士毕业，原贝尔实验室研究人员，Kiosknet发明人，原思科智能电网主席, 原加拿大无关环境计算研究委员会主席。“计算机网络的数学基础”教科书作者。现为Ambr提供技术理论上的支持与研究。`,

          gohref:'',
          type: 1,
      },  
      {
          src: require('~/assets/img/src/index/img_Geleifen_png.png'),
          name: `David H. Setiadi`,
          describe: `独立咨询顾问，毕业于比利时根特大学，现就职于Kconsult，UNESCO（联合国教科文组织）顾问，所在咨询公司在纽约、比利时、巴黎、法兰克福、蒙扎等城市都设立办公室。为25个国家的大型能源企业客户提供独立咨询服务。`,
          gohref:'',
          type: 1,
      },
      {
          src: require('~/assets/img/src/index/img_DavidH.Setiadi_png.png'),
          name: `Geleifen`,
          describe: `Baryon集团CEO，美国商务部国际贸易理事会理事。参与8亿美元的资本配置, 并参加五个国家的 11 次IPO。`,
          gohref:'https://www.linkedin.com/in/david-setiadi-8868ab77/',
          type: 1,
      },
      {
          src: require('~/assets/img/src/index/img_KobeCannaerts_png.png'),
          name: `Kobe Cannaerts`,
          describe: `独立咨询顾问，毕业于比利时根特大学，现就职于Kconsult，UNESCO（联合国教科文组织）顾问，所在咨询公司在纽约、比利时、巴黎、法兰克福、蒙扎等城市都设立办公室。为25个国家的大型能源企业客户提供独立咨询服务。`,
          gohref:'https://www.linkedin.com/in/kobecannaerts/',
          type: 1,

      },
   
      {
          src: require('~/assets/img/src/index/img_WangweiHe_png.png'),
          name: `Wangwei He`,
          describe: `浙江省区块链技术应用协会副会长，杭州羿贝创始人兼CEO，十年电信行业应用经验，羿贝公司对基于区块链的物联网应用有深入研究。`,

          gohref: '',
          type: 1,
      },
      {
        src: require('~/assets/img/src/index/img_XiaopingLi_png.png'),
          name: `Xiaoping Li`,
          describe:`浙大软件硕士，现在职于网易、曾在职亚信科技，移动等大型公司，精通hadoop生态圈架构和使用，负责过多个大数据项目架构设计。熟悉大数据相关技术（flume kafka jstorm redis hbase hadoop、spark、hive zookeeper等）以及数据仓库建设。具有PB级数据量的处理经验。多年团队管理经验，能有效建立一支大数据技术团队，培养了多名出色的大数据工程师。`,
          gohref: '',
          type: 1,
      }],
       transform: '',
        isActive: 0,
    }
  },
  mounted(){
      this.fourlist = this.fourlist_EN;
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
    iconclick(url){
      window.open(url,'_blank')
    },
    gotranx(ind){
      this.isActive = ind;
      let run = ind*1200;
      this.transform = `translateX(-${run}px)`;

    },
    changeLang(lang){
      //console.log(lang);
      if(lang === false){
          this.fourlist = this.fourlist_CN;
      }else{
          this.fourlist = this.fourlist_EN;
      }
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

.four-wrap{
    // display: flex;
    // height: calc(100% - 129px);
    // width: 100%;
    // align-items: flex-start;
    // justify-content: center;
    text-align: center;
    display: inline-block;
    position: relative;
    height: 530px;
    overflow: hidden;
    max-width: 1200px;
    margin: 50px 64px 0px 0px;
    .four-wrap-content{
      // max-width: 1018px;
      // height:526px;
      // margin-top: 37px;
      // display: flex;
      display: inline-block;
      height: 462px;
      width: 9999px;
      
      margin: 37px auto 0;

      .wrap-content-person{
        width: 331px;
        height: 462px;
        background-color: rgba(34,59,129,0.29);
        border-radius:10px;
        float:left;
        margin-left: 64px;

        .person-margin{
          margin-top: 21px;
        }
        .name-margin {
          margin-top: 21px;
          height:18px;
          font-size:24px;
          color:rgba(71,182,206,1);
          line-height: 25px;
        }

        .describe-margin{
          padding: 26px;
          height: 83px;
          font-size: 12px;
          font-family: Candara;
          color: white;
          line-height: 18px;
        }
        .button-style{
          width:84px;
          height:27px;
          background:transparent;
          border: 1px solid #2C92A5;
          color: #fff;
        }
      }

      .navlist{
        position: absolute;
        bottom: 0px;
        left: 45%;
        li{
          width: 10px;
          height: 10px;
          background: rgb(157, 98, 254);
          float:left;
          margin-left: 20px;
          border-radius: 50%;
        }
        li.active{
          width: 35px;
          border-radius: 6px;
        }
      }
    }
}

@media (max-width:1024px){
    .four-wrap .four-wrap-content{ width:100%;text-align: center;}  
    .four-wrap .four-wrap-content .wrap-content-person {
  
     float: none; 
   
    margin: 0 auto;
}
.wrap-content-person:nth-of-type(2),.wrap-content-person:nth-of-type(3){display:none;}
}

</style>
