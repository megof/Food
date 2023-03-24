<template>
  <h1>Pedidos</h1>

  <div
    class="container w-300 h-120 d-flex flex-column justify-content-center align-items-center p-2"
  >
    <n-table class="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <TH>CLIENTES</TH>
          <TH>DIRECCIÓN</TH>
          <TH>TELÉFONO</TH>
          <TH>OBSERVACIÓN</TH>
          <TH>FECHA</TH>
          <TH>VER</TH>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Oscar</td>
          <td>Calle 22</td>
          <td>31758220</td>
          <td>Piso 2</td>
          <td>4/7/2023</td>
          <td>
            <n-icon-wrapper
              :size="30"
              :border-radius="10"
              @click="showModal = true"
            >
              <EyeSharp />
            </n-icon-wrapper>
            <n-modal
              v-model:show="showModal"
              preset="dialog"
              style="width: 80%"
            >
              <template #header>
                <div>Toppings</div>
              </template>
              <n-table class="table table-striped table-hover table-bordered">
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
  NIconWrapper,
  NAvatar,
} from "naive-ui";
import { EyeSharp } from "@vicons/ionicons5";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      showModal: ref(false),
    };
  },
  name: "ListOrders",
  components: {
    NList,
    NListItem,
    NButton,
    EyeSharp,
    NTable,
    NModal,
    NIconWrapper,
    NAvatar,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    del: {
      type: Function,
    },
  },
  return: {
    showModal: false,
  },
});
</script>

<style>
.n-table {
  text-align: center;
}

h1{
  margin-left: 2%;
  margin-top: 2%;
}
</style>
