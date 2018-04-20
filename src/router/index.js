import Vue from 'vue'
import Router from 'vue-router'
import Mains from '../views/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'otherRouter',
      
      component: Mains,
      children:[
        {path:'home',title:'home',name:'home_index',component:()=>import('../views/home/home.vue')},
        {path:'image-editor',title:'image-editor',name:'image-editor',component:()=>import('../views/my-components/image-editor/image-editor.vue')},
        {path:'text-editor',title:'text-editor',name:'text-editor',component:()=>import('../views/my-components/text-editor/text-editor.vue')},

      ]
    },
    {
      path: '/tables',
      icon: 'ios-grid-view',
      name: 'tables',
      title: '表格',
      component: Mains,
      children: [
          { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
          { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
          { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
          { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
          { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
      ]
  },
    

  ]
})
