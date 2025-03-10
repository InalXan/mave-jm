import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/corporation-feedback',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/how-can-i-get-visa',
      name: 'howcanigetvisa',
      component: () => import('../views/HowgetvisaView.vue'),
    },
  ],
})

export default router
