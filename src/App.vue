<template>
  <div  class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
   
    overflow: hidden;
}
.app-main{
    width: 100%;
    height: 100%;
    font-size: 16px;
}
</style>
