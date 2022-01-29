import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import Class from '@/views/Class.vue'
import ClassStudentManage from '@/views/ClassStudentManage.vue'
import ClassExamManage from '@/views/ClassExamManage.vue'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import FindPassword from '@/views/FindPassword.vue'
import ResetPassword from '@/views/ResetPassword.vue'

import Home from '../views/Home.vue'
import User from '../views/User.vue'

import FAQ from '../views/FAQ.vue'
import Announcement from '../views/Announcement.vue'

import GeneralList from '@/views/problem/GeneralList.vue'
import ClassList from '@/views/problem/ClassList.vue'
import Problem from '@/views/problem/Problem.vue'
import CreateProblem from '@/views/problem/CreateProblem.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/user',
  name: 'User',
  component: User
},
{
  path: '/faqs',
  name: 'FAQ',
  component: FAQ
},
{
  path: '/announcements',
  name: 'Announcement',
  component: Announcement
},
{
  // 수업
  path: '/class',
  name: 'Class',
  component: Class,
  meta: { auth: true }, // 로그인 권한이 필요한 페이지에 해당 태그를 작성하면 됩니다
  children: [
    {
      path: 'student-manage',
      component: ClassStudentManage,
      meta: { isAdmin: true } // 교수, superadmin의 권한이 필요한 페이지에 작성하면 됩니다
    },
    {
      path: 'exam-manage',
      component: ClassExamManage,
      meta: { isAdmin: true }
    }
  ]
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/find-password',
  name: 'FindPassword',
  component: FindPassword
},
{
  path: '/reset-password',
  name: 'ResetPassword',
  component: ResetPassword
},
{
  path: '/problem/general',
  component: GeneralList
},
{
  path: '/problem/class',
  component: ClassList
},
{
  path: '/problem/:problemType/:problemID',
  name: 'Problem',
  component: Problem,
  meta: { auth: true },
  children: [
    {
      path: ':contestID/:contestProblemID',
      component: Problem
    }
  ]
},
{
  path: '/:problemType/create-problem',
  name: 'CreateProblem',
  component: CreateProblem
  // meta: { isAdmin: true }
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    alert('로그인이 필요합니다')
    next({ name: 'Login' })
  } else if (to.meta.isAdmin && !store.getters.isAdmin) {
    alert('잘못된 접근입니다')
    next({ name: 'NotFound' })
  } else next()
})

export default router
