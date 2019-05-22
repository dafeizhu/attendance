import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import Index from '../pages/index/Index'
import Course from '../pages/course/Course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    }
  ]
})
