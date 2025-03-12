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
      path: '/favorite-questions',
      name: 'questions',
      component: () => import('../views/QuestionsView.vue'),
    },

    {
      path: '/truck-visa',
      name: 'truck',
      component: () => import('../views/TruckvisaView.vue'),
    },
    {
      path: '/advantages',
      name: 'Advantages',
      component: () => import('../views/AdvantagesView.vue'),
    },
    {
      path: '/how-can-i-get-visa',
      name: 'howcanigetvisa',
      component: () => import('../views/HowgetvisaView.vue'),
    },

    {
      path: '/order-visa',
      name: 'order',
      component: () => import('../views/OrderView.vue'),
    },
    //admin panel authentication

    {
      path: '/mave/admin/login',
      name: 'admin-login',
      component: () => import('../views/admin/LoginView.vue'),
    },
    // admin panel pages
    {
      path: '/mave/admin/profile',
      name: 'admin-profile',
      component: () => import('../views/admin/ProfileView.vue'),
    },

  ],
})

export default router
