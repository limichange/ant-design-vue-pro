import Vue from 'vue'

Vue.prototype.$proBus = new Vue()

export { default as GlobalHeader } from './GlobalHeader'
export { default as Copyright } from './Copyright'
export { default as SiderMenu } from './SiderMenu/index'
