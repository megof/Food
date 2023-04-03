<template>
  <Loader v-if="loader" />
  <router-view v-slot="{ Component, route }" v-else>
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>
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
