import {otherRouter, appRouter} from '@/router/router';
/* 主要包括三个变量 当前打开页面 展示路由的list 和所有路由的list */
const app = {
  state:{
        pageOpenedList: [{
            title: '首页',
            path: '',
            name: 'home_index'
        }],
        routers: [
          otherRouter,
          ...appRouter
       ],
       tagsList: [...otherRouter.children],
       currentPath: [
          {
            title: '首页',
            path: '',
            name: 'home_index'
          }
      ],
  },
  mutations:{
    setCurrentPath (state, pathArr) {
        state.currentPath = pathArr;
    },
    pushpageOpenedList(state, pathArr){
      state.pageOpenedList.push(pathArr);
    },
    closeallpageOpenedList(){
      state.pageOpenedList.splice(1);
    },
    closeotherpageOpenedList(){

    },
    closepageOpenedList(state, pathArr){
     console.log(pathArr)
     state.pageOpenedList.splice(state.pageOpenedList.indexOf(pathArr),1)
      
    }


  },
}
export default app;