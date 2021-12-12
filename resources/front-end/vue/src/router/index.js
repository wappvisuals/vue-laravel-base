import { createRouter, createWebHistory } from 'vue-router'

import PageNotFound from '../components/404.vue';
import AdminTemplate from '../views/admin/components/Template.vue';
import AdminLogin from '../views/admin/modules/auth/Login.vue';

import { ADMIN } from './admin.js';

const routes = [
  { 
    path: "/:catchAll(.*)",
    name: "notfound",
    component: PageNotFound,
    meta: {
      requiresAuth: false
    }
  },  
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminTemplate,
    // redirect: { name : 'landing' },
    // meta: {auth: true},
    children: ADMIN
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
