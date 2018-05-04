<template>
  <div>
      <ul>
          <li v-for="item in list" :key="item"></li>
      </ul>
  </div>
</template>
<script>
   export default{
       data(){
           return{
               list:[]
           }
       }
   } 
</script>
<style scoped>

</style>

