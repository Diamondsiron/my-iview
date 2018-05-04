import {otherRouter, appRouter} from '@/router/router';
const app = {
  state:{
        routers: [
          otherRouter,
          ...appRouter
       ]
  },
  mutations:{

  },
}
export default app;