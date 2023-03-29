<template>
  <Loader v-if="loader" />
  <RouterView v-else />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Loader: defineAsyncComponent(() => import("./components/Loader.vue")),
  },

  data() {
    return {
      loader: true,
    };
  },

  created() {
    setTimeout(() => {
      this.loader = false;
    }, 200);
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
