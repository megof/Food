<template>
  <div :id="id" :class="'offcanvas text-bg-dark font-canvas offcanvas-' + position">
    <div class="offcanvas-header d-flex justify-content-center gap-4">
      <h3
        class="offcanvas-title text-center d-flex justify-content-center"
        v-if="title === 'Tu Carrito'"
      >
        <span class="material-symbols-outlined fs-1"> shopping_cart </span>{{ title }}
      </h3>
      <h3
        class="offcanvas-title text-center d-flex justify-content-center"
        v-if="title === 'Login'"
      >
        <span class="material-symbols-outlined fs-1"> person </span>{{ title }}
      </h3>
      <button class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <FormUser v-if="title === 'Login'" />
      <CartShop v-if="title === 'Tu Carrito'" :orders="orders" :units="units" :total="total" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";
const useCart = useCartStore();

// const {  } = useCart;
const { totalItems, itemsCart, total } = storeToRefs(useCart);

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "start",
    },
  },

  components: {
    FormUser: defineAsyncComponent(() => import("./FormUser.vue")),
    CartShop: defineAsyncComponent(() => import("./CartShop.vue")),
  },

  data() {
    return {
      orders: itemsCart,
      units: parseInt(totalItems),
      total: total,
    };
  },

  // methods: {
  //   getOrders() {
  //     const cart = JSON.parse(localStorage.getItem("cart"));
  //     const totalUnits = localStorage.getItem("totalItems");
  //     const totalPrice = localStorage.getItem("total");
  //     if (cart) {
  //       this.orders = cart;
  //       this.units = totalUnits;
  //       this.total = totalPrice;
  //     }
  //   },
  // },

  // created() {
  //   this.getOrders();
  // },
};
</script>

<style scoped></style>
