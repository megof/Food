<template>
<<<<<<< HEAD
  <div class="d-flex  justify-content-between">
         <h2>{{ title }}:</h2>
        <button
           @click="createAction"
           class="btn btn-outline-dark"
           data-bs-toggle="offcanvas"
           :data-bs-target='`#${id}`'
           ><i
           class="bi bi-person-plus-fill me-2"></i><span
           class="d-none d-md-inline-block">Agregar
           {{
           title
           }}</span>
           </button>
=======
  <div class="d-flex justify-content-between">
    <h2>{{ title }}:</h2>
    <button
      @click="createAction"
      class="btn btn-outline-success"
      data-bs-toggle="offcanvas"
      :data-bs-target="`#${id}`"
    >
      <i class="bi bi-person-plus-fill me-2"></i
      ><span class="d-none d-md-inline-block">Agregar {{ title }}</span>
    </button>
>>>>>>> 6cca3b7a39dfd25944f149e0869ddbbd62359d1a
  </div>
</template>

<script setup>
import { useOffCanvasStore } from "../store/offCanvas.js";
const useOffCanvas = useOffCanvasStore();
const { createAction } = useOffCanvas;
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
