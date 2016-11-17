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
routes: [
  { path: '/login', component: Login },
  { path: '/', component: Dashboard, children: [
                                            { path: '', component: IndexView, name: 'IndexView', description: 'Index starter' },
                                            { path: '/widgets', component: Widgets, name: 'Widgets', description: 'Widgets' },
                                            { path: '/buttons', component: Buttons, name: 'Buttons', description: 'UI Elements Buttons' },
                                            { path: '/general', component: General, name: 'General', description: 'UI Elements General' },
                                            { path: '/icons', component: Icons, name: 'Icons', description: 'UI Elements Icons' },
                                            { path: '/modals', component: Modals, name: 'Modals', description: 'UI Elements Modals' },
                                            { path: '/sliders', component: Sliders, name: 'Sliders', description: 'UI Elements Sliders' },
                                            { path: '/timeline', component: Timeline, name: 'Timeline', description: 'UI Elements Timeline' }
                                            ] }
  ]
});

export default router
