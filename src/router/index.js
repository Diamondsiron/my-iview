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
  next(true);

})