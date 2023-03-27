<template>
  <h1>Pedidos</h1>
  <Lists :columns="columns" :items="items"/>

  

</template>

<script>

import Lists from '../../../components/Lists.vue'

import {
  NButton,
} from "naive-ui";

export default {
  name: "ListOrders",
  components: { Lists,NButton,
  },
  // return: {
  //   showModal: false,
  // },
  data() {
     return {
     columns: ['id', 'Cliente', 'Dirección', 'teléfono', 'Observación', 'Total','Estado', 'Fecha', 'opcion'],
      items: [
        { id: 1, Cliente: 'John Doe', Dirección: 30, teléfono: 'Male', Observación: 'Male',  Total: 'Male', Estado:'hola',  Fecha: '89-8987', },
        { id: 2, Cliente: 'Jane Doe', Dirección: 25, teléfono: 'Female', Observación: 'Male',  Total: 'Male', Estado:'hola',  Fecha: '89-8987'},
        { id: 3, Cliente: 'Bob Smith', Dirección: 40, teléfono: 'Male', Observación: 'Male',  Total: 'Male', Estado:'hola',  Fecha: '89-8987'}
      ],
     
    };
  },
    methods: {
  
  }
};
</script>




