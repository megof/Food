import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/products",
      name: "products",
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/admin/orders",
      name: "admin-orders",
      component: () => import("../modules/orders/views/OrdersView.vue"),
    },
    {
      path: "/admin/products",
      name: "admin-products",
      component: () => import("../modules/products/views/ProductsView.vue"),
    },
    {
      path: "/admin/users",
      name: "admin-users",
      component: () => import("../modules/users/views/UsersView.vue"),
    },
  ],
});

export default router;