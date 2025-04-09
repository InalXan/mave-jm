import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GermanyView from '../views/countries/GermanyView.vue'
import EnglandView from '../views/countries/EnglandView.vue'
import BelgiumView from '../views/countries/BelgiumView.vue'
import ItalyView from '../views/countries/ItalyView.vue'
import FrenchView from '../views/countries/FrenchView.vue'
import AmericaView from '../views/countries/AmericaView.vue'
import BulgariaView from '../views/countries/BulgariaView.vue'
import SpanishView from '../views/countries/SpanishView.vue'
import MaltaView from '../views/countries/MaltaView.vue'
import IrlandView from '../views/countries/IrlandView.vue'
import PortugalView from '../views/countries/PortugalView.vue'
import HollandView from '../views/countries/HollandView.vue'
import GreeceView from '../views/countries/GreeceView.vue'
import PolandView from '../views/countries/PolandView.vue'
import LuxemburgView from '../views/countries/LuxemburgView.vue'
import RomaniaView from '../views/countries/RomaniaView.vue'
import EstoniaView from '../views/countries/EstoniaView.vue'
import LatviaView from '../views/countries/LatviaView.vue'
import NorwayView from '../views/countries/NorwayView.vue'
import KoreView from '../views/countries/KoreView.vue'
import DenmarkView from '../views/countries/DenmarkView.vue'
import CanadaView from '../views/countries/CanadaView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // counbtries
    { path: '/germany', name: 'germany', component: GermanyView },
    { path: '/england', name: 'england', component: EnglandView },
    { path: '/belgium', name: 'belgium', component: BelgiumView },
    { path: '/italy', name: 'italy', component: ItalyView },
    { path: '/french', name: 'french', component: FrenchView },
    { path: '/america', name: 'america', component: AmericaView },
    { path: '/bulgaria', name: 'bulgaria', component: BulgariaView },
    { path: '/spanish', name: 'spanish', component: SpanishView },
    { path: '/malta', name: 'malta', component: MaltaView },
    { path: '/irland', name: 'irland', component: IrlandView },
    { path: '/portugal', name: 'portugal', component: PortugalView },
    { path: '/holland', name: 'holland', component: HollandView },
    { path: '/greece', name: 'greece', component: GreeceView },
    { path: '/poland', name: 'poland', component: PolandView },
    { path: '/luxemburg', name: 'luxemburg', component: LuxemburgView },
    { path: '/romania', name: 'romania', component: RomaniaView },
    { path: '/estonia', name: 'estonia', component: EstoniaView },
    { path: '/latvia', name: 'latvia', component: LatviaView },
    { path: '/norway', name: 'norway', component: NorwayView },
    { path: '/kore', name: 'Kore', component: KoreView },
    { path: '/denmark', name: 'denmark', component: DenmarkView },
    { path: '/canada', name: 'canada', component: CanadaView },

    { path: '/', name: 'home', component: HomeView },
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
    // Admin Panel Authentication
    {
      path: '/mave/admin/login',
      name: 'admin-login',
      component: () => import('../views/admin/LoginView.vue'),
    },
    {
      path: '/mave/admin/register',
      name: 'admin-register',
      component: () => import('../views/admin/RegisterView.vue'),
    },
    // Admin Panel Pages (Giriş gerektiriyor)
    {
      path: '/mave/admin/profile',
      name: 'admin-profile',
      meta: { requiresAuth: true },
      component: () => import('../views/admin/ProfileView.vue'),
    },
    {
      path: '/mave/admin/inbox',
      name: 'admin-inbox',
      meta: { requiresAuth: true },
      component: () => import('../views/admin/InboxView.vue'),
    },
    {
      path: '/mave/admin/corporative',
      name: 'admin-corporative',
      meta: { requiresAuth: true },
      component: () => import('../views/admin/CorporativeView.vue'),
    },
    {
      path: '/mave/admin/about',
      name: 'admin-about',
      meta: { requiresAuth: true },
      component: () => import('../views/admin/AboutView.vue'),
    },
  ],
  // 🚀 Sayfa değiştiğinde en üste kaydır
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' } // Sayfanın en üstüne yumuşak geçiş yap
  }
})

// **🚀 Güncellenmiş beforeEach Middleware**
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken') // Boolean olarak kontrol et

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/mave/admin/login') // Eğer giriş yapılmadıysa login'e yönlendir
  }

  next() // Eğer yetki sorunu yoksa devam et
})

export default router