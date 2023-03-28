import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // basicas
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/HomeProducts.vue"),
    },

    // ruta admin
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/modules/main/layouts/AdminLayout.vue"),
      children: [
        // {
        //   path: "",
        //   name: "admin-home",
        //   component: () => import("@/modules/main/layouts/AdminLayout.vue"),
        // },
        {
          path: "users",
          name: "admin-users",
          component: () => import("@/modules/main/layouts/AdminLayout.vue"),
        },
        {
          path: "products",
          name: "admin-products",
          component: () => import("@/modules/main/layouts/AdminLayout.vue"),
        },
        {
          path: "orders",
          name: "admin-orders",
          component: () => import("@/modules/main/layouts/AdminLayout.vue"),
        },
      ],
    },

    // {
    //   path: "/admin/users",
    //   name: "admin-users",
    //   component: () => import("../modules/users/views/UsersView.vue"),
    // },

    // error - 404
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/modules/shared/pages/404.vue"),
    },
  ],
});

export default router;
