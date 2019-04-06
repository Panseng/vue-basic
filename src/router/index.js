import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout'
import A from '@/views/a/a'
import Ba from '@/views/b/ba'
import Bb from '@/views/b/bb'

Vue.use(Router)

export const basicRoutes = [
  {
    path: '/',
    name: 'default',
    component: Layout,
    redirect: '/a',
    meta: {
      title: 'NavToA',
      icon: 'el-icon-location'
    },
    children: [
      {
        path: 'a',
        name: 'A',
        component: A,
        meta: { title: 'A' }
      }
    ]
  },
  {
    path: '/b',
    name: 'basicB',
    component: Layout,
    redirect: '/b/ba',
    meta: {
      title: 'NavToB',
      icon: 'el-icon-menu'
    },
    children: [
      {
        path: 'ba',
        name: 'Ba',
        component: Ba,
        meta: { title: 'Ba' }
      },
      {
        path: 'bb',
        name: 'Bb',
        component: Bb,
        meta: { title: 'Bb' }
      }
    ]

  }
]

export default new Router({
  routes: basicRoutes
})
