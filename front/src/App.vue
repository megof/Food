<template>
  <Loader v-if="loader" />
  <RouterView />
</template>

<script>
import Loader from "./components/Loader.vue";

export default {
  components: {
    Loader,
  },

  data() {
    return {
      loader: true,
    };
  },

  created() {
    this.loader = false;
  },
};
</script>

<style></style>
