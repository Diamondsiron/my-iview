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
    }
    

  ]
})
