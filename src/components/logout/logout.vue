<template>
   <div  @click="logout()" style="width: 20px;display: inline-block;"> 
            <Tooltip content="退出" placement="bottom">
               <Icon  type="log-out" size="20"></Icon>
            </Tooltip>
      </div>
</template>
<script>
  export default{
    name:"logout",
    data(){
      return{}
    },
    methods:{
      logout(){
                localStorage.removeItem("organization");
                localStorage.removeItem("UserName");
                 localStorage.removeItem("User");
                 let array = []
                 this.$store.commit("setMenuList",array)
                 this.$router.push({name:'login'})
            }
    }
  }
</script>
<style scoped>

</style>

