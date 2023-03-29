<template>
  <Loader v-if="loader" />
  <RouterView v-else />
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
    setTimeout(() => {
      this.loader = false;
    });
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
