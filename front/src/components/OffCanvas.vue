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
      <FormUser />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

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
  },
};
</script>

<style scoped></style>
