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
    background: #f0f0f0;
    overflow: hidden;
}
.app-main{
    width: 100%;
    height: 100%;
    font-size: 16px;
}
.xx{
    border-left: 1px solid #e9eaec;
}
th{
    border-right: 1px solid #e9eaec;height: 40px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #f8f8f9;    min-width: 0;
    box-sizing: border-box;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-top: 1px solid #e9eaec;
    border-bottom: 1px solid #e9eaec;
   
}
th div{
     word-wrap: normal;
    vertical-align: middle;    padding-left: 18px;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;
}
td{
    border-right: 1px solid #e9eaec;background-color: #fff;
    transition: background-color .2s ease-in-out;    min-width: 0;
    height: 48px;
    box-sizing: border-box;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-bottom: 1px solid #e9eaec;
}
td div{
    padding-left: 18px;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;

}
.home-main{
    width: 800px;
    margin-left: auto;
    margin-right: auto;

}
table{
    width:100%
}
</style>
