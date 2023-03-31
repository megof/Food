<template>
  <div class="container-md container-fluid mt-5">
    <!-- <h1 class="text-center my-4">Tipos Productos</h1> -->
    <TableTitle title="Toppings" id="offcanvasToppings" />
    <ToppingsOffCanvas />

    <table class="table bg-white bg-opacity-75 mt-3 w-100" v-if="toppings.length !== 0">
      <!--v-if="references.length!==0"-->
      <thead>
        <tr>
          
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Estado</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="topping in toppings" :key="topping.id">
          
          <td>{{ topping.name }}</td>
          <td>{{ topping.price }}</td>
          <td>{{ topping.edo ? "Activo": "Inactivo"}}</td> <!--*****************Quitar esta negación cuando ya todo corra normal-->
          <td>
            <button
              class="btn btn-sm btn-secondary me-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasToppings"
              @click="updateAction(topping._id, topping.name, topping.edo)"
            >
              <i class="bi bi-arrow-repeat me-1"></i
              ><span class="d-none d-md-inline-block">Actualizar</span>
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteTopping(topping._id)">
              <i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <LoadingSpinner v-else />
  </div>
  <div v-if="cargando" style="position: relative; float: center; margin-top: -10%; margin-left: 40% ; background-color: aliceblue; width: 10vw; padding: 2vh; border-radius: 20px; box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.1);">
      <LoadingSpinner/></div>
</template>

<script setup>
import TableTitle from "../components/TableTitle.vue";
import ToppingsOffCanvas from "../components/ToppingsOffCanvas.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

import { useToppingStore } from "../store/toppings.js";
import { useOffCanvasStore } from "../store/offCanvas.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const useTopping = useToppingStore();
const useOffCanvas = useOffCanvasStore();
const { updateAction } = useOffCanvas;
const { toppings, cargando } = storeToRefs(useTopping);
const { getToppings, deleteTopping } = useTopping;

onMounted(() => {
  getToppings();
});
</script>

<style></style>
