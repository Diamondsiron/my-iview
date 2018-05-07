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
  console.log("to",to)
  util.openNewPage(router.app, to.name, to.params, to.query);
  iView.LoadingBar.finish();
 
});
/* let util = {};
util.openNewPage = function (vm,name,argu,query){
  let pageOpenedList = vm.$store.state.app.pageOpenedList;
  let openedPageLen = pageOpenedList.length;
  let i = 0;
  let tagHasOpened = false;
  let tag = {}
  tag.name = name;
  tag.argu = argu;
  tag.query = query;
 // console.log(name)
  
 // console.log("currentPath",vm.$store.state.app.currentPath)
  

  if(pageOpenedList.indexOf(tag)<0){
    vm.$store.commit('pushpageOpenedList', tag);
  }else{
    vm.$store.commit('setCurrentPath', tag);
  }
  
} */
let util = {};
util.openNewPage = function (vm,name,argu,query){
  let pageOpenedList = vm.$store.state.app.pageOpenedList;
  let openedPageLen = pageOpenedList.length;
  let i = 0;
  let tagHasOpened = false;
 // console.log(name)
  let tag = {}
  tag.name = name
 // console.log("currentPath",vm.$store.state.app.currentPath)
  vm.$store.commit('setCurrentPath', tag);
 // console.log("currentPath",vm.$store.state.app.currentPath)
 function check(){
   for(let i=0;i<pageOpenedList.length;i++){
      if(pageOpenedList[i].name==tag.name){
        return false
      }
      
   }
   return true
 }
let tags = []
for(let i=0;i<vm.$store.state.app.routers.length;i++ ){
  
}
console.log("tages",vm.$store.state.app.routers,tags)
 //let tags = vm.$store.state.app.tagsList.filter
 if(check()){
    vm.$store.commit('pushpageOpenedList', tag);
  } 
  console.log(vm.$store.state.app.pageOpenedList)
}