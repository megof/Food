<template>
  <div class="card h-100" v-if="product">
    <img :src="product.image.secure_url" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text open-sans">
        {{ product.description }}
      </p>
    </div>
    <div class="card-footer">
      <h5 class="card-text text-center">
        ${{
          product.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          })
        }}
      </h5>
      <div class="cart d-flex justify-content-center align-items-center gap-2">
        <button class="btn btn-primary btn-first" :data-id="product._id" @click="decrement">
          -
        </button>
        <input
          class="form-control text-center"
          type="number"
          placeholder="Cantidad"
          readonly
          :value="units"
        />
        <button class="btn btn-primary btn-first" :data-id="product._id" @click="increment">
          +
        </button>
      </div>
      <button
        class="btn btn-primary btn-first text-center w-100 my-3"
        :id="product._id"
        @click="addToCart(product, units)"
      >
        Agregar Al Carrito
      </button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart.js";

const useCart = useCartStore();
const { addItem } = useCart;

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      units: 1,
    };
  },

  methods: {
    increment() {
      this.units += 1;
    },

    decrement() {
      this.units <= 1 ? (this.units = 1) : (this.units -= 1);
    },

    addToCart(product, units) {
      addItem(product, units);
    },
  },
};
</script>

<style scoped>
.card {
  word-break: keep-all;
  width: 20rem !important;
  height: 30rem !important;
  opacity: 0.9;
  border: 0.125rem solid #e1e1e1;
  box-shadow: 0 0.188rem 0.188rem 0 rgba(0, 0, 0, 0.07);
  transition: 0.5s ease-in-out;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.05);
  opacity: 1;
  filter: contrast(120%);
}

.btn-first {
  border: none !important;
  background-color: var(--color-4) !important;
  opacity: 0.85;
  transition: 0.3s ease-in-out;
}

.btn-first:hover {
  opacity: 1;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
