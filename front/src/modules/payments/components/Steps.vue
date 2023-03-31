<template>
    <n-space vertical>
      <n-steps vertical :current="(current )" :status="currentStatus">
        <n-step
          title="Forma de Pago:"
          description="Llene los datos para el pago electrónico."
        />
        <n-step
          title="Datos de envío:"
          description="Díganos a donde quiere que llevemos su pedido"
        />
        
        <n-step
          title="Agradecimientos por la compra:"
          description="Su pedido va en camino..."
        />
     
      </n-steps>
      <n-space>
        <n-button-group>
          <n-button @click="prev">
            <template #icon>
              <n-icon>
                <md-arrow-round-back />
              </n-icon>
            </template>
          </n-button>
          <n-button @click="next">
            <template #icon>
              <n-icon>
                <md-arrow-round-forward />
              </n-icon>
            </template>
          </n-button>
        </n-button-group>
        <n-radio-group
          v-model:value="currentStatus"
          size="medium"
          name="vertical"
        >
          <n-radio-button value="error">
            Error
          </n-radio-button>
          <n-radio-button value="process">
            Process
          </n-radio-button>
          <n-radio-button value="wait">
            Wait
          </n-radio-button>
          <n-radio-button value="finish">
            Finish
          </n-radio-button>
        </n-radio-group>
      </n-space>
    </n-space>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import { MdArrowRoundBack, MdArrowRoundForward } from "@vicons/ionicons4";
  
  export default defineComponent({
    components: {
      MdArrowRoundBack,
      MdArrowRoundForward
    },
    setup() {
      const currentRef = ref(1);
      return {
        currentStatus: ref("process"),
        current: currentRef,
        next() {
          if (currentRef.value === null)
            currentRef.value = 1;
          else if (currentRef.value >= 3)
            currentRef.value = null;
          else
            currentRef.value++;
        },
        prev() {
          if (currentRef.value === 0)
            currentRef.value = null;
          else if (currentRef.value === null)
            currentRef.value = 5;
          else
            currentRef.value--;
        }
      };
    }
  });
  </script>