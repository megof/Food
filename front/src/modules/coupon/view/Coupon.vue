<template>
  <div>
    <div class="container-md container-fluid mt-5">
      <!-- <h1 class="text-center my-4">Productos</h1> -->
      <TableTitle title="Cupones" id="offcanvasProduct" />
      <!-- Filtro de búsqueda -->

      <ProductOffCanvas />
      <table class="table mt-3 table-bordered" v-if="products.length !== 0">
        <thead>
          <tr>
            <!-- <th scope="col" class="d-none d-sm-table-cell col-1">Id</th>
            <th scope="col" class="d-none d-sm-table-cell col-1">Id Producto</th> -->
            <!-- <th scope="col" class=" d-none d-sm-table-cell">Descripcion</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Descripcion General</th> -->
            <th scope="col" class="col-2">Nombre</th>
            <th scope="col" class="col-2">Fecha de inicio</th>
            <!-- <th scope="col">Imagen</th> -->
            <th scope="col" class="col-2">Fecha de vencimiento</th>
            <th scope="col" class="col-2">Valor</th>
            <th scope="col" class="col-2">Descuento</th>
            <th scope="col" class="col-2">Mínimo de compra</th>
            <th scope="col" class="col-2">Estado</th>
            <th scope="col" class="col-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
         <td>{{ coupon.name }}</td>
            <td>{{ formaDate(coupon.start_date) }}</td>
            <td>{{ formaDate(coupon.end_date) }}</td>
            <td>{{ coupon.value }}</td>
            <td>{{ coupon.dcto }}</td>
            <td>{{ coupon.min_purchase }}</td>
            <td>{{ coupon.status }}</td>
            <td>
              <button
                class="btn btn-sm btn-secondary me-2 mb-1 mb-sm-0"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasProduct"
                @click="updateAction(coupon._id, coupon.name, coupon.start_date,coupon.end_date,
                coupon.value, coupon.min_purchase, coupon.status)"
              >
                <i class="bi bi-arrow-repeat me-1"></i
                ><span class="d-none d-md-inline-block">Actualizar</span>
              </button>
              <button
                class="btn btn-sm btn-danger"
                @click="deleteProduct(coupon._id)"
              >
                <i class="bi bi-trash me-1"></i
                ><span class="d-none d-md-inline-block">Borrar</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <LoadingSpinner v-else />
    </div>
  </div>
</template>

<script setup>
import TableTitle from "../components/TableTitle.vue";
import ProductOffCanvas from "../components/CouponsOffCanvas.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

import { useCouponsStore } from "../store/coupons.js";
import { useOffCanvasStore } from "../store/offCanvas.js";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

const useCoupon = useCouponsStore();
const useOffCanvas = useOffCanvasStore();
const { updateAction } = useOffCanvas;
const { coupons } = storeToRefs(useCoupon);
const { getCoupons, deleteCoupon } = useCoupon;


onMounted(() => {
  getCoupons();
});
</script>

<style scoped></style>
