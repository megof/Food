<template>
  <div class="container-md container-fluid mt-5">
    <TableTitle title="USUARIOS" id="offcanvasTypes" />
    <UserOffCanvas />

    <table
      class="table bg-white bg-opacity-75 mt-3 w-100 text-center"
      v-if="users.length !==0 && vacio === false">
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
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>
            <button
              class="btn btn-sm btn-secondary me-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTypes"
              @click="
                updateAction(
                  user._id,
                  user.name,
                  user.username,
                  user.password,
                  user.state
                )
              "
            >
                <n-icon size="30" style="margin-top: -6px">
                  <Create />
                </n-icon>
                <span style="margin-top: 5px; margin-left: 4px">Actualizar</span>
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteUser(user._id)">
               <n-icon size="30" style="margin-top: -6px">
                  <TrashSharp />
                </n-icon>
                <span style="margin-top: 5px; margin-left: 4px">Borrar</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <LoadingSpinner v-if="users.length === 0 && vacio === false" />
    <EmptyElemenst
      title="Usuarios"
      v-if="users.length === 0 && vacio === true"
    />
  </div>
</template>

<script setup>
import TableTitle from "../components/TableTitle.vue";
import UserOffCanvas from "../components/UserOffCanvas.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import EmptyElemenst from "../components/EmptyElements.vue";
import {NIcon} from "naive-ui";
import { TrashSharp, Create } from "@vicons/ionicons5";

import { useUserStore } from "../store/users.js";
import { useOffCanvasStore } from "../store/offCanvas.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const useUser = useUserStore();
const useOffCanvas = useOffCanvasStore();

const { updateAction } = useOffCanvas;
const { users, vacio } = storeToRefs(useUser);
const { getUsers, deleteUser } = useUser;

onMounted(() => {
  getUsers();
});
</script>

<style></style>
