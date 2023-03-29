<template>
  <div class="container-md container-fluid mt-5">
    <TableTitle title="USUARIOS" id="offcanvasTypes" />
    <UserOffCanvas/>

    <table class="table bg-white bg-opacity-75 mt-3 w-100" v-if="true">
      <!--v-if="references.length!==0"-->
      <thead>
        <tr> 
          <th scope="col">Nombre</th>
          <th scope="col">Nombre de usuario</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id"> 
          <td>{{user.name}}</td>
          <td>{{user.username}}</td>
          <td>
            <button  class="btn btn-sm btn-secondary me-2"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasTypes"  
              @click="updateAction(user._id, user.name, user.username,  user.password, user.state)">
              <i class="bi bi-arrow-repeat me-1"></i><span class="d-none d-md-inline-block">
                Actualizar</span>
            </button>
            <button class="btn btn-sm btn-danger" 
             @click="deleteUser(user._id)">
              <i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">
                Borrar</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <LoadingSpinner v-else />
  </div>
</template>

<script setup> 
  import TableTitle from '../components/TableTitle.vue';
  import UserOffCanvas from '../components/UserOffCanvas.vue'
  import LoadingSpinner from '../components/LoadingSpinner.vue';

  import { useUserStore } from '../store/users.js'
  import { useOffCanvasStore } from "../store/offCanvas.js";
  import { storeToRefs } from "pinia";
  import { onMounted } from "vue";

  const useUser = useUserStore()
  const useOffCanvas = useOffCanvasStore();

  const { updateAction } = useOffCanvas;
  const { users } = storeToRefs(useUser);
  const { getUsers, deleteUser } = useUser;

onMounted(() => {
  getUsers();
});
</script>

<style></style>
