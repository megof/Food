<template>
  <!-- <div
    class="container products-container d-flex justify-content-center align-items-center flex-column mb-2"
    v-if="type"
  > -->
  <div class="container products-container mb-2" v-if="type">
    <span>{{ type.name }}</span>
    <img
      class="img-fluid"
      src="https://www.mcdonalds.com.co/uploads/bigmac_cl_cd9dede2a7.jpg"
      alt="products"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.products-container {
  width: 15rem;
  border: 0.125rem solid #e1e1e1;
  border-left: 0.375rem solid #e1e1e1;
  box-shadow: 0 0.188rem 0.188rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 0.375rem;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  flex-shrink: 1;
}

.products-container:hover {
  border-left: 0.375rem solid #ffbc0d;
  cursor: pointer;
}

@media (max-width: 576px) {
  .products-container {
    width: 8rem;
    font-size: 0.5rem;
    font-family: "Open Sans";
    font-weight: 700;
    transition: 0.3s ease-in-out;
    margin-bottom: 0.5rem;
  }
}
</style>
