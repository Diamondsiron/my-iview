<template>
  <div>
    <div> </div>
    <ul>
      <li>
        <div>组件</div>
        <ul>
          <li @click="handleChange()">富文本编辑器</li>
          <li @click="handleChange()">markdown编辑</li>
          <li @click="handleChange()">图片预览编辑</li>
           <li @click="handleChange()">可拖拽列表</li>
          <li @click="handleChange()">城市联动</li>
          <li @click="handleChange()">文件上传</li>
          <li @click="handleChange()">数字渐变</li>
          
        </ul>
      </li>
      <li>
        <div>表单编辑</div>
        <ul>
          <li>文章发布</li>
          <li>工作流</li>
        </ul>
      </li>
      <li>
        <div>表格</div>
        <ul>
           <li @click="handleChange('dragable-table')">可拖拽排序</li>
           <li @click="handleChange('editable-table')">可编辑表格</li>
           <li @click="handleChange('searchable-table')">可搜索表格</li>
           <li @click="handleChange('exportable-table')">表格导出数据</li>
           <li @click="handleChange('table-to-image')">表格转图片</li>
        </ul>
      </li>
      <li>
        <div>高级路由</div>
        <ul>
          <li @click="handleChange('mutative-router')">动态路由</li>
          <li @click="handleChange('argument-page')">带参页面</li>
        </ul>
      </li>
      <li>
        <div>错误页面</div>
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