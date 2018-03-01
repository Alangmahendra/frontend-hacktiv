import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Seepost from '@/components/Seepost'
import Mypage from '@/components/Mypage'
import Update from '@/components/Update'
import nav   from './nav'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: nav.globalNav
    },
    {
      path: '/post/:id',
      name: 'Seepost',
      component: Seepost
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage,
      beforeEnter: nav.authNav
    },
    {
      path: '/post/:id/edit',
      name: 'Update',
      component: Update,
      beforeEnter: nav.authNav
    }
  ]
})
