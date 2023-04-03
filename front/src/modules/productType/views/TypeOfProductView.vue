<template>
  <div class="container-md container-fluid mt-5">
    <!-- <h1 class="text-center my-4">Tipos Productos</h1> -->
    <TableTitle title="Tipos de Producto" id="offcanvasTypes" />
    <TypeOfProductOffCanvas />

    <table class="table bg-white bg-opacity-75 mt-3 w-100" v-if="types.length !==0 && vacio === false">
      <!--v-if="references.length!==0"-->
      <thead>
        <tr>
          
          <th scope="col">Nombre</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="type in types" :key="type.id">
          
          <td>{{ type.name }}</td>
          
          <td>
            <button
              class="btn btn-sm btn-secondary me-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTypes"
              @click="updateAction(type._id, type.name)"
            >
              <i class="bi bi-arrow-repeat me-1"></i
              ><span class="d-none d-md-inline-block">Actualizar</span>
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteType(type._id)">
              <i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <LoadingSpinner v-if="types.length ===0 && vacio === false"/> 
    <EmptyElemenst title="types" v-if="types.length ===0 && vacio === true"  />
  </div>
</template>

<script setup>
import TableTitle from "../components/TableTitle.vue";
import TypeOfProductOffCanvas from "../components/TypeOfProductOffCanvas.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import EmptyElemenst from "../components/EmptyElements.vue"

import { useTypeStore } from "../store/types.js";
import { useOffCanvasStore } from "../store/offCanvas.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const useType = useTypeStore();
const useOffCanvas = useOffCanvasStore();
const { updateAction } = useOffCanvas;
const { types, vacio } = storeToRefs(useType);
const { getTypes, deleteType } = useType;

onMounted(() => {
  getTypes();
});
</script>

<style></style>
