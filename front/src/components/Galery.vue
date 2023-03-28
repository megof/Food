<template>
  <n-carousel autoplay trigger="hover">
    <img class="carousel-img" src="../assets/img/Burger.jpg" />
    <img class="carousel-img" src="../assets/img/HOT-DOG.jpg" />
    <img class="carousel-img" src="../assets/img/Fries .jpg" />
  </n-carousel>
</template>

<script>
import { defineComponent } from "vue";
import { NCarousel } from "naive-ui";
export default defineComponent({
  components: {
    NCarousel,
  },
});
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
}
</style>
