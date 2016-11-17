import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import IndexView from '../views/IndexView.vue'
import Widgets from '../views/Widgets.vue'
import Buttons from '../views/ui/Buttons.vue'
import General from '../views/ui/General.vue'
import Icons from '../views/ui/Icons.vue'
import Modals from '../views/ui/Modals.vue'
import Sliders from '../views/ui/Sliders.vue'
import Timeline from '../views/ui/Timeline.vue'

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'active',
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Dashboard, children: [
                                              { path: '', component: IndexView, name: 'IndexView', description: 'Index starter' },
                                              { path: '/widgets', component: Widgets, name: 'Widgets', description: 'Widgets' },
                                              { path: '/ui/buttons', component: Buttons, name: 'Buttons', description: 'UI Elements Buttons' },
                                              { path: '/ui/general', component: General, name: 'General', description: 'UI Elements General' },
                                              { path: '/ui/icons', component: Icons, name: 'Icons', description: 'UI Elements Icons' },
                                              { path: '/ui/modals', component: Modals, name: 'Modals', description: 'UI Elements Modals' },
                                              { path: '/ui/sliders', component: Sliders, name: 'Sliders', description: 'UI Elements Sliders' },
                                              { path: '/ui/timeline', component: Timeline, name: 'Timeline', description: 'UI Elements Timeline' }
                                              ] }
  ]
});

export default router
