<template>
  <div id="app-container-wrap">
    <div class="app-container" id="news_article">
      <div class="weixin-share-portal"></div>
      <div class="top-banner-container">
        <div>
          <img src="https://p3.pstatp.com/large/113f2000647359d21b305.png" class="logo" />
          <span class="slogan">今日头条</span>
          <div class="open">打开</div>
        </div>
      </div>
      <article class="article">
        <div :style="{height:h}">
          <div class="article__header">
            <h1 class="article__title">{{list.title}}</h1>
            <div class="article__author">
              <div class="header-left">
                <div class="avatar">
                  <img src="https://p3.pstatp.com/thumb/pgc-image/9ac418713c054a5db82fb6b3ee20feba" />
                </div>
                <div class="author-info">
                  <span class="author-name">{{list.detail_source}}</span>
                  <span class="v-info v-0"><img src="{list.media_user.avatar_url}" alt=""></span>
                </div>
              </div>
              <div class="header-right">
                <span class="new-style-test-article-publish-time">3小时前</span>
                <span class="new-style-test-article-comment">.{{list.comment_count}}评论</span>
              </div>
            </div>
          </div>
          <div class="article__content" id="article_content" >
            <p>
              <strong>今年双十一</strong>
              <strong>你的工资上交给了那个平台？‍</strong>
            </p>
            <p>
              双11落幕，各大电商平台开始公布自家的双11数据，天猫平台当天成交额达到了2684亿元，创造了新的记录；而京东则是获得了双11累计下单金额超2044亿的成绩。
              <strong>作为后起之秀的拼多多也是受到了不少人关注，而第一时间拼多多的回应是：</strong>“没有更多‘双11数据’对外披露”。
            </p>
            <p class="img-wrapper-embedded" style="width: 100%; min-height: 244.665px;">
              <img
                src="https://p3.pstatp.com/large/pgc-image/RiS2nJs5VMFcuS"
                img_width="650"
                img_height="412"
                inline="0"
                alt="双十一过后拼多多股价大跌，烧钱换增长的套路能坚持多久？"
                onerror="javascript:errorimg.call(this);"
                data-index="0"
                data-src="https://p3.pstatp.com/large/pgc-image/RiS2nJs5VMFcuS"
              />
            </p>
            <div class="img-download-banner">打开今日头条，查看更多图片</div>
            <p>
              <strong>正如拼多多所言：</strong>“人们都很关心数字和宏大的事物，但拼多多连实时数据大屏还未曾来得及搭建，公司上下都在急着补货、比价和补贴，走廊里的横幅和氛围花篮也还没来得及摆，这一天就这样过去了。”
            </p>
            <p class="img-wrapper-embedded" style="width: 100%; min-height: 1246.59px;">
              <img
                src="https://p3.pstatp.com/large/pgc-image/RiS2nKF6iY0bfj"
                img_width="610"
                img_height="1970"
                inline="0"
                alt="双十一过后拼多多股价大跌，烧钱换增长的套路能坚持多久？"
                onerror="javascript:errorimg.call(this);"
                data-index="1"
                data-src="https://p3.pstatp.com/large/pgc-image/RiS2nKF6iY0bfj"
              />
            </p>
            <p>
              但拼多多还是带来两个有价值的信息，
              <strong>16分钟汽车销量破千台，拼多多平台售出的新款iPhone手机超过40万台，二者都是拼多多“百亿补贴”政策的核心类目。</strong>确实，在双十一期间，手机、汽车、电子设备等商品，在拼多多百亿补贴下，售价不断刷破底线，拼多多成了羊毛党的天堂，也成了其它电商平台的眼中钉。
            </p>
            <p>双十一过后，拼多多以一份出人意料又情理之中的财报宣告了自己的Q3业绩，拼多多三季度的净亏损16.604亿元，远高于市场预期的12.24亿元，而黄老板的个人身价同时大跌至211亿美元，缩水49亿美元。</p>
            <p class="img-wrapper-embedded" style="width: 100%; min-height: 231.6px;">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                img_width="1080"
                img_height="648"
                inline="0"
                alt="双十一过后拼多多股价大跌，烧钱换增长的套路能坚持多久？"
                onerror="javascript:errorimg.call(this);"
                data-index="2"
                data-src="https://p3.pstatp.com/large/pgc-image/RiS2nKf8809a2G"
              />
            </p>
            <p>其中，在618拉开“百亿补贴”大幕并持续至今，被认为是拼多多亏损扩大的主要原因。然而，尽管拼多多持续亏损，却换来了营收和用户的双重大涨，刚过去的Q3，拼多多实现营收75.14亿元，同比增长123%；截至2019年9月30日，平台平均月活达4.296亿，净增6360万。</p>
            <p>拼多多表示在下一季度会继续百亿补贴战略，很显然，拼多多尝到了甜头。</p>
            <p>
              <strong>疯狂的补贴政策让拼多多成为增长最快的电商平台，烧钱换增长的套路成为拼多多从上市前都上市后一成不变的策略。</strong>
            </p>
            <p>为了获取更多用户，拼多多投入大额营销推广费用，今年前三季度，公司在营销推广方面投入179.02亿元，相较上年同期的74.18亿元，增长1.4倍。</p>
            <p>2019年，拼多多推出“百亿补贴”计划。通过该计划，包括Apple MacBook、戴森吹风机等在内的逾万款全网最热商品，均实现了前所未有的最低价，参与计划的国内外品牌超过2800家，热门补贴商品超过23000款。</p>
            <p>拼多多虽已取得4亿用户的巨大流量，与京东和阿里坐稳一二线市场不断下沉的策略正好相反，拼多多希望通过百亿补贴稳住下沉市场，并向京东和阿里所占据多年的一二线市场渗透。</p>
            <p class="img-wrapper-embedded" style="width: 100%; min-height: 257.076px;">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                img_width="1000"
                img_height="666"
                inline="0"
                alt="双十一过后拼多多股价大跌，烧钱换增长的套路能坚持多久？"
                onerror="javascript:errorimg.call(this);"
                data-index="3"
                data-src="https://p3.pstatp.com/large/pgc-image/RiS2nL36e1sgGN"
              />
            </p>
            <p>不过拼多多“低端、假货”的标签依旧甩不掉。近日，有人在黑猫平台投诉，称在拼多多上买到了假的苹果耳机，要求退货却被客服拒绝。后经过黑猫平台的交涉，问题才得到解决。</p>
            <p class="img-wrapper-embedded" style="width: 100%; min-height: 405.428px;">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                img_width="755"
                img_height="793"
                inline="0"
                alt="双十一过后拼多多股价大跌，烧钱换增长的套路能坚持多久？"
                onerror="javascript:errorimg.call(this);"
                data-index="4"
                data-src="https://p3.pstatp.com/large/pgc-image/RiS2nLFGQuh0Ou"
              />
            </p>
            <p>在拼多多上，类似这样的例子不在少数，虽有百亿补贴这样让人真香的政策，一旦补贴暂停，拼多多又会成为拼夕夕，短期内消费者依旧会掉头转向“更值得信赖的”阿里和京东，那么拼多多要烧钱到什么时候？或许就是拼多多能改变一二线用户的得印象真正与阿里和京东三分天下的时候。至于在此之前，黄铮和他的拼多多能不能顶得住资金压力就另说了。</p>
          </div>
        </div>
        <div class="unfold-field unfold-field-download" @click='handleshow' v-show='ok'>
          <div class="btn-wrapper">
            <div class="unflod-field__mask"></div>
            <a href="javascript:void(0)" class="download-text">打开APP阅读全文</a>
          </div>
        </div>
        <div id class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="pswp__bg"></div>
          <div class="pswp__scroll-wrap">
            <div class="pswp__container">
              <div class="pswp__item"></div>
              <div class="pswp__item"></div>
              <div class="pswp__item"></div>
            </div>
            <div class="pswp__ui pswp__ui--hidden">
              <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--share" title="Share"></button>
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                  <div class="pswp__preloader__icn">
                    <div class="pswp__preloader__cut">
                      <div class="pswp__preloader__donut"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
              </div>
              <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
              <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
              <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div class="recommendation-container">
        <div class="recommendation-item">
          <h2 class="container__header">热门推荐</h2>
          <div class="feed-list-container-new-article appOnly-container">
            <div class="list-content">
              <section data-group-id="6759049913184567821" class="feed-item left-img-container"
              v-for='lis in hotlist' :key='lis.id'
              >
                <a
                  href="https://m.365yg.com/group/6759049913184567821/"
                  rel="nofollow"
                  title="淘宝之父孙彤宇被阿里辞退，投资拼多多东山再起"
                >
                  <div class="flex-container">
                    <div class="left">
                      <img
                        class="img"
                        src="http://p1.pstatp.com/list/tos-cn-p-0000/acee81c1da264a2b8cec441ef5bd81c1"
                        style="transition: opacity 200ms ease 0s; opacity: 1;"
                      />
                    </div>
                    <div class="right">
                      <span class="title line2">{{lis.title}}</span>
                      <div class="info">
                        <span class="open-label">打开APP</span>
                        <span>{{lis.author.nm}}</span>
                        <span class="time-ago">{{lis.stats.comment_count}}条评论</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>
        <div class="recommendation-item">
          <h2 class="container__header">猜你喜欢</h2>
          <div class="feed-list-container-new-article relatedNews-container">
            <div class="list-content">
             <section data-group-id="6759049913184567821" class="feed-item left-img-container"
              v-for='lis in likelist' :key='lis.id'
              >
                <a
                  href='`https://m.365yg.com/group/${lis.id}/`'
                  rel="nofollow"
                  title="淘宝之父孙彤宇被阿里辞退，投资拼多多东山再起"
                >
                  <div class="flex-container">
                    <div class="left">
                      <img
                        class="img"
                        src="http://p1.pstatp.com/list/tos-cn-p-0000/acee81c1da264a2b8cec441ef5bd81c1"
                        style="transition: opacity 200ms ease 0s; opacity: 1;"
                      />
                    </div>
                    <div class="right">
                      <span class="title line2">{{lis.title}}</span>
                      <div class="info">
                        <span class="open-label">打开APP</span>
                        <span>{{lis.author.nm}}</span>
                        <span class="time-ago">{{lis.stats.comment_count}}条评论</span>
                      </div>
                    </div>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>
        <div class="recommendation-item">
          <h2 class="container__header">搜索</h2>
           <section class="suggestListBottom_NTCJ6X">
            <a 
            v-for="lis in searchlist" :key="lis.id"
            class="suggestItem_1nTNjP" href="javascript:;"
            @click='handleitem(lis.id,lis.word)'
            >
              <span class="itemText_1L9-YQ">{{lis.word}}</span>
            </a>
          </section>
        </div>
      </div>
    <ad></ad>
    </div>
  </div>
</template>

<script>
import ad from '../index/download'
import search from '../../components/expectlist'
import {get}  from '../../utils/http'
export default {
  data(){
    return {
      list:[],
      searchlist:[],
      id:[],
      hotlist:'',
      likelist:'',
      h:'823.5px',
      ok:true
    }
  },
  methods:{
    handleshow(){
    this.h='auto'
    this.ok=false
    }
  }
  ,
  async mounted(){
   let result =await get({
     url:`/api/i${this.$route.query.id}/info/?_signature=d4FW3BAWKlmfW3Sha-b8cXeBVs&`,
      params:{
       i:this.$route.query.id
     }
    //  url:'/api/i6536479907868836356/info/?_signature=ecsxNRAZJB-RERNIVcvOZXnLMS&i=6536479907868836356'
   })
   console.log(result.data);
   this.list=result.data
   let searchresult=await get({
     url:'https://i.snssdk.com/api/suggest_words/?business_id=10014&',
       params:{
       from_group_id:this.$route.query.id
     }
   })
   let search=searchresult.data
   this.searchlist=search[0].words

   let items=await get({
     url:`/api/related/open/${this.$route.query.id}/?city=%E5%8C%97%E4%BA%AC&province=%E5%8C%97%E4%BA%AC&page_type=article&share_iid=&share_app_name=&wx_share_count=0&site_id=5000246&num=5&num=15&code_id=14798012085000246&code_id=14799599715000246&except_page=&test_params=%7B%7D&tt_running=0&enable_mix=1&web_id=6758695847335593485&utm_source=&utm_medium=&utm_campaign=`,
     params:{
       parent_rid:this.$route.query.id
     }
   })
   let hotitems=items.data
      console.log(hotitems);
    for(let key in hotitems){
        hotitems[key];
       this.id.push(hotitems[key])
       }
this.hotlist=this.id[0]
this.likelist=this.id[1]
  
  },

  components:{
     ad,
  }
};
</script>

<style lang='stylus'>
#app-container-wrap
  height 8rem
  overflow-y scroll
  .app-container
    width 100%
    padding-bottom 1.40rem
    .top-banner-container
      background #fff
      height .5rem
      box-shadow 0 .02rem .04rem 0 rgba(0,0,0,0,1)
      position relative
      .logo
        width .36rem
        height .36rem
        position absolute
        margin .07rem 0 
        left .15rem
        border .01rem solid #eee
        border-radius .07rem
      .slogan
        font-size .14rem
        color #222
        position absolute
        top 0
        bottom 0
        left .61rem
        line-height .5rem
      .open 
        position absolute
        margin .11rem 0
        right .15rem
        width .72rem 
        height .28rem
        line-height .28rem
        color #fff
        font-size .14rem
        text-align  center
        font-weight 500
        border-radius .14rem
        background-image: linear-gradient(to right, #ff0000, #ff5050);    
    
    .article
      padding-top .08rem
      position relative
      overflow hidden
      >div
        .article__header
          position relative
          padding 0 .14rem
          .article__title
            font-size .24rem
            line-height .34rem
          .article__author
            margin-top .12rem
            display flex
            justify-content space-between
            .header-left
              display flex
              align-items center
              .avatar
                width 24px
                height 24px
                border-radius 24px
                margin auto
                display inline-block
                img
                  width 100%
                  height 100%
                  border-radius inherit 
              .author-info
                  margin-left 6px
                  display flex
                  align-items center
            .header-right 
                align-self center
                color #999999
              .dot
                display inline-block
                width 2px
                height 2px
                border-radius 1px
                background-color #999
                margin 0 4px
                vertical-align middle
        .article__content 
          position relative
          overflow hidden
          clear both
          padding 0 14px
          padding-bottom 24px
          p
            margin-top .17rem
            font-size .18rem
            line-height 1.76
          .img-wrapper-embedded 
            background url(//s1.pstatp.com/growth/mobile_detail/image/toutiaoicon_loading_textpage@3x.RQmcZRIc.png) no-repeat center center;
            background-size 40%
            margin-right auto
            margin-left auto
            position relative
            img 
              width 100%
              display block
              margin-right auto
              margin-left auto
              margin-top 4px
              transition opacity 200ms ease
          .img-download-banner 
            background-color #fbfbfb
            position relative
            display block
            font-size 14px
            color #505050
            text-align center
            border 1px solid rgba(228,228,228,0.6)
            border-top none
            height 42px
            line-height 42px
            &:after
              position absolute
              top 0
              bottom 0
              margin auto
              display inline-block
              content ''
              width 15px
              height 15px
              background url(//s1.pstatp.com/growth/mobile_detail/image/image-arrow.HNPrnYXh.png) no-repeat
              background-position -1px center
              background-size contain
  .unfold-field 
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .btn-wrapper
      padding: 12px 14px 12px 14px;
      background: #fff; 
    .unflod-field__mask
      position: absolute;
      left: 0;
      right: 0;
      top: -78px;
      height: 78px;
      background-image: linear-gradient(-180deg, rgba(255,255,255,0) 0, #FFFFFF 100%);      
      &::after 
        content: '';
        display: inline-block;
        background-image: url(//s1.pstatp.com/growth/mobile_detail/image/vwap_arrow_down.ky914xBY.png);
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
        margin-top: 45px;
        height: 16px;
        width: 16px;
        animation: unfold-arrow-animation 300ms infinite alternate;
    .download-text 
      background-image: linear-gradient(to right, #ff0000, #ff5050);
      display: block;
      width: 100%;
      height: 37px;
      line-height: 37px;
      border-radius: 18.5px;
      font-size: 15px;
      color: #fff;
  .recommendation-container
    padding-bottom .14rem
    .recommendation-item
      box-sizing: border-box;
      .container__header
        width 100%
        font-size 15px
        line-height 15px
        padding 14px 0 8px 0
        color #000
        font-weight 600
        background-color #ffffff
        box-sizing border-box
        border-bottom none
        &:before
          content ''
          width 4px
          height 18px
          border-radius 1px
          margin-right 10px
          background-color #f85959
          display inline-block
          vertical-align sub
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
      .appOnly-container    
        padding 0 14px 0 14px 0
      .list-content
        .feed-item
          position relative
          border-bottom .5px solid #E8E8E8
        .left-img-container 
          margin-bottom 16px
          border none !important
          width 100%
        .three-img-container 
          width 100%
          margin-bottom 16px
          border none !important
        a 
          text-decoration none
          color #131313
        .flex-container 
          display flex
          justify-content space-between
          align-items center
          .left 
            display inline-block
            width 32%
            height 22vw
            img
              width 100%   
              height 100%
          .right
            display inline-block
            width 68%
            box-sizing border-box
            padding-left 12px
            .title 
              font-size 18px
              line-height 24px
              margin-top 0
              padding-right 0
              color #000
            .info 
              font-size 11px
              margin-top 4px
              color #999  
              .open-label 
                color #f85959
                margin-right 10px
              .time-ago 
                margin-left: 7px;
        .relatedNews-container
        padding 0 14px 0 14px 0
        .list-content
          .feed-item
            position relative
            border-bottom .5px solid #E8E8E8
          .left-img-container 
            margin-bottom 16px
            border none !important
            width 100%
          .three-img-container 
            width 100%
            margin-bottom 16px
            border none !important
          a 
            text-decoration none
            color #131313
          .flex-container 
            display flex
            justify-content space-between
            align-items center
            .left 
              display inline-block
              width 32%
              height 22vw
              img
                width 100%   
                height 100%
            .right
              display inline-block
              width 68%
              box-sizing border-box
              padding-left 12px
              .title 
                font-size 18px
                line-height 24px
                margin-top 0
                padding-right 0
                color #000
              .info 
                font-size 11px
                margin-top 4px
                color #999  
                .open-label 
                  color #f85959
                  margin-right 10px
                .time-ago 
                  margin-left: 7px;      


      
             
</style>