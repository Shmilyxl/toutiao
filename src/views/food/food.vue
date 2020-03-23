<template>
  <div>
    <list :type='type'></list>
    <router-view></router-view>
  </div>
</template>

<script>
import list from '../../components/indexlist.vue'
export default {
  components:{
    list,
  },
data(){
  return{
    type:'news_food'
    }
}
}
</script>

<style>

</style>