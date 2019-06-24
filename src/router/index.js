import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from '../layout/userlayout'
import IndexLayout from '../layout/indexlayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: UserLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import(/* webpackChunkName: "user" */ '../pages/user/Login')
        },
        {
          path: 'forget',
          name: 'forget',
          component: () => import(/* webpackChunkName: "user" */ '../pages/user/Forget')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import(/* webpackChunkName: "user" */ '../pages/user/Register')
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/signin',
      component: IndexLayout,
      children: [
        {
          path: 'signin',
          name: 'SignIn',
          component: () => import(/* webpackChunkName: "user" */ '../pages/signin/SignIn')
        },
        {
          path: 'course',
          name: 'Course',
          component: () => import(/* webpackChunkName: "user" */ '../pages/course/Course')
        },
        {
          path: 'admin',
          name: 'Admin',
          component: () => import(/* webpackChunkName: "user" */ '../pages/admin/Admin')
        }
      ]
    }
  ]
})
