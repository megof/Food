<template>
  <!-- <div class="alert alert-danger col-md-10 mx-auto my-5 text-center" role="alert">
    No Products Found
  </div> -->
  <div class="container my-5" id="ProductHome">
    <h2 class="text-center">Nuestros productos</h2>
    <hr />
    <Loader v-if="loader" class="mx-auto my-5" />
    <div class="row mb-5 d-flex">
      <div class="col-md-2 text-center">
        <Category v-for="item in types" :key="item._id" :type="item" />
      </div>
      <div
        class="col-md-10 text-center d-flex justify-content-center align-items-start flex-wrap gap-3"
      >
        <CardProduct v-for="item in products" :key="item._id" :product="item" class="mb-3" />
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "../helpers/fetchData.js";
import CardProduct from "../components/CardProduct.vue";
import Loader from "../components/Loader.vue";
import Category from "../components/Category.vue";

export default {
  components: {
    CardProduct,
    Loader,
    Category,
  },

  data() {
    return {
      products: [],
      types: [],
      loader: false,
    };
  },

  methods: {
    async getData() {
      this.loader = true;
      const urlProducts = "https://food-api-market.onrender.com/api/v1/products",
        urlTypesProducts = "https://food-api-market.onrender.com/api/v1/types";

      const promiseArray = [fetchData(urlProducts), fetchData(urlTypesProducts)];

      const [products, types] = await Promise.all(promiseArray);
      this.products = products.data;
      this.types = types.data;
      this.loader = false;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style scoped></style>
