<template>
  <Loader v-if="loader" />
  <Header />
  <div class="container my-5" id="ProductHome">
    <h2 class="text-center">Nuestros productos</h2>
    <hr />
    <div class="row mb-5 d-flex">
      <div
        class="col-md-2 text-center d-flex justify-content-start align-items-center flex-md-column flex-row flex-wrap mb-3"
      >
        <Category v-for="item in types" :key="item._id" :type="item" />
      </div>
      <div
        class="col-md-10 text-center d-flex justify-content-center justify-content-md-end align-items-md-start align-items-center flex-wrap gap-3 mb-3"
      >
        <CardProduct v-for="item in products" :key="item._id" :product="item" class="mb-3" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import fetchData from "../helpers/fetchData.js";
import CardProduct from "../components/CardProduct.vue";
import Category from "../components/Category.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Header,
    Footer,
    CardProduct,
    Category,
    Loader,
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
      const urlProducts = "https://food-api-market.onrender.com/api/v1/products",
        urlTypesProducts = "https://food-api-market.onrender.com/api/v1/types";
      const promiseArray = [fetchData(urlProducts), fetchData(urlTypesProducts)];
      this.loader = true;
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
