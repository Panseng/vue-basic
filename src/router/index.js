import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout'
import InlineEditTable from '@/views/table/inlineEditTable'
import ComplexTable from '@/views/table/complexTable'

import A from '@/views/a/a'
import Ba from '@/views/b/ba'
import Bb from '@/views/b/bb'

Vue.use(Router)

export const basicRoutes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/inlineedittable',
    meta: {
      title: 'Table',
      icon: '#icon-table'
    },
    children: [{
      path: 'inlineedittable',
      name: 'table',
      component: InlineEditTable,
      meta: { title: '行内编辑' }
    }, {
      path: 'complextable',
      name: 'complextable',
      component: ComplexTable,
      meta: { title: '复杂表格' }
    }
    ]
  },
  {
    path: '/a',
    name: 'default',
    component: Layout,
    redirect: '/a/a',
    meta: {
      title: 'NavToA',
      icon: '#icon-location'
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
      icon: '#icon-menu'
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
