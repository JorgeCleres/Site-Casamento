import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    component: () => import('../views/Home.vue')
  },
  {
    path: '/presentes',
    name: 'Presentes',
    component: () => import('../views/Presentes.vue')
  },
  {
    path: '/confirmar',
    name: 'Confirmar',
    component: () => import('../views/Confirmar.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
