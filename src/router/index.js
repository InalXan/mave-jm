import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/corporation-feedback",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/favorite-questions",
      name: "questions",
      component: () => import("../views/QuestionsView.vue"),
    },
    {
      path: "/truck-visa",
      name: "truck",
      component: () => import("../views/TruckvisaView.vue"),
    },
    {
      path: "/advantages",
      name: "Advantages",
      component: () => import("../views/AdvantagesView.vue"),
    },
    {
      path: "/how-can-i-get-visa",
      name: "howcanigetvisa",
      component: () => import("../views/HowgetvisaView.vue"),
    },
    {
      path: "/order-visa",
      name: "order",
      component: () => import("../views/OrderView.vue"),
    },
    // Admin Panel Authentication
    {
      path: "/mave/admin/login",
      name: "admin-login",
      component: () => import("../views/admin/LoginView.vue"),
    },
    {
      path: "/mave/admin/register",
      name: "admin-register",
      component: () => import("../views/admin/RegisterView.vue"),
    },
    // Admin Panel Pages (Giriş gerektiriyor)
    {
      path: "/mave/admin/profile",
      name: "admin-profile",
      meta: { requiresAuth: true },
      component: () => import("../views/admin/ProfileView.vue"),
    },
    {
      path: "/mave/admin/inbox",
      name: "admin-inbox",
      meta: { requiresAuth: true },
      component: () => import("../views/admin/InboxView.vue"),
    },

    {
      path: "/mave/admin/corporative",
      name: "admin-corporative",
      meta: { requiresAuth: true },
      component: () => import("../views/admin/CorporativeView.vue"),
    },
    {
      path: "/mave/admin/about",
      name: "admin-about",
      meta: { requiresAuth: true },
      component: () => import("../views/admin/AboutView.vue"),
    },

  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("accessToken") !== null;

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next("/mave/admin/login");
  }

  if (to.path !== from.path && !to.fullPath.includes("reload")) {
    window.location.replace(to.fullPath + "?reload=true");
  } else {
    next();
  }
});

export default router;
