import Mains from '../views/main.vue'

export const page404 ={
  path: '/*',
  name: 'error-404',
  meta: {
      title: '404-页面不存在'
  },
  component: () => import('@/views/error-page/404.vue')
}
export const loginRouter ={
  path: '/login',
  name: 'login',
  meta: {
      title: '登录'
  },
  component: () => import('@/views/login.vue')
}
export const locking = {
  path: '/locking',
  name: 'locking',
  component: () => import('@/views/lockscreeen/lockscreeen.vue')
};
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Mains,
  children: [
      { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
      
  ]
};
export const appRouter = [
  {
    path: '/',
    name: 'otherRouter',
    
    component: Mains,
   
  },
  {
    path: '/component',
    icon: 'social-buffer',
    name: 'component',
    title: '组件',
    component: Mains,
    children:[
      {path:'home',title:'home',name:'home_index',component:()=>import('@/views/home/home.vue')},
      {path:'image-editor',title:'image-editor',name:'image-editor',component:()=>import('@/views/my-components/image-editor/image-editor.vue')},
      {path:'text-editor',title:'text-editor',name:'text-editor',component:()=>import('@/views/my-components/text-editor/text-editor.vue')},

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
  {
    path: '/advanced-router',
    icon: 'ios-infinite',
    name: 'advanced-router',
    title: '高级路由',
    component: Mains,
    children: [
          { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
          { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') },
          { path: 'order-info/:id', title: '带参详情页面', name: 'order-info', icon: 'android-send', component: () => import('@/views/advanced-router/order-info.vue') }
      ]
  },
  {
    path: '/form',
    icon: 'android-checkbox',
    name: 'form',
    title: '表单编辑',
    component: Mains,
    children: [
        { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish.vue') },
        { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow.vue') }

      ]
  },
  {
    path: '/company',
    icon: 'key',
    name: 'company',
    title: '公司管理',
    component: Mains,
    children: [
        {
            path: 'insert',
            icon: 'compose',
            name: 'insert',
            title: '新增',
            component: () => import('@/views/company/insert.vue')
        },
        {
            path: 'update',
            icon: 'compose',
            name: 'update',
            title: '修改',
            component: () => import('@/views/company/update.vue')
        },
        {
            path: 'detail',
            icon: 'compose',
            name: 'detail',
            title: '详情',
            component: () => import('@/views/company/detail.vue')
        },
        {
            path: 'list',
            icon: 'compose',
            name: 'list',
            title: '列表',
            component: () => import('@/views/company/list.vue')
        },
        {
            path: 'insertstaff',
            icon: 'compose',
            name: 'insertstaff',
            title: '新增',
            component: () => import('@/views/staff/insert.vue')
        },
        {
            path: 'updatestaff',
            icon: 'compose',
            name: 'updatestaff',
            title: '修改',
            component: () => import('@/views/staff/update.vue')
        },
        {
            path: 'detailstaff',
            icon: 'compose',
            name: 'detailstaff',
            title: '详情',
            component: () => import('@/views/staff/detail.vue')
        },
        {
            path: 'liststaff',
            icon: 'compose',
            name: 'liststaff',
            title: '列表',
            component: () => import('@/views/staff/list.vue')
        },
    ]
  }
  

]

export const routers = [
 
  loginRouter,
  otherRouter,
  locking,
  ...appRouter,
  page404,

];