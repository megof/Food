<template>
  <div
    class="offcanvas offcanvas-end text-bg-dark"
    tabindex="-1"
    id="offcanvasTypes"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="container-form">
        <div class="container body" id="registration-form">
          <div>
            <h2 class="mb-5 text-center">{{ title }}</h2>
            <form @submit.prevent="processForm">
              <div class="form-group mb-2">
                <label for="name">Nombre:</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Nombre del cupón"
                  v-model="name"
                />
              </div>

              <div class="form-group mb-2">
                <label for="name ">Fecha de inicio:</label>
                <input
                  type="date"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese la fecha de validación"
                  v-model="start_date"
                />
                <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
              </div>

              <div class="form-group mb-2">
                <label for="name">Fecha de vencimiento:</label>
                <input
                  type="date"
                  :min="start_date"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese la fecha de caducidad"
                  v-model="end_date"
                />
              </div>

              <div class="form-group mb-2">
                <label for="name ">Valor:</label>
                <input
                  type="number"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese el valor del cupón"
                  v-model="value"
                />
                <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
              </div>
              <div class="form-group mb-2">
                <label for="name ">Descuento:</label>
                <input
                  type="number"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese el descuento del cupón"
                  v-model="dcto"
                />
                <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
              </div>

              <div class="form-group mb-2">
                <label for="name">Mínimo de compra:</label>
                <input
                  type="number"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese el mínimo de compra"
                  v-model="min_purchase"
                />
              </div>

              <div class="form-group mb-2">
                <label for="name ">Estado:</label>
                <div class="form-check form-switch form-group mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked
                    v-model="status"
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                    >{{ status ? "Activo" : "Inactivo" }}</label>
                </div>
              </div>

              <div class="form-group mb-2 mt-5">
                <button
                  type="submit"
                  class="btn btn-outline-secondary btn-lg w-100"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  {{ buttonText }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCouponsStore } from "../store/coupons.js";
import { useOffCanvasStore } from "../store/offCanvas";
import { storeToRefs } from "pinia";

const useCoupon = useCouponsStore();
const { coupon } = storeToRefs(useCoupon);
const { getCouponById, addCoupon, updateCoupon, deleteCoupon,getCoupons } = useCoupon;
const useOffCanvas = useOffCanvasStore();
const { create, id, title, buttonText } = storeToRefs(useOffCanvas);

//Variables Reactivas...
const name = ref("");
const start_date = ref("");
const end_date = ref("");
const value = ref("");
const min_purchase = ref("");
const status = ref(true);
const dcto = ref("");

const processForm = () => {
  if (create.value) {
    createItem();
  } else {
    updateItem();
  }
};

const createItem = () => {
  let flag = formValidation();
  if (
    flag &&
    name.value !== "" &&
    start_date.value !== "" &&
    end_date.value !== "" &&
    value.value !== "" &&
    min_purchase.value !== "" &&
    dcto.value !== ""
  ) {
    const ncoupon = {
      //_id: "641e1453e5181e37b4d9d32z",
      name: name.value,
      start_date: start_date.value,
      end_date: end_date.value,
      value: value.value,
      min_purchase: min_purchase.value,
      status: status.value,
      dcto: dcto.value,
    };
    console.log(ncoupon);
    addCoupon(ncoupon);
    name.value = "";
    start_date.value = "";
    end_date.value = "";
    value.value = "";
    min_purchase.value = "";
    status.value = true;
    dcto.value = "";
  } else {
    name.value = "";
    start_date.value = "";
    end_date.value = "";
    value.value = "";
    min_purchase.value = "";
    status.value = true;
    dcto.value = "";
  }
};

//Funcionalidad del formulario.
const formValidation = () => {
  let flag = true;
  //Validación si hay algún campo vacío...
  if (
    start_date.value === "" ||
    name.value === "" ||
    end_date.value === "" ||
    value.value === "" ||
    min_purchase.value === "" ||
    dcto.value === ""
  ) {
    flag = false;
  }
  //TODO: Aquí van las demás validaciones que consideremos necesarias.
  return flag;
};

const updateItem = () => {
  const newCoupon = {
    _id: id.value,
    name: name.value,
    start_date: start_date.value,
    end_date: end_date.value,
    value: value.value,
    min_purchase: min_purchase.value,
    status: status.value,
    dcto: dcto.value,
  };
  console.log(id.value)
  updateCoupon(id.value, newCoupon);
};

// //Este es el watch en composition API.
watch(title, (newTitle, oldTitle) => {
  let item = getCouponById(id.value);
  console.log(id.value);
  if (item) {
    name.value = item.name,
      start_date.value = formatDate(item.start_date),
      end_date.value = formatDate(item.end_date),
      value.value = item.value,
      min_purchase.value = item.min_purchase,
      status.value = item.status,
    dcto.value = item.dcto;
  } else {
    name.value = "",
      start_date.value = "",
      end_date.value = "",
      value.value = "",
      min_purchase.value = "",
      status.value = true,
    dcto.value = "";
  }
});

function formatDate(fecha) {
  const date = new Date(fecha);
  return date.toISOString().slice(0,10);
}
</script>

<style scoped>
#registration-form .frm {
  float: right;
  height: 650px;
  width: 50%;
  min-width: 250px;
  padding: 0 35px;
  background-size: 100% 100%;
  background-color: white;
}

#registration-form h1 {
  margin-top: 30px;
  margin-bottom: 20px;
}

#registration-form .form-control {
  width: 90%;
  padding: 12px 20px;
  height: auto;
}

@media screen and (max-width: 700px) {
  #registration-form .frm {
    width: 100%;
  }

  #registration-form .form-control {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  #registration-form .frm {
    width: 100%;
  }

  #registration-form h1 {
    text-align: center;
  }

  #registration-form .btn {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
