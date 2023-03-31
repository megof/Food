<template>
  <h1>Pedidos</h1>
  <Lists :columns="columns" :show-modal="showModal" :top2="top2" />
</template>

<script>
import Lists from "../components/Lists.vue";

import fetchData from "@/helpers/fetchData.js";

export default {
  name: "ListOrders",
  components: { Lists },

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
    };
  },
  methods: {
    async getDatas() {
      let url = "https://food-api-market.onrender.com/api/v1/DetailTopping";
      const { data } = await fetchData(url);
      this.top2 = data;
      console.log("hola", this.top2);
    },
  },
  created() {
    this.getDatas();
  },
};
</script>
