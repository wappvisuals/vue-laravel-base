import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from '../layouts/Admin.Layout.vue';
import WebsiteLayout from '../layouts/Website.Layout.vue';

import PageNotFound from '../components/404.vue';

import AdminLogin from '../views/admin/modules/auth/Login.vue';



import { admin } from './admin.js';
import { web } from './web.js';

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
    path: '',
    name: 'home',
    component: WebsiteLayout,
    children: web
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: admin
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
