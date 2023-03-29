<template>
  <div
    class="container w-300 h-120 d-flex flex-column justify-content-center align-items-center p-2"
  >
    <h2>Cupones</h2>
  </div>
  <Lists :columns="columns" :coupons="coupons" :show="show" />
</template>

<script>
import Lists from "../../orders/components/Lists.vue";
import fetchData from "@/helpers/fetchData.js";
import { NButton } from "naive-ui";

export default {
  name: "Coupon",
  components: { Lists, NButton },

  data() {
    return {
      columns: [
        "Nombre",
        "Fecha de inicio",
        "Fecha de finalización",
        "Valor",
        "Descuento",
        "Compra mínima",
        "Estado",
        "opciones",
      ],
      coupons: [],
      show: false,
    };
  },
  methods: {
    async getData() {
      let url = "https://food-api-market.onrender.com/api/v1/Coupon";
      const { data } = await fetchData(url);
      this.coupons = data;
      console.log(data);
      console.log(this.coupons);
    },
  },
  created() {
    this.getData();
  },
};
</script>
