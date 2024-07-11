import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component:() => import("@/views/ProvideInjectView.vue"),
    }
  ]
})

export default router
