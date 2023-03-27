<template>
  <div
    class="container w-300 h-120 d-flex flex-column justify-content-center align-items-center p-2"
  >
    <n-space align="center">
      <n-button color="#ed7902">
        <n-icon>
          <Create />
        </n-icon>
        Crear
      </n-button>

      <n-button color="#0066b2">
        <!--
        Esto se hace por si le da click que lo envíe donde desee para actualizar
        @click="actualizarEmpleado(employees._id, employees.name, employees.last, employees.dir, employees.phone, employees.email)" -->
        <n-icon>
          <SyncCircle />
        </n-icon>
        Actualizar
      </n-button>

      <n-button color="#a90b30">
        <n-icon>
          <Trash />
        </n-icon>
        Eliminar
      </n-button>
    </n-space>

    <n-table class="table table-striped table-hover table-bordered m-4">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
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
            
              <n-button color="green">
                <n-icon>
                  <EyeSharp/>
                </n-icon>
              </n-button>
            
            </template>


            <template v-else>
              {{ item[column] }}
            </template>
          </td>
        </tr>
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
      required: true,
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
