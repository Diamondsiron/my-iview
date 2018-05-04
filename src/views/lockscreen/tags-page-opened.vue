<template>
  <div>
      <ul>
          <li v-for="(item,index) in pages" :key="index">{{item}}<p v-if="currentPath==item">选中的是我</p><p @click="close(item)" v-if="index>0">关闭</p></li>
      </ul>
      <div @click="closeAll();">关闭</div>
  </div>
</template>
<script>
   export default{
       data(){
           return{
               list:[0,1,2,3]
           }
       },
       computed:{
           pages(){
              return this.$store.state.app.pageOpenedList; 
           },
           currentPath(){
               return this.$store.state.app.currentPath
           }
       },
       methods:{
           close(item){
               this.$store.commit('closepageOpenedList',item)
           },
           closeAll(){
                this.$store.commit('closeallpageOpenedList')
           }
       }
   } 
</script>
<style scoped>
li{
    display:inline-block;
    min-width: 30px;
    margin-left: 10px;
    background-color: antiquewhite
}
</style>

