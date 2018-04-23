<template>
 <div class="main">
   <div class="sidebar">
       <shrinkableMenu></shrinkableMenu>
   </div>
   <div class="header">
     <headers></headers>
   </div>
   <div class="page">
      <tagsPageOpened></tagsPageOpened>
      <div class="page-contains">
         <router-view></router-view>
      </div>
     
   </div>
   
  
  

 </div>
</template>

<script>


import headers from '../components/header/headers.vue';
import shrinkableMenu from '../components/shrinkable-menu/shrinkableMenu.vue'
import tagsPageOpened from '../components/tagsPageOpened/tagsPageOpened.vue'

export default {
  name: 'Mains',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    headers,
    shrinkableMenu,
    tagsPageOpened
    

  },
  computed:{
   
 
  },
  mounted(){

  },
  methods:{

  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  width: 200px;
  overflow: auto;
  position: fixed;
  top:0px;
  left: 0px;
  height: 100%;
  background-color: rgb(73, 80, 96);
  color:#fff
}
.header{
  left: 200px;
  box-sizing: border-box;
  position: fixed;
  display: block;
  width: 100%;
  height: 100px;
   
}
.page{
    left: 200px;
    position: absolute;
    top: 100px;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: #F0F0F0;
}
.page-contains{
  padding:10px;
  background-color: #fff
}
</style>
