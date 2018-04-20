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
        {path:'home',title:'home',name:'home_index',component:()=>import('../views/home/home.vue')}
      ]
    },
    {
      path: '/component',
      icon: 'social-buffer',
      name: 'component',
      title: '组件',
      component: Mains,
      children: [
          {
              path: 'text-editor',
              icon: 'compose',
              name: 'text-editor',
              title: '富文本编辑器',
              component: () => import('../views/my-components/text-editor/text-editor.vue')
          },
          {
              path: 'md-editor',
              icon: 'pound',
              name: 'md-editor',
              title: 'Markdown编辑器',
              component: () => import('../views/my-components/markdown-editor.vue')
          },
          {
              path: 'image-editor',
              icon: 'crop',
              name: 'image-editor',
              title: '图片预览编辑',
              component: () => import('../views/my-components/image-editor/image-editor.vue')
          },
          {
              path: 'draggable-list',
              icon: 'arrow-move',
              name: 'draggable-list',
              title: '可拖拽列表',
              component: () => import('../views/my-components/draggable-list.vue')
          },
          {
              path: 'area-linkage',
              icon: 'ios-more',
              name: 'area-linkage',
              title: '城市级联',
              component: () => import('../views/my-components/area-linkage.vue')
          },
          {
              path: 'file-upload',
              icon: 'android-upload',
              name: 'file-upload',
              title: '文件上传',
              component: () => import('../views/my-components/file-upload.vue')
          },
          {
              path: 'count-to',
              icon: 'arrow-graph-up-right',
              name: 'count-to',
              title: '数字渐变',
              // component: () => import('@/views/my-components/count-to/count-to.vue')
              component: () => import('../views/my-components/count-to.vue')
          },
          {
              path: 'split-pane-page',
              icon: 'ios-pause',
              name: 'split-pane-page',
              title: 'split-pane',
              component: () => import('../views/my-components/split-pane-page.vue')
          }
      ]
  }

  ]
})
