import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.prototype.$http = axios
Vue.use(Router, axios, BootstrapVue)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
