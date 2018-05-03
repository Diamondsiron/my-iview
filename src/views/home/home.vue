<template>
    <div class="home-main center">
        <div class="via">
            <img src="static/timg.jpg" alt="">
        </div>
        <div class="m-l240">
            <h4>当前用户所拥有的权限</h4> 
        </div>
        <ul class="m-l240">
            <li>新增公司机构</li>
            <li>新增公司机构人员</li>
            <li>新增角色</li>
            <li>查询角色下人员</li>
            
        </ul>
        
    </div>
</template>
<script>
  export default{
    name:'home'
  }
  
</script>
<style <style scoped>
.m-l240{
    margin-left: 240px
}


.via{
    width: 100px;
    margin: 0px auto;
}
img{
    width: 100%;
}
.center{
    text-align: left
}
li{
    list-style: none;
}
</style>

