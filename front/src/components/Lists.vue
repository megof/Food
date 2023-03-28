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
                <n-button color="green" >
                  <n-icon>
                    <EyeSharp />
                  </n-icon>
                </n-button>
              </template>       

             <template v-else>
              {{ item[column] }}
            </template>
          </td>
        </tr>

        </template>
        
<!-- cierre de template para copiar -->

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

  computed:{
    formaDate(){
        const date = new Date(Date(this.items.createdAt)).toLocaleDateString() 
        return date
    }
  }
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
