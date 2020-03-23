<template>
  <div>
    <div class="container_3AzVsu">
      <div
        data-log-view="{&quot;event&quot;:&quot;search_init_show&quot;,&quot;in_ogs&quot;:&quot;&quot;,&quot;traffic_source&quot;:&quot;&quot;,&quot;original_source&quot;:&quot;&quot;}"
      >
        <div data-log-click class="inputWrapFixed_YLH661">
          <div class="inputContent_1IIA_g" style="height: 44px; padding: 0px;">
            <img
              class="searchIcon_2WABq1"
              src="//lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/search-icon-3x.3d8b4860.png"
              alt
            />
            <input
              v-model="name"
              type="search"
              value=''
              name="keyword"
              placeholder="请输入搜索内容"
              class="input_2aTrQw"
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
              style="box-sizing:content-box"
            />
            <input name="l" style="display:none" />
            <a class="cancelButton_1gbu0m" href="javascript:;" @click="sendmsg(1)">取消</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container_3AzVsu" v-if='inputlist.length>0'>
      <div class="associateWrap_15Xo1H">
        <a v-for="inputlis in inputlist" :key='inputlis.info.wordid' href="/search/?keyword=排骨汤煮多久&pd=synthesis&source=recom_search&traffic_source=&original_source=&in_tfs=&in_ogs=" class="associateItem_14SsVO halfPixelBorder_1G74LF" @click='handleitem(inputlis.info.wordid, inputlis.keyword)'>
          <div class="associateItemInnerLeft_v5m--t">
            <img
              src="//lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/search-icon-3x.3d8b4860.png"
              class="associateItemIcon_oU73zg"
              alt
            />
            <span>
              <span class="highlightWord_3TGDW8"></span>
              <span >{{inputlis.keyword}}{{inputlis.wordid}}</span>
            </span>
          </div>
          <div class="associateItemInnerRight_3uUGII">
            <img
              src="//lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/search-item-tip-3x.70e201f2.png"
              class="associateItemTip_ZBkSE2"
              alt
            />
          </div>
        </a>
      </div>
    </div>
    <div class="component-wrap" v-else>
      <history></history>
      <suggest></suggest>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import history from "../../components/searchlist";
import suggest from "../../components/expectlist";
import { get } from "../../utils/http";
import store from 'store'

export default {
  props: ["title"],
  components: {
    history,
    suggest
  },
  data() {
    return {
      msg: 1,
      name: "",
      fangfa:[],
      inputlist:[],
      mobilde:''
    };
  },
  methods: {
    sendmsg(msg) {
      console.log(this.msg);
      this.$emit("func", this.msg);
    },
    handleitem(id, nm){
      console.log(123);
      let items=store.get('visiteditems') || []
      items.push({
        id,
        nm
      })
      store.set('visiteditems',_.uniqBy(items)) 
      this.$store.dispatch('search/saveItem',{
        id,
        nm
      })
  },
   async getdata(name){
     let searchresult = await get({
       url: `/api/2/article/search_sug/?keyword='${name}'&in_tfs=`,
   });
   console.log(name);
   
    if (name === '') {
      console.log(0);
      
     this.inputlist = [];
      }else{
    this.inputlist=searchresult.data
    console.log( this.inputlist);} 
    },
   
  },
  watch: {
    name(val) {
    clearTimeout(this.timeout);
    this.timeout= setTimeout(() => {
        this.getdata(val)
      }, 300);
  },
  
  },
  async mounted() {
    console.log(this.title);
    console.log(this.inputlist);
  }
};
</script>

<style lang='stylus'>
.container_3AzVsu
  .inputContent_1IIA_g
      display flex
      box-orient horizontal
      box-direction normal
      flex-direction row
      box-align center
      align-items center
      margin .1rem .17rem 0
      border-radius 4px
      background #f1f3f5
      img 
        width .30rem
      .input_2aTrQw 
        flex 1
        margin 0
        padding 0
        font-size 16px
        font-family PingFangSC
        color #222
        background none
        outline none
        appearance none
        user-select text
        user-select text
        caret-color #ff373c
        object-fit contain 
        border 0
        height .208rem
      .cancelButton_1gbu0m   
        position relative
        width .6rem
        height .44rem
        line-height .44rem
        text-align center
        font-size .16rem
        color #222
.container_3AzVsu
  flex: 1;
  width: 100%;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  .associateWrap_15Xo1H 
    padding: 0 17px;
    .associateItem_14SsVO, .associateItemInnerLeft_v5m--t 
      display: flex
      align-items: center;
      width: 100%;
      height 46px
      .associateItemIcon_oU73zg
        width: 30px;
        height: 30px;
        margin-left: 5px;
        color #666
      .highlightWord_3TGDW8 
        color: #666;
      span 
        color: #666;  
    .associateItemInnerRight_3uUGII 
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 0 0 0 9px;
      height: 100%;
      .associateItemTip_ZBkSE2 
        width: 24px;
        height: 24px;



//https://m.toutiao.com/i6761357496389992974/info/?_signature=veJTLhAc4EJVOHFTXFh.773iUz&i=6761357496389992974
//https://m.toutiao.com/i6761719561214493195/info/?_signature=pDDVnxAQ-fVM6vfidCrIDqQw1Y&i=6761719561214493195
</style>
