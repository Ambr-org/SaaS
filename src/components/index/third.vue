<template>
  <div class="third-wrap">
    <div class="third-wrap-content">
        
      <div class="wrap-content-person" :style="{ 'transform': transform, '-ms-transform': transform, '-webkit-transform': transform,'-moz-transform': transform}" v-for="(item, index) in thirdlist" :key="index">

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
          <li :class="isActive == index ? 'active':'' " @click="gotranx(index)" v-for="(item, index) in Math.ceil(thirdlist.length/3)" :key="index"></li>
         
        </ul>
      </nav>

      
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'third',
  data () {
    return {
thirdlist:[],
      thirdlist_EN: [{
          src: require('~/assets/img/src/index/img__charlesjia_png.png'),
          name: `Charles Jia`,
          describe: `He has been a blockchain practitioner and has extensive industry experience. He has developed and participated in various blockchain platforms and participated in Dubai Future Accelerator blockchain project.`,
          gohref: `https://www.linkedin.com/in/charles-jia-821924112/`,
          type: 1,
      },
      {
          src: require('~/assets/img/src/index/img_yizhi_png.png'),
          name: `YiZhi Huang`,
          describe: `Double major in math and computer Pennsylvania State University；Master of Illinois Champagne Artificial Intelligence Lab.`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_PallMusaev_png.png'),
          name: `Pall Musaev`,
          describe: `Pall has extensive experience in market operations, and has extensive experience in different industries and different companies, such as IBM, Deloitte, Accenture and other internationally renowned companies. `,
          gohref: `https://www.linkedin.com/in/pallmusaev`,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img__kimikan_png.png'),
          name: `Kimi Kan`,
          describe: `More than ten years as a senior software engineer. He used to work for Huawei, Dresdner Wireless, Nokia, etc. He has accumulated a large number of company and personal projects involving various languages ​​and platforms. `,
          gohref: `https://github.com/kimikan`,
          type: 0,
        },  
        {
          src: require('~/assets/img/src/index/img_amit_png.png'),
          name: `Amit N.Agarwal`,
          describe: `PhD of Computer Science, Stanford University.`,
          gohref: ``,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_DavidBao_png.png'),
          name: `David Bao`,
          describe: `Graduated from the Department of Computer and Finance at the University of Waterloo in Canada and spent the past five years at the Canadian Banking Corporation. Many years ago, he had contacted and studied blockchain technology.`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_JunLiu_png.png'),
          name: `Jun Liu`,
          describe: `He holds a master's degree from Nanjing University of Information Science and Technology, and has been involved in the algorithm research of the National Natural Science Foundation of China for many years.`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_LinQing_png.png'),
          name: `Lin Qing`,
          describe: `Chairman of the Silicon Valley Cultural and Technological Park. She served as president of the National Association for the Promotion of China’s Peaceful Reunification. She is currently the Overseas Director of the China Peaceful Reunification Promotion Association.`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_jingzhongxu_png.png'),
          name: `Jingzhong Xu`,
          describe: `He holds a master's degree in software from Zhejiang University. He has extensive experience in the risk control of internet finance and a senior developer of blockchain technology.`,
          gohref: ``,
          type: 1,
      },{
          src: require('~/assets/img/src/index/img__HainanLi_png.png'),
          name: `Hainan Li`,
          describe: `Senior C++ developers have excellent logic thinking and research skills and won the first prize in the electronic design competition. Many years ago, he had a deep research on blockchain technology.`,
          gohref: ``,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_LeiJiang_png.png'),
          name: `Lei Jiang`,
          describe: `Dr. Jiang Lei, Ph. D. in computer, University of Toronto. He has worked as one of the largest Canadian pension management companies and is currently a senior Asset Management Co planner in Canada. `,
          gohref: `https://www.linkedin.com/in/leijiangh`,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_VeronicaAppia_png.png'),
          name: `Veronica Appia`,
          describe: `Veronica is a writer, editor, and content creator who has worked for a number of media newspapers and has many years of experience in digital news reporting, online marketing, and media relations. `,
          gohref: `https://www.linkedin.com/in/veronica-appia-58013051`,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_judithhong_png.png'),
          name: `Judith Hong`,
          describe: `Judith is the only Chinese and English bilingual partner of Fogler Robinoff LLP. He successfully assisted many well-known Chinese companies in listing in North America and has extensive economic and legal experience.`,
          gohref: `https://www.linkedin.com/in/jwilkin`,
          type: 1,
        }],
        

      thirdlist_CN: [{
          src: require('~/assets/img/src/index/img__charlesjia_png.png'),
          name: `Charles Jia`,
          describe: `Ambr创始人兼CEO，95后，13年进入比特币与区块链圈子并辍学，一直以来都是区块链从业者，拥有丰富行业经验。曾开发与参与多种区块链平台、曾参与迪拜未来加速器区块链项目，对区块链技术富有理想与激情。`,
          gohref: `https://www.linkedin.com/in/charles-jia-821924112/`,
          type: 1,
      },
      {
          src: require('~/assets/img/src/index/img_yizhi_png.png'),
          name: `YiZhi Huang`,
          describe: `宾州州立大学数学、计算就双学士；伊利诺伊香槟人工智能实验室硕士。`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_PallMusaev_png.png'),
          name: `Pall Musaev`,
          describe: `Pall有丰富的市场运营经验，在不同行业与不同的公司有丰富的合作经验，譬如IBM，德勤，埃森哲等国际性知名公司。Pall负责Ambr的海外市场。`,
          gohref: `https://www.linkedin.com/in/pallmusaev`,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img__kimikan_png.png'),
          name: `Kimi Kan`,
          describe: `资深C++开发者，逻辑思维与研究能力十分出色，曾获电子设计大赛全国一等奖。多年前就对区块链技术研究十分深入，在共识算法上有自己的设计与独到的研究。 `,
          gohref: `https://github.com/kimikan`,
          type: 0,
        },  
        {
          src: require('~/assets/img/src/index/img_amit_png.png'),
          name: `Amit N.Agarwal`,
          describe: `斯坦福大学计算机博士。`,
          gohref: ``,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_DavidBao_png.png'),
          name: `David Bao`,
          describe: `毕业于加拿大滑铁卢大学计算机与金融系，在过去五年里任职于加国银行机构。多年前就已接触并研究区块链技术，并且对虚拟货币的经济模型与技术算法。`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_JunLiu_png.png'),
          name: `Jun Liu`,
          describe: `南京信息工程大学硕士，参与国家自然科学基金项目的算法研究多年，在算法领域有多年研究，尤其在高性能智能算法方面研究能力突出。`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_LinQing_png.png'),
          name: `Lin Qing`,
          describe: `硅谷文化科技园董事长。曾任全美中国和平统一促进会会长，帮助华人如骆家辉、吴政伟等竞选。現任中国和平统一促进会海外理事。`,
          gohref: ``,
          type: 1,
        },
        {
          src: require('~/assets/img/src/index/img_jingzhongxu_png.png'),
          name: `Jingzhong Xu`,
          describe: `He holds a master's degree in software from Zhejiang University. He has extensive experience in the risk control of internet finance and a senior developer of blockchain technology.`,
          gohref: `浙江大学软件硕士，连续创业者，有着丰富的互联网金融大数据风险控制从业经验，区块链技术资深开发者，对智能合约和多链和跨链技术有深入理解；曾就职于阿里巴巴，浙江电信等知名企业，从事数据仓库，机器学习，自然语言处理，信息检索及分布式系统方面的研发工作。`,
          type: 1,
      },{
          src: require('~/assets/img/src/index/img__HainanLi_png.png'),
          name: `Hainan Li`,
          describe: `资深C++开发者，逻辑思维与研究能力十分出色，曾获电子设计大赛全国一等奖。多年前就对区块链技术研究十分深入，在共识算法上有自己的设计与独到的研究。`,
          gohref: ``,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_LeiJiang_png.png'),
          name: `Lei Jiang`,
          describe: `江磊博士，多伦多大学计算机博士。 他曾就职于加拿大最大养老金管理公司之一，现任加拿大一家大型资产管理公司资深系统规划师，主要负责量化投资的数据、系统及流程的设计和实施。 江磊从2013年就深入研究比特币与区块链，现作为Ambr技术社区的一员。 `,
          gohref: `https://www.linkedin.com/in/leijiangh`,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_VeronicaAppia_png.png'),
          name: `Veronica Appia`,
          describe: `Veronica 兼作家、编辑和内容创造者，曾在多家媒体报社供职，在数字新闻报道，网络营销及媒体关系领域有多年的经验。她加入Ambr团队负责公共关系及媒体推广。 `,
          gohref: `https://www.linkedin.com/in/veronica-appia-58013051`,
          type: 1,
        },{
          src: require('~/assets/img/src/index/img_judithhong_png.png'),
          name: `Judith Hong`,
          describe: `Judith是Fogler Robinoff律师事务所唯一一位华语、英语双语合伙人，成功帮助多个中国知名企业在北美的上市，具有丰富的经济法律经验。Judith作为Ambr的法务支持。`,
          gohref: `https://www.linkedin.com/in/jwilkin`,
          type: 1,
        }],
        

          transform: '',
        isActive: 0,
    }
  },
  mounted(){
      this.thirdlist = this.thirdlist_EN;
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
          this.thirdlist = this.thirdlist_CN;
      }else{
          this.thirdlist = this.thirdlist_EN;
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

.third-wrap{

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
    .third-wrap-content{
      //max-width: 1018px;
      display: inline-block;
      height: 462px;
      width: 9999px;
      
      margin: 37px auto 0;
      
      //display: flex;

      .wrap-content-person{
        width: 331px;
        height: 462px;
        background-color: rgba(34,59,129,0.29);
        border-radius:10px;

        float:left;
        //flex: 0 0 33%;
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
    .third-wrap .third-wrap-content{ width:100%;text-align: center;}  
    .third-wrap .third-wrap-content .wrap-content-person {
  
     float: none; 
   
    margin: 0 auto;
}
.wrap-content-person:nth-of-type(2),.wrap-content-person:nth-of-type(3){display:none;}
}

</style>
