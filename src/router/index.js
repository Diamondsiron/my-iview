import Vue from 'vue'
import Router from 'vue-router'
import {routers, appRouter} from './router';

Vue.use(Router)

const RouterConfig = {
  // mode: 'history',
  routes: routers
};

export const router = new Router(RouterConfig);


router.beforeEach((to,from,next) => {
  if(to.name=='login'){
    next(true);
  }else{
    if(localStorage.getItem("UserName")=='admin'){
      next(true);
    }else{
      console.log(to)
      console.log(from)
      console.log('error')
      next({
        name: 'login'
      }) 
    }

  }
  
  

})