import Vue from 'vue'
import Router from 'vue-router'
import CopyrightFooter from './views/CopyrightFooter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'CopyrightFooter',
    component: CopyrightFooter
  }]
})
