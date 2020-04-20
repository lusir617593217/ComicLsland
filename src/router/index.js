import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../components/Classify')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../components/Detail')
  },
  {
    path: '/hc',
    name: 'HC',
    component: () => import('../components/HC'),
    children: [
      {
        path: 'history',
        name: 'History',
        component: () => import('../components/HC/History')
      },
      {
        path: 'collection',
        name: 'Collection',
        component: () => import('../components/HC/Collection')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register')
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../components/More')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../components/My')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../components/Ranking')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../components/Search')
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: () => import('../components/SearchResult')
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('../components/Vip')
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
