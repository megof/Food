<template class="w-100 d-flex justify-content-center">
  <div class="container-md container-fluid mt-5">
    <h1>Pedidos</h1>
    <Lists :columns="columns" :show-modal="showModal" :orders="orders" :ordersDetails="ordersDetails" :ordersTopping="ordersTopping" v-if="orders.length !== 0 && ordersTopping.length.length!==0 && ordersDetails.length !== 0"/>
     
    <LoadingSpinner v-else/> 
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
      orders:[],
      ordersDetails:[],
      ordersTopping:[],
      showModal: false, 
    };
  },
  methods: {
    async getOrders() {
      let url = "https://food-api-market.onrender.com/api/v1/orders"; 
      const { data } = await fetchData(url);  
      this.orders = data;
 
      console.log("orders", this.orders);
    },
    async getDetailOrders() {
      let url = "https://food-api-market.onrender.com/api/v1/detailOrders"; 
      const { data } = await fetchData(url);  
      this.ordersDetails = data.data;
 
      console.log("orders details", this.ordersDetails);
    },
    
    async getDetailToppings() {
      let url = "https://food-api-market.onrender.com/api/v1/detailtopping/"; 
      const { data } = await fetchData(url);  
      this.ordersTopping = data;
 
      console.log("orders topping", this.ordersTopping);
    },
  },
  created() {
    this.getOrders();
    this.getDetailOrders()
    this.getDetailToppings()
  },
};
</script>
