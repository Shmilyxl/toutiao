<template>
  <div class="out-wrap">
    <div class="index-list">
        <div>
<van-skeleton
  title
  avatar
  :row="3"
  :loading="loading"
>

</van-skeleton>
      <div class="list-wrap"
      v-for="lis in list"
      :key="lis.title+lis.id"
      @click="handleClick(lis.item_id)"
      >
        <div>
        <div class="item-wrap"
          v-if='lis.image_list.length==0'
         >
          <div class="item">
            <div class="item-detail">
              <h3>{{lis.title}}</h3>
              <div class="item-info">
                <div>
                  <span class="stick-lable space" v-if='lis.lable!=""'>{{lis.label}}</span>
                  <span class="src space">{{lis.source}}</span>
                  <span class="cmt space">评论&nbsp;{{lis.comment_count}}</span>
                  <span class="time">{{(Math.floor((time-lis.publish_time)/1000 % 86400 % 3600 / 60))}}分钟前</span>
                  <span class="dislike-news fr"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-wrap"
        v-else-if='lis.image_list.length==1'
        @click="handleClick(lis.item_id)"
        >
          <div class="item">
            <div class="item-detail desc">
              <h3>{{lis.title}}</h3>
              <div class="item-info">
                <div>
                  <span class="stick-lable space">{{lis.label}}</span>
                  <span class="src space">{{lis.source}}</span>
                  <span class="cmt space">评论&nbsp;{{lis.comment_count}}</span>
                  <span class="time">{{(Math.floor((time-lis.publish_time)/1000 % 86400 % 3600 / 60))}}分钟前</span>
                  <span class="dislike-news fr"></span>
                </div>
              </div>
            </div>
            <div class="list-img-holder">
              <img :src="lis.image_list[0].url" alt />
            </div>
          </div>
        </div>
        <div class="item-wrap"
        v-else-if='lis.image_list.length==3'
        @click="handleClick(lis.item_id)"
        >
          <div class="item">
            <div class="item-detail">
              <h3>{{lis.title}}</h3>
              <div class="list-img">
                <ul>
                  <li  class="list-img-holder">
                    <img :src="lis.image_list[0].url" alt />
                  </li>
                  <li class="list-img-holder">
                    <img :src="lis.image_list[1].url" alt />
                  </li>
                  <li class="list-img-holder">
                    <img :src="lis.image_list[2].url" alt />
                  </li>
                </ul>
              </div>
              <div class="item-info">
                <div>
                  <span class="stick-lable space">{{lis.label}}</span>
                  <span class="src space">{{lis.source}}</span>
                  <span class="cmt space">评论&nbsp;{{lis.comment_count}}</span>
                  <span class="time">{{(Math.floor((time-lis.publish_time)/1000 % 86400 % 3600 / 60))}}分钟前</span>
                  <span class="dislike-news fr"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import BScroll from "better-scroll";
import { get } from "../utils/http";
import { Toast } from 'vant';
import { PullRefresh } from 'vant';
import { Skeleton } from 'vant';

Vue.use(PullRefresh).use(Toast).use(Skeleton);
export default {
  props:['type'],
  data(){
    return{
        list:[],
        time:'',
        loading: true,
        currenttime:'',
        scroll:''      
        } 
      console.log(list);
  },
  methods:{
   handleClick(id){
     console.log(id);
      let pos=this.$store.state.scroll.position
      console.log(pos);
      
      this.$router.push({
         path:'/detail',
         query:{
           id,
           pos,
         }
       },)
   }

  }
  ,
  befortCreate(){
      // 用来记录上次ajax请求是否完成
    this.isLoaded = true
    console.log(this.loading);
    
  },
   created(){
     console.log(this.loading);
   },
  async mounted() {
     console.log(this.loading);
    
    let url
    let url2
    // this.loading = false
    // console.log(this.loading);
    
    var timestamp = Math.ceil((new Date()).getTime()/1000);
    this.time=timestamp
     if(this.type==='news_entertainment'|this.type==='news_essay'|this.type=='news_baby'|this.type==='news_fashion'|this.type==='news_finance'|this.type=='news_discovery'|this.type=='news_food'|this.type=='news_game'|this.type=='news_history'|this.type=='news_world'|this.type=='news_regimen'|this.type=='news_story'|this.type=='news_military'|this.type=='news_tech'|this.type=='news_travel'|this.type=='news_sports'|this.type=='news_society'){
      url=`/api/list/?tag=${this.type}&ac=wap&count=20&format=json_raw&as=A175DDAD232AF2E&cp=5DD3AA1F324EAE1&min_behot_time=0&_signature=czEPIgAALuWb6y1fiFe-fnMxDz&i=`
   }else{
      url= "/api/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A175DDAD232AF2E&cp=5DD3AA1F324EAE1&min_behot_time=0&_signature=czEPIgAALuWb6y1fiFe-fnMxDz&i="
    }
    console.log(url);
    
     let result = await get({
       url,
    });
    this.list =result.data
    let scrollWrap ='.index-list' 
    this.scroll = new BScroll(scrollWrap, {
      scrollY: true,
      click: true
    });
    this.loading = false;
    this.scroll.on('scrollEnd',async()=>{
    this.$store.commit('scroll/setPosition',{
      position:this.scroll.y
    })    
    if(this.scroll.y>=0){
    console.log(url2);
     let secresult=await get({
       url,
       params:{
         i:this.time
       }
     })
    console.log(secresult);    
    this.list=[
      ...this.list,
      ...secresult.data,
    ] 
    await this.$nextTick()
    this.scroll.refresh()
    Toast({
          message: `为你推荐了${secresult.data.length}篇文章`,
          position: 'top',
          duration: 1000
        })
    } else if(this.scroll.y<-200){
       let thresult=await get({
      url,
        // `/api/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1159DFD338CE97&cp=5DD36C9EE9F7DE1&max_behot_time=${timestamp}&_signature=EEvikwAATZz4kcDu-GeCFxBL4o&`,
        params:{
          i:this.time-10000
        }
    });
    console.log(
        thresult
    );
    
       this.list=[
         ...this.list,
         ...thresult.data
       ]
    }
   await this.$nextTick()
    this.scroll.refresh()
    })
 console.log(this.$store.state.scroll.position)
 this.scroll.scrollTo(0, this.$store.state.scroll.position)
  }
};
</script>

<style lang='stylus'>
.out-wrap {
  display: flex;
  height: 100%;
  .index-list {
    height: 6.67rem;
    background: #fff;

    .list-wrap {
      .item-wrap {
        margin: 0 0.15rem;
        position: relative;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);

        .item {
          position: relative;
          padding: 0.16rem 0;
          display: flex;

          .item-detail {
            color: #aaa;

            h3 {
              line-height: 0.21rem;
              font-size: 0.17rem;
              overflow: hidden;
              color: #222;
              text-overflow: ellipsis;
              display: box;
              font-weight: normal;
            }

            .list-img {
              ul {
                li {
                  margin-left: 0.02rem;
                }
              }
            }

            .item-info {
              color: #999;
              overflow: hidden;

              div, .space {
                margin-right: 0.05rem;
              }

              span {
                display: inline-block;
                font-size: 10px;
                line-height: 12px;
                vertical-align: middle;
              }

              .stick-lable {
                display: inline-block;
                text-algin: center;
                border: 1px solid #fff;
                font-size: 0.09rem;
                line-height: 0.12rem;
                color: #f85959;
                padding: 0 0.02rem;
                border-color: rgba(248, 89, 89, 0.5);
              }
            }
          }

          .desc {
            display: inline-block;
            width: 66%;
            margin: auto;
            vertical-align: middle;
          }

          .list-img-holder {
            overflow: hidden;
            width: 32%;
            display: inline-block;
            vertical-algin: middle;

            &:after {
              visibility: hidden;
              display: block;
              font-size: 0;
              content: ' ';
              clear: both;
              height: 0;
            }

            img {
              border: none;
              display: block;
              width: 100%;
              pointer-events: none;
              text-decoration: none;
              highlight-color: rgba(0, 0, 0, 0);
              transition: opacity 300ms ease;
            }
          }
        }
      }
    }
  }
}
</style>