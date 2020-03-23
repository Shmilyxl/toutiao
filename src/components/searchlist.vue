<template>
   <section v-if='list.length>0'>
            <div class="header_3epUbf">
              <a class="expandButton_2fDYRt" href="javascript:;">
                <span>历史记录</span>
              </a>
              <a class="deleteIconWrapper_2ecMJG" href="javascript:;">
                <img  v-show='ok'  @click='handledelet'
                  style="width:16px"
                  class="deleteIcon_2XJIry"
                  src="//lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/delete-icon-3x.7e647b34.png"
                  alt
                />
                <div class="tag-wrap" v-show='no'> 
                <span style="color:#999" @click="handleall">全部删除</span>
                <span style="margin-left: 15px;color:#999" @click="handleok">完成</span>
                </div>
              </a>
            </div>
            <div class="wordList_1FXWbD">
              <div v-for='lis in list' :key='lis.id' class="suggestItem_1nTNjP item_1ADbqP"  @click="handledeletitem(lis.id)">
                <a class="itemText_1L9-YQ" href="javascript:;">{{lis.nm}}</a>
                <div v-show="no">
                  <img style="width:12px" src="//sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/x-icon-3x.4ce6bbf5.png" alt="">
                </div>
              </div>
            </div>
            <div style="width: 100%; padding-left: 15px; padding-right: 15px;">
              <div
                class="suggestListTopBorderBottom_k0UxEX halfPixelBorder_1G74LF"
                style="margin: 0px;"
              ></div>
            </div>
</section>
</template>

<script>
import store from 'store'
export default {
  data(){
    return {
      list:[],
      itemid:'',
      ok:true,
      no:false
    }
  },
  created(){
    this.list=this.visiteditems=store.get('visiteditems')
  },
   methods:{
      handledelet(){
        console.log(111);
        this.ok=false
         this.no=true
    },
    handleok(){
      this.ok=true
      this.no=false
    },
    handleall(){
      store.remove('visiteditems')
      location.reload()
    }
    ,
    handledeletitem(id){
    let items=store.get('visiteditems') || []
    this.id=id
    console.log(items);
     for(let key in items){
       items[key]
       console.log(items[key]);
      if(items[key].id==this.id){
       items=items.filter(function(id){
         return id=this.id
       })
       console.log(items);
       
      }
     }    
  } }

}
</script>

<style lang='stylus'>
 .header_3epUbf   
      display flex
      box-align center
      align-items center
      justify-content space-between
      height 40px
      padding 0 17px
      font-size .14rem
      line-height 20px
      margin-top 2px 
      color #999
      .expandButton_2fDYRt
         padding.05rem 0
         display flex
         align-items center 
         color #222 
         span 
           color #999
    .wordList_1FXWbD
      display flex
      flex-direction row
      flex-wrap wrap 
       
      .suggestItem_1nTNjP
        display flex
        box-pack justify
        justify-content space-between
        box-align center
        align-items center
        width 50%
        height 38px
        line-height 38px
        text-align center
        padding 0 17px
        box-sizing border-box
        .itemText_1L9-YQ
          color #222
          font-size .16rem
    >div
      &:after 
          border-width: 0;
          border-bottom: 1px solid #e8e8e8;
          width: 300%;
          height: 300%;
          transform: scale(.333333);
      .suggestListTopBorderBottom_k0UxEX
        position: relative;
        width: 100%;
        margin: 0 15px;
        height: 10px; 
</style>