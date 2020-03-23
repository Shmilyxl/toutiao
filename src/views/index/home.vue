<template>
<div>
     <div>
    <list></list>
 
    <router-view></router-view>
</div>
</div>
</template>

<script>
import ad from './download'
import navbar from './menu'
import list from '../../components/indexlist.vue'
export default {
  data() {
    return {
      enterClassName: '',
      leaveClassName: ''
    }
  },  
 components:{
    list
},
 watch: {
    $route(to, from) {
      console.log(to,from);
      
      if (to.meta > from.meta) {
        this.enterClassName = 'slideInRight'
        this.leaveClassName = 'slideOutLeft'
      } else {
        this.enterClassName = 'slideInLeft'
        this.leaveClassName = 'slideOutRight'
      }
    }
  },

 methods: {
    handleClick() {
      this.$router.push('/index/hot_news')
    }
  },
mounted(){
    console.log(this.$route);
    
}
}
</script>

<style lang="stylus">
 
</style>