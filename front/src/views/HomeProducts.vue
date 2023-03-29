<template>
  <Header v-if="!$route.fullPath.startsWith('/admin')" v-cloak />
  <div class="container my-5" id="ProductHome" v-if="!$route.fullPath.startsWith('/admin')" v-cloak>
    <h2 class="text-center">Nuestros productos</h2>
    <hr />
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
  <Footer v-if="!$route.fullPath.startsWith('/admin')" v-cloak />
</template>

<script>
import fetchData from "../helpers/fetchData.js";
import CardProduct from "../components/CardProduct.vue";
import Category from "../components/Category.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
    CardProduct,
    Category,
  },

  data() {
    return {
      products: [],
      types: [],
    };
  },

  methods: {
    async getData() {
      const urlProducts = "https://food-api-market.onrender.com/api/v1/products",
        urlTypesProducts = "https://food-api-market.onrender.com/api/v1/types";

      const promiseArray = [fetchData(urlProducts), fetchData(urlTypesProducts)];

      const [products, types] = await Promise.all(promiseArray);
      this.products = products.data;
      this.types = types.data;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
  opacity: 0;
  visibility: hidden;
}
</style>
