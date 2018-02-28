import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Seepost from '@/components/Seepost'
import Mypage from '@/components/Mypage'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/post/:id',
      name: 'Seepost',
      component: Seepost
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/post/:id/edit',
      name: 'Update',
      component: Update
    }
  ]
})
