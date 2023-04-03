<template>
  <!-- <div
    class="container products-container d-flex justify-content-center align-items-center flex-column mb-2"
    v-if="type"
  > -->
  <div class="container products-container mb-2" v-if="type">
    <span>{{ type.name }}</span>
    <img class="img-fluid" :src="type.image.secure_url" alt="products" />
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

<style scoped></style>
