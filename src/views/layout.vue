<template>
  <div id="wrap">
  <header>
    <div class="top-bar">
        <div class="index-head-m">
            <a href="#"></a>
            <div class="index-head-m-ref">
            <i :style="style" @click="handleroute"></i>
            </div>
        </div>
        <div class="index-head-l">
            <a href="/message"></a>
        </div>
        <div class="index-head-r">
            <a href="/search"></a>
        </div>
    </div>
</header>
     <main>
 
      <div>
         <navbar></navbar>
         <ad></ad>
         <router-view></router-view>
         </div>

     </main>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

import navbar from './index/menu'
import ad from './index/download'
Vue.use(Icon);
export default {
  data(){
    return{
      style:''
    }
  },
  components:{
    navbar,
    ad
  },
  methods:{
    handleroute(){
      if(this.style==""){
         this.style="transition:2s;transform:rotate(360deg);"
      }else{
        this.style=''
      }
   
    }
  }
}
</script>

<style lang="stylus">
#wrap
  background #fff
  header 
          display block
          z-index 999
          overflow hidden
          position fixed
          top 0
          left 0
          right 0
          .top-bar
              height .44rem
              position relative
              background #d43d3d
              display flex
              .index-head-m
                  line-height .44rem
                  display flex
                  text-align center
                  width 100%
                  color #fff
                  font-weight bold
                  font-size .2rem
                  a    
                      display inline-block
                      padding-left 2.25rem
                      background: url(//s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png) no-repeat right center;
                      width .41.5rem
                      background-size .83rem !important
                  .index-head-m-ref
                      width .25rem
                      i  
                          width 100%;
                          height 100%;
                          display inline-block;
                          background url(//s3a.pstatp.com/growth/mobile_list/image/titlebar_refresh_small@3x_96fb31e4.png) no-repeat center center;
                          background-size 15px;
              .index-head-l
                  position absolute
                  top 25%
                  width .27rem
                  z-index 100
                  color #fff
                  font-size .14rem
                  left .1rem
                  font-weight 600
                  a
                      background url(//s3.pstatp.com/growth/mobile_list/image/feed_ic_message_normal@3x_f2ea949f.png) no-repeat;
                      background-size contain
                      width .32rem
                      height .25rem
                      margin-left .12rem
                      display block
                      position relative
              .index-head-r  
                  font-size .14rem
                  color #fff
                  right .1rem
                  z-index 100
                  font-weight 600
                  position absolute
                  top 25%
                  a
                      display inline-block
                      width .24rem
                      height .24rem
                      background url(//s3.pstatp.com/growth/mobile_list/image/feed_ic_search_normal@3x_0f198e56.png) no-repeat center
                      background-size contain
                      margin-right 12px
    main
      margin-top .79rem 
      height 100%            
    </style>