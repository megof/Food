<template>
  <h1>Pedidos</h1>
  <Lists :columns="columns" :show-modal="showModal" :top2="top2" v-if="!cargando" />
  <div v-if="cargando" class="w-100 d-flex justify-content-center">
    <LoadingSpinner/>

  </div>
</template>

<script>
import Lists from "../components/Lists.vue";
import LoadingSpinner from "../../users/components/LoadingSpinner.vue";
import fetchData from "@/helpers/fetchData.js";

export default {
  name: "ListOrders",
  components: { Lists, LoadingSpinner },

  data() {
    return {
      columns: [
        "Cliente",
        "Dirección",
        "teléfono",
        "Observación",
        "Fecha de creación",
        "Estado",
        "opciones",
      ],
      top2: {},
      showModal: false,
      cargando:false,
    };
  },
  methods: {
    async getDatas() {
      let url = "https://food-api-market.onrender.com/api/v1/DetailTopping";
      this.cargando=true;
      const { data } = await fetchData(url);
      this.cargando=false;
      this.top2 = data;
      console.log("hola", this.top2);
    },
  },
  created() {
    this.getDatas();
  },
};
</script>
