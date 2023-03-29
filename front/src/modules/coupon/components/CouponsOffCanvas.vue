<template>
  <div
    class="offcanvas offcanvas-end text-bg-dark"
    tabindex="-1"
    id="offcanvasProduct"
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
                  type="text"
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
                  type="text"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese la fecha de caducidad"
                  v-model="end_date"
                />
              </div>

              <div class="form-group mb-2">
                <label for="name ">Valor:</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese el valor del cupón"
                  v-model="value"
                />
                <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
              </div>

              <div class="form-group mb-2">
                <label for="name">Mínimo de compra:</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  id="name"
                  placeholder="Ingrese el mínimo de compra"
                  v-model="min_purchase"
                />
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
import { useCouponStore } from "../store/coupons.js";

import { useOffCanvasStore } from "../store/offCanvas.js";
import { storeToRefs } from "pinia";

const useCoupon = useCouponStore();

const { coupon } = storeToRefs(useCoupon);

const { getCouponById, addCoupon, updateCoupon } = useCoupon;

const useOffCanvas = useOffCanvasStore();
const { create, id, title, buttonText } = storeToRefs(useOffCanvas);

//Variables Reactivas...
const name = ref("");
const start_date = ref("");
const end_date = ref("");
const value = ref("");
const min_purchase = ref("");

//Funcionalidad del formulario.
const formValidation = () => {
  let flag = true;
  //Validación si hay algún campo vacío...
  if (
    start_date.value === "" ||
    name.value === "" ||
    end_date.value === "" ||
    value.value === "" ||
    min_purchase === ""
  ) {
    flag = false;
  }
  //TODO: Aquí van las demás validaciones que consideremos necesarias.
  return flag;
};

const processForm = () => {
  create.value ? createItem() : updateItem();
};

const createItem = () => {
  let flag = formValidation();
  if (
    flag &&
    name.value !== "" &&
    start_date.value !== "" &&
    end_date.value !== "" &&
    value.value !== "" &&
    min_purchase !== ""
  ) {
    const coupon = {
      _id: "641e1453e5181e37b4d9d32z",
      name: coupon.name,
      start_date: coupon.start_date,
      end_date: coupon.end_date,
      value: coupon.value,
      min_purchase: coupon.min_purchase,
      status: coupon.status,
    };

    addUser(user);
    name.value = "";
    start_date.value = "";
    end_date.value = "";
    value.value = "";
    min_purchase = "";
  } else {
    name.value = "";
    start_date.value = "";
    end_date.value = "";
    value.value = "";
    min_purchase = "";
  }
};

const updateItem = () => {
  const newCoupon = {
    _id: id.value,
    name: coupon.name,
    start_date: coupon.start_date,
    end_date: coupon.end_date,
    value: coupon.value,
    min_purchase: coupon.min_purchase,
    status: coupon.status,
  };

  updateCoupon(id.value, newCoupon);
};

// //Este es el watch en composition API.
watch(title, (newTitle, oldTitle) => {
  let item = getCoupontById(id.value);
  if (item) {
    (name.value = item.name),
      (coupon.start_date = item.username),
      (coupon.end_date = item.end_date);
    coupon.value = item.value;
    coupon.min_purchase = item.min_purchase;
    coupon.status = item.status;
  } else {
    name.value = "";
    start_date.value = "";
    end_date.value = "";
    value.value = "";
    min_purchase = "";
  }
});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 8px; /* Ancho de la barra de desplazamiento */
  background-color: rgb(33, 37, 41); /* Color de fondo */
}

/* Estilos del thumb (control deslizante) de la barra de desplazamiento */
::-webkit-scrollbar-thumb {
  background-color: #6c757d; /* Color del thumb */
  border-radius: 5px; /* Radio de la esquina */
}

.w-offcanvas {
  width: 40%;
}
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
  .w-offcanvas {
    width: 100%;
  }
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
