<template>
  <div>
    <div> </div>
    <ul>
      <li>
        <div>组件</div>
        <ul>
          <li @click="handleChange()">富文本编辑器</li>
          <li @click="handleChange()">图片预览编辑</li>
          <li @click="handleChange()">城市联动</li>
          <li @click="handleChange()">文件上传</li>
          
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