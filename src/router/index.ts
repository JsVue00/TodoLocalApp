import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useStore } from '@/stores'

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
      component: () => import("@/views/ProvideInjectView.vue"),
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: () => import("@/views/user-management/UserListView.vue"),
    },
    {
      path: '/profile/:userId',
      name: 'profile',
      component: () => import("@/views/user-management/UserProfileView.vue"),
      // beforeRouteLeave: (to, from, next) => {
      // beforeEnter: (to, from, next) => {
      //   const store = useStore();
      //   store.userLoggedIn = [];
      //   next('/');
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/LoginView.vue"),
    },

  ]
})

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (!store.userLoggedIn.length && to.path !== '/login') {
    next('/login');
  } else if (store.userLoggedIn.length && to.path === '/login') {
    next('/');
  } else {
    next();
  }
})

export default router
