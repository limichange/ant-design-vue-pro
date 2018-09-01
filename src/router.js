import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Copyright',
    component: () => import('./views/Copyright')
  }, {
    path: '/GlobalHeader',
    name: 'GlobalHeader',
    component: () => import('./views/GlobalHeader')
  }]
})
