<template>
    <div data-reactroot>
      <div class="toolbar">
        <span class="title" @click='handleback'>
          <a href>频道管理</a>
        </span>
        <span class="backBtn">
          <a></a>
        </span>
      </div>
      <div class="addControl controlBlock">
        <span class="controlTitle">点击删除以下频道</span>
        <ul class="controlDetail">
          <li v-for='detelis in detelist' :key='detelis.id'  :data-id='detelis.id' class="channelFigure tuijian" ref='dataTk' @click='handledetel(detelis.id)'>
            <a href="javascript:;">{{detelis.name}}</a>
          </li>
        </ul>
      </div>
      <div class="addControl controlBlock">
        <span id="removeTitle" class="controlTitle">
          <span class>点击添加以下频道</span>
        </span>
        <ul class="controlDetail">
          <li v-for='addlis in addlist' :key='addlis.id'  id="detelis.id" class="channelFigure" ref='dataTk' @click='handleadd(addlis.id)'>
            <a href="javascript:;">{{addlis.name}}</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script >
import store from 'store'
export default {
  data(){
     return {
         detelist:[{id:0,name:'推荐',nm:'home'},{id:1,name:'社会',nm:'society'},{id:2,name:'娱乐',nm:'amusement'},{id:3,name:'科技',nm:'techology'},{id:4,name:'汽车',nm:'car'},{id:5,name:'体育',nm:'sport'},{id:6,name:'财经',nm:'finance'},{id:7,name:'军事',nm:'military'},{id:8,name:'国际',nm:'internation'},{id:9,name:'时尚',nm:'fashion'},{id:10,name:'游戏',nm:'game'},{id:11,name:'热点',nm:'hot_news'},{id:12,name:'育儿',nm:'education'}],
         addlist:[{id:13,name:'历史',nm:'history'},{id:14,name:'美食',nm:'food'},{id:15,name:'养生',nm:'live'},{id:16,name:'故事',nm:'story'},{id:17,name:'美文',nm:'easy'},{id:18,name:'旅游',nm:'travel'},{id:19,name:'探索',nm:'find'}],
         list:[],
         } 
  },
    mounted(){
     
    
  },
  methods: {
    handledetel(id){
        for(let item in this.detelist){
            if(this.detelist[item].id==id){        
                this.addlist.push(this.detelist[item])  
                this.detelist.splice(item,1)
            }
        }
     },
      handleadd(id){
        for(let item in this.addlist){
            if(this.addlist[item].id===id){ 
              this.detelist.push(this.addlist[item]) 
              this.addlist.splice(item,1)
            }
        }
     },
     handleback(){
       this.$router.push('home')
       console.log(this.list);
       
      store.set('detelist',this.detelist)
     }
  }}
</script>

<style lang='stylus'>
.data-reactroot
.toolbar 
    width: 100%;
    height: 50px;
    position: relative;
    background-color: #d43d3d;
    span 
        display: block;
        text-align: center;
        line-height: 50px;
        font-weight: 700;
        a 
            color: #fff;
            font-weight: 900;
    .backBtn
            width: 44px;
            height: 50px;
            position: absolute;
            left: 0;
            top: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            cursor: pointer;
.controlBlock 
    width: 100%;
    font-weight: 500;
    .controlTitle 
        display: block;
        padding: 0 10px;
        line-height: 2em;
        background-color: #f5f5f5;
        font-size: 12px;
        color: #666;
    .controlDetail 
        margin: 10px 0;
        .channelFigure 
            display: inline-block;
            width: 25%;
            margin-bottom: 10px;
            animation: zoomIn .3s ease;
            a 
                font-size: 16px;
                display: block;
                margin: 0 8px;
                border: 1px solid #ccc;
                text-align: center;
                line-height: 2em;
                background-color: #f0f0f0;
                color #000
  

</style>