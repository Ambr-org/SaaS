<template>
    <!-- <header>222222</header> -->
  <section class="section-wrap">
		
		<div class="section section-1">
				<Header />
				<First />
			<!-- <div class="title active">

				<p class="tit">CSS3 纵向滚屏翻页，支持键盘，鼠标滚轮操作</p>

			</div> -->

		</div>

		<div class="section section-2">
			<h3 style="color:#9D62FE;font-size:60px;font-weight:500;">Project Summary</h3>
			<Second />
			<!-- <div class="title">

				<p class="tit">随便写写意思下!</p>

			</div> -->

		</div>

		<div class="section section-3">
			<h3 style="color:#9D62FE;font-size:60px;font-weight:500;">Team</h3>
			<Third />
			<!-- <div class="title">

				<p class="tit">随便写写意思下</p>

			</div> -->

		</div>

		<div class="section section-4">
			<h3 style="color:#9D62FE;font-size:60px;font-weight:500;">Consultant</h3>
			<Four />
			<!-- <div class="title">

				<p class="tit">随便写写意思下</p>

			</div> -->

		</div>

		<div class="section section-5">
			<h3 style="color:#9D62FE;font-size:60px;font-weight:500;">Institutional Investors</h3>
			<Five />

			<!-- <div class="title">

				<p class="tit">随便写写意思下</p>

			</div> -->

		</div>
		<div class="section section-6">

			<div class="title">

				<p class="tit">随便写写意思下</p>

			</div>

		</div>
		<div class="section section-7">
			<h3 style="color:#9D62FE;font-size:60px;font-weight:500;">Institutional Investors</h3>
			<Seven />

			<!-- <div class="title">

				<p class="tit">随便写写意思下</p>

			</div> -->

		</div>

<!-- <nav>
<ul class="section-btn">

	  <li class="on"></li>

	  <li></li>

	  <li></li>

	  <li></li>

	  <li></li>

	</ul>

	<div class="arrow">&laquo;</div>
</nav> -->
<!-- <footer>222</footer>	 -->

	</section>

  
</template>

<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Header from '~/components/common/header'
import First from '~/components/index/first'
import Second from '~/components/index/second'
import Third from '~/components/index/third'
import Four from '~/components/index/four'
import Five from '~/components/index/five'
import Seven from '~/components/index/seven'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
	},
	components:{
		Header,
		First,
		Second,
		Third,
		Four,
		Five,
		Seven
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// body{
//   padding-top: 0px; overflow-y: hidden;
// }
// h1, h2 {
//   font-weight: normal;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
body{color:#222;-webkit-text-size-adjust:none;}

body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl, dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td,iframe{margin:0; padding:0;}

h1,h2,h3,h4,h5,h6{font-size:100%;}

body,button,input,select,textarea {font-family:Tahoma,Arial,Roboto,”Droid Sans”,”Helvetica Neue”,”Droid Sans Fallback”,”Heiti SC”,sans-self;font-size:62.5%; line-height:1.5;}

ol,ul{list-style:none;}

html,body{ width:100%; height:100%; overflow:hidden;}

.section-wrap{ 
  width:100%;height:100%;overflow:visible;transition:transform 1s cubic-bezier(0.86,0,0.03,1);-webkit-transition:-webkit-transform 1s cubic-bezier(0.86,0,0.03,1);
  .section{ 
    position:relative; width:100%; height:100vh;  background-color:#0A0F1D; background-position:center center; background-repeat:no-repeat;
    .title{
      width:100%;position:absolute;top:10%;color:#fff;font-size:2.4em;text-align:center;
      p{ padding:0 4%;opacity:0}
      &.active .tit{ opacity:1;transform:translateY(-25px);-webkit-transform:translateY(-25px);transition:all 2s cubic-bezier(0.86,0,0.8,1);-webkit-transition:all 2s cubic-bezier(0.86,0,0.8,1);}

    }
  }
//   .section-1{ background-color:#337ab7}
//   .section-2{ background-color:#5cb85c}
//   .section-3{ background-color:#5bc0de}
//   .section-4{ background-color:#f0ad4e}
//   .section-5{ background-color:#d9534f}

}

.put-section-0{ transform:translateY(0);-webkit-transform:translateY(0);}

		.put-section-1{ transform:translateY(-100%);-webkit-transform:translateY(-100%);}

		.put-section-2{ transform:translateY(-200%);-webkit-transform:translateY(-200%);}

		.put-section-3{ transform:translateY(-300%);-webkit-transform:translateY(-300%);}

    .put-section-4{ transform:translateY(-400%);-webkit-transform:translateY(-400%);}
    .section-btn{ width:14px;position:fixed;right:4%;top:50%;}

		.section-btn li{ width:14px;height:14px;cursor:pointer;text-indent:-9999px;border-radius:50%;-webkit-border-radius:50%;margin-bottom:12px; background:#BD362F;text-align:center; color:#fff; onsor:pointer;}

		.section-btn li.on{ background:#fff}

		.arrow{ opacity:1;animation:arrow 3s cubic-bezier(0.5,0,0.1,1) infinite;-webkit-animation:arrow 3s cubic-bezier(0.5,0,0.1,1) infinite;transform:rotate(-90deg);-webkit-transform:rotate(-90deg); position:absolute;bottom:10px;left:50%;margin-left:-30px;width:60px;height:60px;border-radius:100%;-webkit-border-radius:100%;line-height:60px;text-align:center;font-size:20px;color:#fff;border:1px solid #fff;cursor:pointer;overflow:hidden;}

		.arrow:hover{ animation-play-state:paused;-webkit-animation-play-state:paused;}

		@keyframes arrow{ 0%, 100%{bottom:10px; opacity:1;} 50%{bottom:50px; opacity:.5} }

		@-webkit-keyframes arrow{ 0%, 100%{bottom:10px; opacity:1;} 50%{bottom:50px; opacity:.5} }

</style>
