<template>
  <div>
    <div> </div>
    <ul>
      <li>
        <div></div>
        <ul>
          <li @click="handleChange()">富文本编辑器</li>
          <li @click="handleChange()">图片预览编辑</li>
          <li @click="handleChange()">城市联动</li>
          <li @click="handleChange()">文件上传</li>
          
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name:'shrinkableMenu',
  props:{

  },
  data(){
    return{
        list:[]
    }
  },
  methods:{
    handleChange(name){
      this.$router.push({
          name:name
      });
    }
  }
}
  
</script>
<style>

</style>