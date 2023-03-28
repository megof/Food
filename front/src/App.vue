<template>
  <Header v-if="$route.fullPath !== '/admin'" />
  <RouterView />
  <Footer v-if="$route.fullPath !== '/admin'" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Header,
    Footer,
    Loader,
  },
};
</script>

<style></style>
