<template>
  <h1>Pedidos</h1>
  <Lists :columns="columns" :items="items"/>
</template>

<script>

import Lists from '../../../components/Lists.vue'

import {
  NButton,
} from "naive-ui";

import fetchData from '@/helpers/fetchData.js'

export default {
  name: "ListOrders",
  components: { Lists,NButton,
  },
  // return: {
  //   showModal: false,
  // },
  data() {
     return {
     columns: ['Cliente', 'Dirección', 'teléfono', 'Observación', 'Fecha', 'opcion'],
      items: [
             ],
    };
  },
    methods: {
  async getData(){
    let url = 'https://food-api-market.onrender.com/api/v1/orders';
    const {data} = await fetchData(url);
    this.items = data;
    console.log(data)
    console.log(this.items)
  }
  },
  created(){
      this.getData()
  }
};
</script>




