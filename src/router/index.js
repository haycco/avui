import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexView from '../views/IndexView.vue'

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: IndexView }
  ]
});

export default router
