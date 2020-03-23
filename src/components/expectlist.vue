<template>
<div>
  <div class="suggestListHeader_VpkkqL">猜你想搜</div>
          <section class="suggestListBottom_NTCJ6X">
            <a 
            v-for="lis in list" :key="lis.id"
            class="suggestItem_1nTNjP" href="javascript:;"
            @click='handleitem(lis.id,lis.word)'
            >
              <span class="itemText_1L9-YQ">{{lis.word}}</span>
              <img
               v-if='lis==list[0]'
                class="suggestItemTag_S5zM4r"
                src="//lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/tag_rec-3x.6824739a.png"
                alt
              />
              <img
              v-else-if='lis.recommend_reason=="qrec_hot"'
                class="suggestItemTag_S5zM4r"
                src="//lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/tag_hot-3x.1ee2cb38.png"
                alt
              />
            </a>
          </section>
</div>       
</template>

<script>
import {get} from '../utils/http'
import store from 'store'
import _ from 'lodash'
export default {
data(){
return{
  list:[]
}
},
async mounted(){
   let result=await get({
     url:"/api/search/suggest/initial_page/"
   }) 
    this.list =result.data.suggest_word_list
    console.log(this.list);
 
  },
  created(){
    this.visiteditems=store.get('visiteditems')
    
  },

  methods:{
  handleitem(id, nm){
    console.log(123);
      let items=store.get('visiteditems') || []
      items.push({
        id,
        nm
      })
      store.set('visiteditems',_.uniqBy(items),(value)=>{
        return value.id!=id
      }) 
      store.set('currentitem', {
        id, nm
      }) 
      this.$store.dispatch('search/saveItem',{
        id,
        nm
      })
  } }
}
</script>

<style lang='stylus'>
.suggestListHeader_VpkkqL
  width: 100%;
  box-align: center;
  align-items: center;
  height: 40px;
  padding: 0 17px;
  color: #999;
  font-size: 14px;
  line-height: 40px;
 .suggestListBottom_NTCJ6X 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .suggestItem_1nTNjP
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      height: 38px;
      line-height: 38px;
      text-align: center;
      padding: 0 17px;
      color #222
      &:after
        content:''
        width .01rem
        height .2rem
        background #999
        position absolute
        left 100%
        transform scale(.5)       
      span 
        flex: 1;
        line-height: 38px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size .16rem
      img 
        width: 14px;
        height: 14px;
        margin-left: 15px;           
</style>