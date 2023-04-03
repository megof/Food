<template>
  <div class="container">
    <h1>Pedidos</h1>
    <Lists :columns="columns" :items="items" :show-modal="showModal" />
  </div>
</template>

<script>
import Lists from "../components/Lists.vue";

import { NButton, NModal } from "naive-ui";

import fetchData from "@/helpers/fetchData.js";

export default {
  name: "ListOrders",
  components: { Lists, NButton, NModal },
  // return: {
  //   showModal: false,
  // },
  data() {
    return {
      columns: ["Cliente", "Dirección", "teléfono", "Observación", "Fecha", "Estado", "opcion"],
      items: [],
      showModal: false,
    };
  },
  methods: {
    async getData() {
      let url = "https://food-api-market.onrender.com/api/v1/orders";
      const { data } = await fetchData(url);
      this.items = data;
      console.log(data);
      console.log(this.items);
    },
  },
  created() {
    this.getData();
  },
};
</script>
