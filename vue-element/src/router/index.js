import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Left from '@/components/Left'
import Index from '@/components/Index'
import Application from '@/components/Application'
import Config from '@/components/Config'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/application',
      component: Application
    },
    {
      path: '/left',
      component: Left
    },
    {
      path: '/config',
      component: Config
    },
    {
      path:"/index",
      component:Home
    }
  ]
})
