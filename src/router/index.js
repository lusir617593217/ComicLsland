import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../views/Classify')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail')
  },
  {
    path: '/hc',
    name: 'HC',
    component: () => import('../views/HC'),
    children: [
      {
        path: 'history',
        name: 'History',
        component: () => import('../views/HC/History')
      },
      {
        path: 'collection',
        name: 'Collection',
        component: () => import('../views/HC/Collection')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../views/More')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/Ranking')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: () => import('../views/SearchResult')
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('../views/Vip')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
