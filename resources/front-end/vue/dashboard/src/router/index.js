import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../components/404.vue';
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Base from '../components/base.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Home
  },
  {
    path: '/admin',
    component: Base,
    redirect: { name : 'landing' },
    children: [{
      path: 'dashboard',
      component: Dashboard
    }]
  },
  { 
    path: "/:catchAll(.*)",
    name: "notfound",
    component: PageNotFound,
    meta: {
      requiresAuth: false
    }
  },  
  
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
