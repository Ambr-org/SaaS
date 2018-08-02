<template>
    <!-- <header>222222</header> -->

  <section class="section-wrap"  @mousewheel="imgScroll">
		
				<AHeader />
		<div class="section section-1" v-show="secShow === 1">
				<First />
		</div>

		<div class="section section-2" v-show="secShow === 2">
			<h3  class="section2-title">{{titlelist.title1}}</h3>
			<Second />
		</div>

		<div class="section section-3" v-show="secShow === 3">
			<h3 class="section3-title">{{titlelist.title2}}</h3>
			<Third />
		</div>

		<div class="section section-4" v-show="secShow === 4">
			<h3 class="section4-title">{{titlelist.title3}}</h3>
			<Four />
		</div>

		<div class="section section-5" v-show="secShow === 5">
			<h3 class="section5-title">{{titlelist.title4}}</h3>
			<Five />
		</div>
		<div class="section section-6" v-show="secShow === 6">
			<h3 class="section6-title">{{titlelist.title5}}</h3>
			<h6  class="section6-title-h6">{{titlelist.title6}}</h6>
			<Six />
		</div>
		<div class="section section-7" v-show="secShow === 7">
			<h3 class="section7-title">{{titlelist.title7}}</h3>
			<Seven />
		</div>
		<div class="section section-8" v-show="secShow === 8">
			<h3 class="section8-title">{{titlelist.title8}}</h3>
			<Eight />

			
<AFooter />
		</div>

 <nav class="nav-position" v-if="secShow>=2">
 	<Progress :pagenum="secShow" />

</nav> 
<!-- <footer>222</footer>	 -->

	</section>

  
</template>

<script>
import { mapGetters } from 'vuex'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import AHeader from '~/components/common/aheader'

import First from '~/components/index/first'
import Second from '~/components/index/second'
import Third from '~/components/index/third'
import Four from '~/components/index/four'
import Five from '~/components/index/five'
import Six from '~/components/index/six'
import Seven from '~/components/index/seven'
import Eight from '~/components/index/eight'
import AFooter from '~/components/common/afooter'
import Progress from '~/components/common/progress'
import "../../style/scss/common.scss";

export default {
  name: 'index',
  data () {
    return {
	  secShow: 1,
	  count: 1,
	  clientHeight: '',
	  pagedeltaY:0,
	  titlelist_EN: {
          title1:`Project Summary`,
          title2:`Team`,
          title3:`Consultant`,
          title4:`Institutional Investors`,
          title5:`Time Line`,
          title6:`Multiple Chain and Cross Chain System Online`,
		  title7:`Institutional Investors`,
		  title8:`VIDEO`,
      },
      titlelist_CN: {
          title1:`项目概要`,
          title2:`团队成员`,
          title3:`顾问`,
          title4:`投资机构`,
          title5:`路线图`,
          title6:`多链和跨链`,
		  title7:`社交媒体`,
		  title8:`视频`,
      },
      titlelist:{}
    }
	},
	mounted () {
  		// 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`;        //document.body.clientWidth;
      //console.log(this.clientHeight);
	  if(document.addEventListener){
   		document.addEventListener('DOMMouseScroll',this.MozimgScroll.bind(this),false);
		}
		this.titlelist = this.titlelist_EN;
    
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
		imgScroll(e){			
			this.pagedeltaY += Math.abs(e.wheelDeltaY);
			if(this.pagedeltaY>=this.clientHeight){
				if(e.deltaY>0){
					if(this.secShow<8){
						this.secShow +=1;
						this.pagedeltaY = 0;
					}else{
						this.secShow =8;
					}
				}else if(e.deltaY<0){
					//console.log('1.  '+this.secShow);
					if(this.secShow>1){
						this.secShow -=1;
					this.pagedeltaY = 0;
					}else{
						this.secShow =1;
					}
					//console.log('2.   '+this.secShow);
				}else{
					return;
				}
			}
		},
		MozimgScroll(e){
			//console.log(e);		
			this.pagedeltaY += Math.abs(e.layerY);
	
			if(this.pagedeltaY>=this.clientHeight){
				if(e.detail>0){
					if(this.secShow<8){
						this.secShow +=1;
						this.pagedeltaY = 0;
					}else{
						this.secShow =8;
					}
				}else if(e.detail<0){
					//console.log('1.  '+this.secShow);
					if(this.secShow>1){
						this.secShow -=1;
					this.pagedeltaY = 0;
					}else{
						this.secShow =1;
					}
					//console.log('2.   '+this.secShow);
				}else{
					return;
				}
			}
		},
		changeLang(lang){
      //console.log(lang);
      if(lang === false){
          this.titlelist = this.titlelist_CN;
      }else{
          this.titlelist = this.titlelist_EN;
      }
    },
	},
	components:{
		AHeader,
		First,
		Second,
		Third,
		Four,
		Five,
		Six,
		Seven,
		Eight,
		AFooter,
		Progress
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
%sectiontitle{
	color:#9D62FE;font-size:60px;font-weight:500;
}
.section-wrap{ 
  width:100%;height:100%;background-color:#0A0F1D; background-position:center center; background-repeat:no-repeat;
  transition:transform 1s cubic-bezier(0.86,0,0.03,1);-webkit-transition:-webkit-transform 1s cubic-bezier(0.86,0,0.03,1);
  .section{ 
    position:relative; width:100%; height:100vh;  
    .title{
      width:100%;position:absolute;top:10%;color:#fff;font-size:2.4em;text-align:center;
      p{ padding:0 4%;opacity:0}
      &.active .tit{ opacity:1;transform:translateY(-25px);-webkit-transform:translateY(-25px);transition:all 2s cubic-bezier(0.86,0,0.8,1);-webkit-transition:all 2s cubic-bezier(0.86,0,0.8,1);}

    }
	.section2-title{
		@extend %sectiontitle;
	}
	.section3-title{
		@extend %sectiontitle;
	}
	.section4-title{
		@extend %sectiontitle;
	}
	.section5-title{
		@extend %sectiontitle;
	}
	.section6-title{
		@extend %sectiontitle;
		.section6-title-h6{
			width:588px;height:24px;font-size:12px;font-family:PingHei-Light;color:rgba(255,255,255,1);margin: 0 auto;
		}
	}
	.section7-title{
		@extend %sectiontitle;
	}
	.section8-title{
		@extend %sectiontitle;
	}

  }
 


}

.put-section-0{ transform:translateY(0);-webkit-transform:translateY(0);}

		.put-section-1{ transform:translateY(-100%);-webkit-transform:translateY(-100%);}

		.put-section-2{ transform:translateY(-200%);-webkit-transform:translateY(-200%);}

		.put-section-3{ transform:translateY(-300%);-webkit-transform:translateY(-300%);}

    .put-section-4{ transform:translateY(-400%);-webkit-transform:translateY(-400%);}

   .nav-position{
	   	position: fixed;
		right: 3%;
		top: 25%;
   }
// 		@media (max-width:1024px){
// 			.section.section-6 {
// 				display: none;
// 			}
// }
@media screen and (max-width: 1024px) and (min-width: 0) {
	.nav-position{display: none;}

	.section-wrap{ 
		height: auto;
	 }
  
}	
// @media (max-width: 767px) {
//     .hidden-xs {
//         display:none!important
//     }
// }

// @media (min-width: 768px) and (max-width:991px) {
//     .hidden-sm {
//         display:none!important
//     }
// }

// @media (min-width: 992px) and (max-width:1199px) {
//     .hidden-md {
//         display:none!important
//     }
// }

// @media (min-width: 1200px) {
//     .hidden-lg {
//         display:none!important
//     }
// }

</style>
