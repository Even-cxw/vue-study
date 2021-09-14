import { createRouter, createWebHistory } from 'vue-router'
import Home1 from '../views/Home1.vue'
import Home3 from '../views/Home3.vue'
import Home4 from '../views/Home4.vue'

const routes = [
  {
    path: '/',
    name: 'Home1',
    component: Home1
  },
  {
    path: '/Home3',
    name: 'Home3',
    component: Home3
  },
  {
    path: '/Home4',
    name: 'Home4',
    component: Home4
  },
  {
    path: '/Home2',
    name: 'Home2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
