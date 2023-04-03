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
        <div
          class="container products-container mb-2"
          @click="productCharacterization(0, 0)"
          id="0"
        >
          <span>Nuestros Productos</span>
          <img class="img-fluid" src="../assets/img/Menu.jpg" alt="products" />
        </div>

        <template v-if="types.length > 0">
          <Category
            v-for="item in types"
            :id="item._id"
            :key="item._id"
            :type="item"
            @click="productCharacterization(item._id, item._id)"
        /></template>
        <span class="alert alert-danger" v-else>No existen categorias!</span>
      </div>
      <div
        class="col-md-10 text-center d-flex justify-content-center justify-content-md-end align-items-md-start align-items-center flex-wrap gap-3 mb-3"
      >
        <template v-if="characterizedProducts.length > 0">
          <CardProduct
            v-for="item in characterizedProducts"
            :key="item._id"
            :product="item"
            class="mb-3"
          />
        </template>
        <span class="alert alert-danger" v-else>No existen Productos!</span>
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
      characterizedProducts: [],
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

    clearButtons() {
      const idTypeProducts = this.types.map((el) => el._id);

      this.types.forEach((el, i) =>
        document.getElementById(idTypeProducts[i]).classList.remove("active")
      );
      document.getElementById(0).classList.remove("active");
    },

    productCharacterization(idTypeProduct, idButton) {
      this.clearButtons();
      if (idTypeProduct !== 0) {
        this.characterizedProducts = this.products.filter(
          (product) => product.id_tp_product._id === idTypeProduct
        );
      } else {
        this.characterizedProducts = this.products;
      }
      document.getElementById(idButton).classList.add("active");
    },
  },

  watch: {
    products(value, oldValue) {
      this.characterizedProducts = value;
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
  border-left: 0.375rem solid #e1e1e1;
  box-shadow: 0 0.188rem 0.188rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 0.375rem;
  overflow: hidden;
  flex-shrink: 1;
  padding: 1.5rem;
  transition: 0.3s ease-in-out !important;
}
.active,
.products-container:hover {
  border-left: 0.375rem solid #ffbc0d;
  cursor: pointer !important;
}

.active {
  color: #ffbc0d;
}
.active img {
  filter: contrast(120%);
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
