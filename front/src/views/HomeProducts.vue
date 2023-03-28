<template>
  <!-- <div class="alert alert-danger col-md-10 mx-auto my-5 text-center" role="alert">
    No Products Found
  </div> -->
  <div class="container my-5" id="ProductHome">
    <div class="row mb-5">
      <div class="col-md-12 text-center my-3">
        <h2>Nuestros productos</h2>
        <hr />
      </div>
      <div class="col-md-3 text-center my-3">
        <div
          class="container products-container d-flex justify-content-center align-items-center flex-column"
        >
          <span>Hamburguesas</span>
          <img
            class="img-fluid"
            src="https://www.mcdonalds.com.co/uploads/bigmac_cl_cd9dede2a7.jpg"
            alt="products"
          />
        </div>
      </div>
      <div class="col-md-9 text-center d-flex justify-content-center align-items-center gap-3 my-3">
        <Loader v-if="loader" />
        <CardProduct v-for="item in products" :key="item._id" :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "../helpers/fetchData.js";
import CardProduct from "../components/CardProduct.vue";
import Loader from "../components/Loader.vue";
export default {
  components: {
    CardProduct,
    Loader,
  },

  data() {
    return {
      products: [],
      loader: false,
    };
  },

  methods: {
    async getData() {
      this.loader = true;
      const url = "https://food-api-market.onrender.com/api/v1/products";
      const { data } = await fetchData(url);
      this.products = data;
      this.loader = false;
    },
  },

  created() {
    this.getData();
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
