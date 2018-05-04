import Vue from 'vue'
import Router from 'vue-router'
import {routers, appRouter} from './router';
import iView from 'iview'
Vue.use(Router)

const RouterConfig = {
  // mode: 'history',
  routes: routers
};

export const router = new Router(RouterConfig);


router.beforeEach((to,from,next) => {
  iView.LoadingBar.start();
  if(to.name=='login'){
    next(true);
  }else{
    if(localStorage.getItem("UserName")=='admin'){
      next(true);
    }else{
      
      next({
        name: 'login'
      }) 
    }

  }
  
  

})
router.afterEach((to) => {
  util.openNewPage(router.app, to.name, to.params, to.query);
  iView.LoadingBar.finish();
 
});
let util = {};
util.openNewPage = function (vm,name,argu,query){
  let pageOpenedList = vm.$store.state.app.pageOpenedList;
  let openedPageLen = pageOpenedList.length;
  let i = 0;
  let tagHasOpened = false;
 // console.log(name)
  
 // console.log("currentPath",vm.$store.state.app.currentPath)
  vm.$store.commit('setCurrentPath', name);
 // console.log("currentPath",vm.$store.state.app.currentPath)
  if(pageOpenedList.indexOf(name)<0){
    vm.$store.commit('pushpageOpenedList', name);
  }
  console.log(vm.$store.state.app.pageOpenedList)
}