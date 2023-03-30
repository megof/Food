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
    {
      path: "/payment",
      name: "payment-steps",
      component: () => import("@/modules/payments/views/Payment.vue"),
      children:[
        {
          path: "step1",
          name: "step-1",
          component: () => import("@/modules/payments/components/Step1.vue"),
        },
        {
          path: "step2",
          name: "step-2",
          component: () => import("@/modules/payments/components/Step2.vue"),
        },
        {
          path: "step3",
          name: "step-3",
          component: () => import("@/modules/payments/components/Step3.vue"),
        }
      ]
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
          path: "toppings",
          name: "admin-toppings",
          component: () => import("@/modules/toppings/views/ToppingsView.vue"),
        },
        {
          path: "orders",
          name: "admin-orders",
          component: () => import("@/modules/orders/views/OrdersView.vue"),
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
