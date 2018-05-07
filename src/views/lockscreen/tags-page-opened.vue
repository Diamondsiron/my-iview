<template>
  <div>
      <!-- <ul>
          <li v-for="(item,index) in pages" :key="index">{{item}}<p v-if="currentPath==item">选中的是我</p><p @click="close(item)" v-if="index>0">关闭</p></li>
      </ul>
      <div @click="closeAll();">全部关闭</div>
      <div @click="closeOther()">关闭其他</div> -->
      <div>
          <Tag 
                    type="dot"
                    v-for="(item, index) in pages" 
                    :key="index.name" 
                    :name="item.name" 
                    @click.native="linkTo(item)"
                    @on-close="close(item)"
                    :closable="true"
                    :color="item==currentPath?'blue':'default'"
                >{{ item }}</Tag>
      </div>
  </div>
</template>
<script>

   export default{
       data(){
           return{
               
               
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
               if(item==this.currentPath){
                  if(this.pages.indexOf(item)==(this.pages.length-1)){
                      //当前页变成倒数第二页
                      console.log(0)
                      console.log("正常",this.pages.indexOf(item),this.pages.length-1)
                      let i = this.pages.indexOf(item);
                      
                      this.$store.commit('closepageOpenedList',item)
                      this.$store.commit('orderCurrentPath',this.pages.length-1)
                  }else{
                     
                      console.log(1)
                      //当前页变成i页面
                      let i = this.pages.indexOf(item);
                      this.$store.commit('closepageOpenedList',item)
                      this.$store.commit('orderCurrentPath',i)
                  }
               }else{
                   console.log(2)
                   this.$store.commit('closepageOpenedList',item)
               }
               
               
           },
           closeAll(){
                this.$store.commit('closeallpageOpenedList')
           },
           closeOther(){
                this.$store.commit('closeotherpageOpenedList')
           },
           linkTo(item){
               console.log(item)
               let routerObj = {};
               //routerObj.name = item.name;
               routerObj.name = item;
                if (item.argu) {
                    routerObj.params = item.argu;
                }
                if (item.query) {
                    routerObj.query = item.query;
                }
                
                    this.$router.push(routerObj);
               

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

