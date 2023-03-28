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
        <button class="btn btn-primary btn-first" :data-id="product._id">-</button>
        <input
          class="form-control text-center open-sans"
          type="number"
          placeholder="Cantidad"
          readonly
          :value="product.units"
        />
        <button class="btn btn-primary btn-first" :data-id="product._id">+</button>
      </div>
      <button
        class="btn btn-primary btn-first text-center w-100 my-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        :id="product.id"
      >
        Agregar Al Carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 18rem !important;
  opacity: 0.9;
  flex-grow: 1;
  transition: 0.5s ease-in-out;
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
</style>
