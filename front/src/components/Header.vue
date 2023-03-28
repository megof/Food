<template>
  <header>
    <Nav />
    <Galery class="z-1" />
  </header>
</template>

<script>
import { navBarColor } from "@/helpers/domEvents.js";
import Nav from "./Nav.vue";
import Galery from "./Galery.vue";

export default {
  components: {
    Galery,
    Nav,
  },

  methods: {
    changeColorNav() {
      console.log(this.$route.fullPath);
      navBarColor();
    },
  },

  mounted() {
    this.changeColorNav();
  },
};
</script>

<style></style>
