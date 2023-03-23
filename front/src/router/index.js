import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: () => import("../modules/orders/views/Orders.vue"),
    },
    {
      path: "/about",
      name: "about",
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/admin/orders",
      name: "about",
      component: () => import("../modules/orders/views/Orders.vue"),
    },
  ],
});

export default router;
