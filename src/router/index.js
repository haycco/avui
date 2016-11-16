import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import IndexView from '../views/IndexView.vue'
import Buttons from '../views/ui/Buttons.vue'

const router = new Router({
  mode: 'history',
scrollBehavior: () => ({ y: 0 }),
routes: [
  { path: '/login', component: Login },
  { path: '/', component: Dashboard, children: [
                                            { path: '', component: IndexView, name: 'IndexView', description: 'Index starter' },
                                            { path: '/buttons', component: Buttons, name: 'Buttons', description: 'UI Buttons' }] }
  ]
});

export default router
