<template>
<div>
<div id="page-head" v-if="flag==true">
  <div class="logo-wrap" >
    <head>
      <div class="head-top"></div>
      <div class="logo">
        <img
          src="//lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/logo.545e6c99.png"
          alt
        />
      </div>
    </head>
    <div class="search-wrap">
      <div form-wrap>
        <form action>
          <div class="input-wrap">
            <div class="input-content" @click='handClick'>
              <input
                type="search"
                value
                name="keyword"
                placeholder="搜你想看"
                class="input_2aTrQw inputIndex_1ZicXI"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                style="box-sizing:content-box"
              />
              <i
                style="width: 24px;
                        height: 24px;
                        background-repeat: no-repeat;"
              ></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="search-index" v-else>
    <search @func="getsondata" :title='title'></search>
    <router-view></router-view>
</div>
</div>
</template>

<script>
import Vue from "vue";
import search from '../search/searchinput'
import {get} from '../../utils/http'
export default {
  data(){
    return{
    flag:1,
    title:2
    }
  },
  methods: {
    handClick() {
      this.flag=0
      console.log(this.flag);
    },
    getsondata(msg){
      this.flag=msg
      console.log(this.flag);
    }
  },
  components:{
    search
  },
};
</script>

<style lang='stylus'>
#page-head {
  height: 100%;
  background: #fff;

  head {
    display: flex;
    box-orient: vertical;
    box-direction: normal;
    flex-direction: column;
    box-pack: center;
    justify-content: center;
    box-align: center;
    align-items: center;
    margin: 0 0 0.09rem;

    .head-top {
      width: 100%;
      height: 25vh;
    }
  }

  .search-wrap {
    border-radius: 0.03rem;
    background: #fff;
  }

  form {
    display: block;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    min-height: 54px;
    max-width: 736px;
    overflow: hidden;

    .input-wrap {
      position: relative;

      .input-content {
        height: 52px;
        border-radius: 4px;
        padding: 0px 18px;
        background: #f1f3f5;
        display: flex;
        box-orient: horizontal;
        box-direction: normal;
        flex-direction: row;
        flex-direction: row;
        box-align: center;
        align-items: center;
        align-items: center;
        margin: 10px 17px 0;

        input {
          font-size: 18px;
          color: #9b9b9b;
          flex: 1;
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-family: PingFangSC;
          color: #222;
          background: none;
          outline: none;
          -webkit-appearance: none;
          -webkit-user-select: text;
          user-select: text;
          caret-color: #ff373c;
          object-fit: contain;
          border: none;
        }
      }
    }
  }
}
</style>