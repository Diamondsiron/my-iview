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
  overflow: hidden;
  position: fixed;
  top:0px;
  left: 0px;
  height: 100%;
}
.header{
  position: fixed;
 
  height: 100px;
  left: 200px;
  top:0;
}
.page{
    position: absolute;
    top: 100px;
    left: 200px;
    min-width: 600px;
    bottom: 0;
    overflow: auto;
}
.page-contains{
  padding:10px;
}
</style>
