<template>
  <div>
    <div class="out-wrap">
    <div class="index-list">
        <div>
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"

>
   <div class="list-wrap"
      v-for="lis in list"
      :key="`${lis.item_id}${lis.tag_id}`"
      @click="handleClick(lis.item_id)"
      >
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
                  <span class="time">9分钟前</span>
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
                  <span class="time">9分钟前</span>
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
                  <span class="time">9分钟前</span>
                  <span class="dislike-news fr"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </van-list>
  </div>
</div>

</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
import {get} from '../../utils/http'
export default {
  data(){
    return {
      list:[],
      error: false,
      loading: false,
      finished: false,
    }
  },
   methods: {
 /*    onLoad() {
      fetchSomeThing().catch(() => {
        this.error = true;
      })
    }, */
    //   onLoad() {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }
    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }

  },
async mounted(){
  console.log();
  
    let result =await get({
      url:'/api/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1553D7D36F9501&cp=5DD6D985D0616E1&min_behot_time=0&_signature=STK8oAAAFOWh6J7d5flu4EkyvL&i='
    })
    this.list=result.data
  console.log(this.loading);
  
    if(this.loading==true){
  let secondresult=await get({
    url:'/api/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A175FDFDABFCD18&cp=5DDB8CBD41081E1&min_behot_time=1574683198&_signature=H4nAcQAAQlX3U-IMtc7cfh-JwG&i=1574678900'
  })
   console.log(secondresult);
     this.list=[
       ...this.result,
       ...secondresult
     ]
         await this.$nextTick()
   console.log(this.list);
   
    }
  }
}
</script>

<style lang='stylus'>
 .out-wrap 
  display: flex;
  height: 600px;
  overflow scroll
  .index-list 
    height: 6.67rem;
    background: #fff;
    height 100%
    .van-list__loading
       margin 0 auto 
    .list-wrap 
      .item-wrap 
        margin: 0 0.15rem;
        position: relative;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);

        .item 
          position: relative;
          padding: 0.16rem 0;
          display: flex;

          .item-detail 
            color: #aaa;

            h3 
              line-height: 0.21rem;
              font-size: 0.17rem;
              overflow: hidden;
              color: #222;
              text-overflow: ellipsis;
              display: box;
              font-weight: normal;
            

            .list-img 
              ul 
                li 
                  margin-left: 0.02rem;
                
              
            

            .item-info 
              color: #999;
              overflow: hidden;

              div, .space 
                margin-right: 0.05rem;
              

              span 
                display: inline-block;
                font-size: 10px;
                line-height: 12px;
                vertical-align: middle;
              

              .stick-lable 
                display: inline-block;
                text-algin: center;
                border: 1px solid #fff;
                font-size: 0.09rem;
                line-height: 0.12rem;
                color: #f85959;
                padding: 0 0.02rem;
                border-color: rgba(248, 89, 89, 0.5);
              
            
          

          .desc 
            display: inline-block;
            width: 66%;
            margin: auto;
            vertical-align: middle;
          

          .list-img-holder 
            overflow: hidden;
            width: 32%;
            display: inline-block;
            vertical-algin: middle;

            &:after 
              visibility: hidden;
              display: block;
              font-size: 0;
              content: ' ';
              clear: both;
              height: 0
            img 
              border: none;
              display: block;
              width: 100%;
              pointer-events: none;
              text-decoration: none;
              highlight-color: rgba(0, 0, 0, 0);
              transition: opacity 300ms ease;
            
</style>