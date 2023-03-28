<template>
  <div
    class="container products-container d-flex justify-content-center align-items-center flex-column"
  >
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
  border-left: 0.375rem solid #ffbc0d;
  box-shadow: 0 0.188rem 0.188rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 0.375rem;
  overflow: hidden;
}
</style>
