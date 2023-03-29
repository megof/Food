<template>
  <div
    class="container w-300 h-120 d-flex flex-column justify-content-center align-items-center p-2"
  >
    <!-- Botón para crear -->
    <n-button color="#ed7902" v-if="!items">
      <n-icon>
        <Create />
      </n-icon>
      Crear
    </n-button>

    <!-- Tabla dinámica -->
    <n-table class="table table-striped table-hover table-bordered m-4">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- Copian hasta el template que cierra este comentario y rendericen los datos que necesiten -->
        <template v-if="items">
          <tr v-for="item in items" :key="item._id">
            <td>{{ item.client }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.obs }}</td>
            <td>{{ formaDate }}</td>
            <td>{{ item.status }}</td>

            <td v-for="(column, index) in columns" :key="index">
              <template v-if="column === 'opciones'">
                <n-space>
                  <n-button color="#0066b2">
                    <n-icon>
                      <SyncCircle />
                    </n-icon>
                  </n-button>
                  <n-button color="#a90b30">
                    <n-icon>
                      <Trash />
                    </n-icon>
                  </n-button>
                </n-space>
              </template>
              <template v-if="column === 'opcion'">
                <n-button color="green" @click="showModal = true">
                  <n-icon>
                    <EyeSharp />
                  </n-icon>
                </n-button>

                <n-modal
                  v-model:show="showModal"
                  preset="dialog"
                  style="width: 80%"
                >
                  <template #header>
                    <div>Toppings</div>
                  </template>
                  <n-table
                    class="table table-striped table-hover table-bordered"
                  >
                    <thead>
                      <tr>
                        <TH>IMAGEN</TH>
                        <TH>NOMBRE</TH>
                        <TH>CANTIDAD</TH>
                        <TH>PRECIO</TH>
                        <TH>TOPPING</TH>
                        <TH>CANTIDAD</TH>
                        <TH>PRECIO</TH>
                        <TH>TOTAL</TH>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <n-avatar
                            round
                            size="medium"
                            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                          />
                        </td>
                        <td>Perra volteada</td>
                        <td style="color: blue">2</td>
                        <td style="color: green">5000</td>
                        <td>Queso azul</td>
                        <td style="color: blue">1</td>
                        <td style="color: green">3000</td>
                        <td style="color: red">13000</td>
                      </tr>
                    </tbody>
                  </n-table>
                </n-modal>
              </template>
            </td>
          </tr>
        </template>


        <!-- cierre de template para copiar -->

               <!-- Copian hasta el template que cierra este comentario y rendericen los datos que necesiten -->
        <template v-if="coupons">
          <tr v-for="coupon in coupons" :key="coupon._id">
            <td>{{ coupon.name }}</td>
            <td>{{ formaDateStart }}</td>
            <td>{{ coupon.end_date }}</td>
            <td>{{ coupon.value }}</td>
            <td>{{ coupon.dcto }}</td>
            <td>{{ coupon.min_purchase }}</td>
            <td>{{ coupon.status }}</td>


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
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
    },
    del: {
      type: Function,
    },
  },

  methods: {
    //   actualizar(_id,name) {
    // if (this.$route.path === "/ruta de actuliazar") {
    //   this.$router.push({name:'ruta', params:{id:_id, name: name}});
    // } else if (this.$route.path === "/ruta de otra persona") {
    //   this.$router.push({name:'ruta de otra persona', params:{id:_id, name: name}});
    // }
    //   },
  },

  computed: {
    formaDate() {
      const date = new Date(Date(this.items.createdAt)).toLocaleDateString();
      return date;
    },
    formaDateStart() {
      const date = new Date(Date(this.coupon.start_date)).toLocaleDateString();
      return date;
    },
    formaDateEnd() {
      const date = new Date(Date(this.coupon.end_date)).toLocaleDateString();
      return date;
    },
  },
  data() {
    return {
      showModal: false,
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
