<template>
  <!-- ComponentAdmin -->
  <NavAdmin />
  <h1 class="text-center">Administracion</h1>
  <router-view></router-view>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue";

export default {
  components: {
    NavAdmin,
  },
};
</script>

<style></style>
