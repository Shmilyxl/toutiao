<template>
<div class="ad">
        <div class="ad-y">
            <a href="javascript:;">
                <div class="logo-wrap">
                    <div class="logo"></div>
                    <div class="banner-label">
                        <p class="tb">今日头条</p>
                    </div>
                </div>
            <div class="open">打开</div>
            </a>
        </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus'>
.ad
    position fixed
    bottom 0
    height .5rem
    word-break break-word
    width 100%
    height 50px
    z-index 5000
    box-sizing content-box
    .ad-y
        position fixed
        width 100%
        height 50px
        background #fff
        box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
        background-repeat no-repeat
        background-position bottom
        background-size 100% 100%
        color #222
        a
            height .5rem
            padding 0 .15rem
            display flex
            justify-content space-between
            box-sizing border-box
            align-items center
            width 100%
            text-decoration none
            .logo-wrap
                display flex
                justify-content center
                align-items center
                .logo
                    height .36rem
                    width .36rem
                    background url(//s3.pstatp.com/growth/fe_sdk/image/banner_toutiao_icon_bce0b302.png) no-repeat
                    overflow hidden
                    background-size 100% 100%
                    border 1px solid #eee
                    border-radius 7px
                .banner-label
                    flex 1
                    width 100%
                    .tb
                        font-size .14rem
                        margin-left .08rem
                        line-height .15rem
                        color #222
            .open
                width .72rem
                height .28rem
                font-size .14rem
                line-height .28rem
                border-radius .14rem
                font-weight 500
                background-image linear-gradient(90deg,red,#ff5050)
                color #fff
                text-align center    
</style>