<template>
  <div class="container-md container-fluid mt-5">
    <TableTitle title="Cupones" id="offcanvasTypes" />
    <CouponsOffCanvas />

    <table
      class="table bg-white bg-opacity-75 mt-3 w-100 text-center"
      v-if="coupons.length !== 0 && vacio === false"
    >
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Fecha de inicio</th>
          <th scope="col">Fecha de vencimiento</th>
          <th scope="col">Valor</th>
          <th scope="col">Descuento</th>
          <th scope="col">Mínimo de compra</th>
          <th scope="col">Estado</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.name }}</td>
          <td>{{ formatDate(coupon.start_date) }}</td>
          <td>{{ formatDate(coupon.end_date) }}</td>
          <td>{{ coupon.value }}</td>
          <td>{{ coupon.dcto }}</td>
          <td>{{ coupon.min_purchase }}</td>
          <td>{{ coupon.status ? "Activo" : "Inactivo" }}</td>
          <td>
            <button
              class="btn btn-sm btn-secondary me-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTypes"
              @click="
                updateAction(
                  coupon._id,
                  coupon.name,
                  coupon.start_date,
                  coupon.end_date,
                  coupon.value,
                  coupon.min_purchase,
                  coupon.status,
                  coupon.dcto
                )
              "
            >
              <i class="bi bi-arrow-repeat me-1"></i
              ><span class="d-none d-md-inline-block">Actualizar</span>
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteCoupon(coupon._id)"
            >
              <i class="bi bi-trash me-1"></i
              ><span class="d-none d-md-inline-block">Borrar</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <LoadingSpinner v-if="coupons.length === 0 && vacio === false" />
    <EmptyElemenst
      title="cupones"
      v-if="coupons.length === 0 && vacio === true"
    />
  </div>
</template>

<script setup>
import TableTitle from "../components/TableTitle.vue";
import CouponsOffCanvas from "../components/CouponsOffCanvas.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import EmptyElemenst from "../components/EmptyElements.vue";

import { useCouponsStore } from "../store/coupons.js";
import { useOffCanvasStore } from "../store/offCanvas.js";
import { storeToRefs } from "pinia";
import { onMounted, onUpdated } from "vue";

const useCoupon = useCouponsStore();
const useOffCanvas = useOffCanvasStore();

const { updateAction } = useOffCanvas;
const { coupons, cargando, vacio } = storeToRefs(useCoupon);
const { getCoupons, deleteCoupon } = useCoupon;

onMounted(() => {
  getCoupons();
});

function formatDate(fecha) {
  const date = new Date(fecha);
  return date.toISOString().slice(0, 10);
}
</script>

<style scoped></style>
