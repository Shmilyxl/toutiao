<template>
  <div class="nav-bar">
             <div class="nav-bar-more" @click=' handleClick'>
                 <div class="list_shadow"></div>
                 <a href="javascript:;">
                     <span class="cross">
                     </span>
                 </a>
             </div>
             <div class="nav-list">
                 <ul>
                    <router-link v-for='lis in list' :key='lis.id' :to="`/index/${lis.nm}`" active-class='active' tag='li'>{{lis.name}}</router-link>
                  
                 </ul>
             </div>
         </div>
</template>

<script>
import store from 'store'
export default {
data(){
    return {
        result:'',
        list:[]
    }
},
 created(){
    this.list=store.get('detelist')||[{id:0,name:'推荐',nm:'home'},{id:1,name:'社会',nm:'society'},{id:2,name:'娱乐',nm:'amusement'},{id:3,name:'科技',nm:'techology'},{id:4,name:'汽车',nm:'car'},{id:5,name:'体育',nm:'sport'},{id:6,name:'财经',nm:'finance'},{id:7,name:'军事',nm:'military'},{id:8,name:'国际',nm:'internation'},{id:9,name:'时尚',nm:'fashion'},{id:10,name:'游戏',nm:'game'},{id:11,name:'热点',nm:'hot_news'},{id:12,name:'育儿',nm:'education'}]
  },
  mounted(){
 
    console.log(this.list);
    
  },
 methods:{
   handleClick(){
       console.log(123);
       
   this.$router.push('channels')
   }
},

}
</script>

<style lang="stylus">
    .nav-bar
        top .44rem
        height .37rem
        background #f4f5f6
        box-sizing border-box
        width 100%
        position fixed
        z-index 999
        .nav-bar-more
            float right
            position relative
            a
                display block
                position relative
                width 40px
                height 36px
                background-size 20px
                font-size 35px
                color #f85959
                text-align center
                line-height 36px
                span 
                    position absolute
                    width .17rem
                    height .17rem
                    opacity 0.9
                    left 50%
                    top 50%
                    -webkit-transform translate(-50%, -50%)
                    transform translate(-50%, -50%)
                    &:before
                        position absolute
                        content ' '
                        height .17rem
                        width .02rem
                        background-color #f85959
                    &:after
                        position absolute
                        content ' '
                        height .17rem
                        width .02rem
                        background-color #f85959
                        transform rotate(90deg)
        .nav-list
            overflow hidden
            overflow-x scroll
            white-space nowrap
            ul
                display flex
                .active
                    color #f85959
                li
                    margin .1rem 0 .1rem .1rem
                    height .26rem
                    line-height .2rem
                    font-size .17rem
                    padding 0 .1rem
                    color #505050
</style>