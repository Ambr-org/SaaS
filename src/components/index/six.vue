<template>
  <div class="second-wrap">
    <div class="second-wrap-content">
        
      
      <div class="row-dag">
          <div class="col-dag">
              <img src="../../assets/img/src/index/img_page2_01_png.png" alt="DAG" />
          </div>
          <div class="col-font-dag">
            <div class="font-dag-title">DAG</div>
            <div class="font-dag-descibe">Redefining trading units to expand to a variety of transaction types.</div>
          </div>
      </div>
      <div class="row-contract">
          <div class="col-contract">
              <img src="../../assets/img/src/index/img_page2_02_png.png" alt="project" />
          </div>
          <div class="col-font-contract">
            <div class="font-contract-title">Smart Contract</div>
            <div class="font-contract-descibe">This solves the problem of DAG unable to support smart contracts.</div>
          </div>
      </div>
      <div class="row-chaining">
          <div class="col-chaining">
              <img src="../../assets/img/src/index/img_page2_03_png.png" alt="project" />
          </div>
          <div class="col-font-chaining">
              <div class="font-chaining-title">Multi-chaining and cross-chaining</div>
            <div class="font-chaining-descibe">A messenger and verifier system will help achieve consensus between chains for communication and transaction confirmation, respectively.</div>
          </div>
      </div>
      <!-- <div class="row-contract">
          <div class="col-contract">
              <img src="../../assets/img/src/index/img_page2_02_png.png" alt="project" />
          </div>
          <div>
            <div>Smart Contract</div>
            <div>This solves the problem of DAG unable to support smart contracts.</div>
          </div>
      </div>
      <div class="row-chaining">
          <div class="col-chaining">
              <img src="../../assets/img/src/index/img_page2_03_png.png" alt="project" />
          </div>
          <div>
              <div>Multi-chaining and cross-chaining</div>
            <div>A messenger and verifier system will help achieve consensus between chains for communication and transaction confirmation, respectively.</div>
          </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'second',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
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

.second-wrap{
    display: flex;
    height: calc(100% - 129px);
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    .second-wrap-content{
      max-width: 1018px;
      height:526px;
      margin-top: 37px;

      .row-dag{
          @include row-widths(197px);
        }
      .row-contract{@include row-widths(163px);}
      .row-chaining{@include row-widths(0px);}
        .col-dag{
           @include col-widths(159px);
        }

        .col-contract{
            @include col-widths(130px);
        }

        .col-chaining{
            @include col-widths(100px);
        }
        .col-font-dag{
            @include font-left;
        }
        .font-dag-title{
            @include font-title;
        }
        .font-dag-descibe{
            @include font-descibe(316px);
        }

        .col-font-contract{
            @include font-left;
        }
        .font-contract-title{
            @include font-title;
        }
        .font-contract-descibe{
            @include font-descibe(403px);
        }

        .col-font-chaining{
            @include font-left;
        }
        .font-chaining-title{
            @include font-title;
        }
        .font-chaining-descibe{
            @include font-descibe(630px);
        }
    }
}

</style>
