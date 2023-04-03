<template>
  <!-- ComponentAdmin -->
  <main>
    <NavAdmin />
    <div class="d-flex justify-content-between align-items-center gap-2">
      <!-- <div class="container w-30">Hola</div> -->
      <OffCanvasAdmin />
      <router-view class="w-70"></router-view>
    </div>
  </main>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue";
import OffCanvasAdmin from "../components/OffCanvasAdmin.vue";

export default {
  components: {
    OffCanvasAdmin,
    NavAdmin,
  },
};
</script>

<style scoped>
.w-70 {
  width: 100% !important;
  position: sticky !important;
  overflow: hidden;
  transition: 0.3s ease !important;
}

.show {
  width: 30% !important;
  position: sticky !important;
  height: 100vh !important;
  overflow: hidden !important;
  transition: 0.3s ease !important;
}
</style>
