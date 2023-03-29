import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // basicas
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeProducts.vue"),
    },

    // ruta admin
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/modules/main/layouts/AdminLayout.vue"),
      children: [
        {
          path: "",
          name: "admin-users",
          component: () => import("@/modules/users/views/UsersView.vue"),
        },
        {
          path: "products",
          name: "admin-products",
          component: () => import("@/modules/products/views/ProductsView.vue"),
        },
        {
          path: "types",
          name: "admin-types-products",
          component: () => import("@/modules/productType/views/TypeOfProductView.vue"),
        },
        {
          path: "orders",
          name: "admin-orders",
          component: () => import("@/modules/orders/views/OrdersView.vue"),
        },
        {
          path: "coupon",
          name: "coupon",
          component: () => import("@/modules/coupon/view/Coupon.vue"),
        },
      ],
    },

    // error - 404
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
      // component: () => import("@/modules/shared/pages/404.vue"),
    },
  ],
});

export default router;
