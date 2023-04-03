<template>
  <div
    class="container w-300 h-120 d-flex flex-column justify-content-center align-items-center p-2"
  >
    <!-- Botón para crear -->
    <n-button color="#ed7902" v-if="!orders" @click="show = true">
      <n-icon>
        <Create />
      </n-icon>
      Crear
    </n-button>

    <!-- Tabla dinámica -->
    <n-table class="table bg-white bg-opacity-75 mt-3 w-100">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- Copian hasta el template que cierra este comentario y rendericen los datos que necesiten -->
        <template v-if="orders">
          <tr v-for="top in orders" :key="top._id">
            
            <td>{{ top.client }}</td>
            <td>{{ top.address }}</td>
            <td>{{ top.phone }}</td>
            <td>{{ top.obs }}</td>
            <td>{{ formaDate(top.createdAt) }}</td>
            <td>{{ top.status }}</td>

            <td>
              <n-button @click="showModals(top._id)" size="large" color="gray">
                <n-icon size="30" style="margin-top: -6px">
                  <EyeSharp />
                </n-icon>
                <span style="margin-top: 5px; margin-left: 4px">ver</span>
              </n-button>

              <n-modal
                v-model:show="showModal"
                preset="dialog"
                style="width: 100%"
              >
                <template #header>
                  <div>detalles del pedido</div>
                </template>
                <n-table class="table table-striped table-hover table-bordered">
                  <thead> 
                      <tr>
                        <TH>Nombre</TH>
                        <TH>Descripción</TH>
                        <TH>CANTIDAD</TH>
                        <TH>PRECIO</TH>
                        <TH>TOPPING</TH>
                        <TH>CANTIDAD</TH>
                        <TH>PRECIO</TH>
                      </tr> 
                  </thead>
                  <tbody v-for="(top, index) in ordersDetails" :key="top._id"> 
                      <tr   v-if="ordersTopping[index] && detail === top.idOrder._id">
                        <td>{{ top.idProduct.name }}</td>
                        <td>{{ top.idProduct.description }}</td>
                        <td style="color: blue">{{ top.cant }}</td>
                        <td style="color: green">{{ top.idProduct.price }}</td>   
                          <td v-if="detail === ordersTopping[index].id_det_order.idOrder._id && ordersTopping[index].id_topping">{{  ordersTopping[index].id_topping.name }}</td>
                          <td v-else>Ninguno</td> 
                          <td v-if="detail ===  ordersTopping[index].id_det_order.idOrder._id && ordersTopping[index].id_topping" style="color: blue">{{  ordersTopping[index].id_det_order.cant }}</td>
                          <td v-else style="color: blue">0</td> 
                          <td v-if="detail ===  ordersTopping[index].id_det_order.idOrder._id && ordersTopping[index].id_topping" style="color: blue">{{  ordersTopping[index].id_topping.price }}</td>
                          <td v-else style="color: green">0</td>  
                      </tr>
                      <tr v-if="!ordersTopping[index] && detail === top.idOrder._id">
                        <td>{{ top.idProduct.name }}</td>
                        <td>{{ top.idProduct.description }}</td>
                        <td style="color: blue">{{ top.cant }}</td>
                        <td style="color: green">{{ top.idProduct.price }}</td>   
                        <td >Ninguno</td> 
                        <td  style="color: blue">0</td> 
                        <td  style="color: green">0</td>  
                      </tr> 
                  </tbody>
                  <!--
                    <tbody v-for="top in ordersDetails" :key="top._id">
                      <tr   v-if="detail === top.id_det_order.idOrder._id">
                        <td>{{ top.id_det_order.idProduct.name }}</td>
                        <td>{{ top.id_det_order.idProduct.generalDescr }}</td>

                        <td style="color: blue">{{ top.id_det_order.cant }}</td>
                        <td style="color: green">
                          {{ top.id_det_order.idProduct.price }}
                        </td>
                        <td v-if="top.id_topping">{{ top.id_topping.name }}</td>
                        <td v-else>Ninguno</td>
                        <td v-if="top.id_topping" style="color: blue">{{ top.id_det_order.cant }}</td>
                        <td v-else style="color: blue">0</td>
                        <td v-if="top.id_topping" style="color: blue">{{ top.id_topping.price }}</td>
                        <td v-else style="color: green">0</td>
                      </tr>
                    </tbody>
                  -->
                </n-table>
              </n-modal>
            </td>
          </tr>
        </template>
      </tbody>
    </n-table>
  </div>
</template>

<script>
import {
  NList,
  NListItem,
  NButton,
  NTable,
  NModal,
  NIcon,
  NAvatar,
  NSpace,
  NDrawer,
  NDrawerContent,
} from "naive-ui";
import { EyeSharp, Trash, Create, SyncCircle } from "@vicons/ionicons5";

export default {
  name: "Lists",
  components: {
    NList,
    NListItem,
    NButton,
    EyeSharp,
    NTable,
    NModal,
    NIcon,
    NAvatar,
    Trash,
    NSpace,
    Create,
    SyncCircle,
    NDrawer,
    NDrawerContent,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    del: {
      type: Function,
    },
    orders: {
      type: Object,
    },
    ordersDetails: {
      type: Object,
    },
    ordersTopping:{
      type: Object,
    }
  },

  methods: {
    formaDate(fecha) {
      const date = new Date(Date(fecha)).toLocaleDateString();
      return date;
    },
    showModals(id) {
      this.showModal = true;
      this.detail = id;
      console.log(id);
    },
  },

  computed: {},
  data() {
    return {
      showModal: false,
      show: false,
      detail: undefined,
      objectId: undefined,
    };
  },
};
</script>

<style>
.n-table {
  text-align: center;
}

h1 {
  margin-left: 2%;
  margin-top: 2%;
}
</style>
