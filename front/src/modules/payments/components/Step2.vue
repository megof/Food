<template>
  <div class="my-component">
    <form @submit.prevent="processForm">
      <div class="mb-3">
        <label for="address" class="form-label fw-bold">Dirección de Envío:</label>
        <input type="text" class="form-control" id="address" aria-describedby="emailHelp">
        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label fw-bold">Teléfono:</label>
        <input type="tel" class="form-control" id="phone">
      </div>
      <div class="mb-3">
        <label for="person" class="form-label fw-bold">Persona Quien Recibe:</label>
        <input type="text" class="form-control" id="person">
      </div>
      <!-- <div class="mb-3">
        <label for="mensaje" class="fw-bold" >Observaciones:</label>
        <textarea id="mensaje" name="mensaje" rows="4" cols="50" resize="false"></textarea>
      </div> -->
      
    
     
      <button type="submit" class="btn btn-dark w-100">Confirmar</button>
    </form>
</div>
</template>

<script setup>
  import {onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  import {useStepsStore} from '../store/steps.js'
  const useSteps=useStepsStore();
  const{prevPinia,nextPinia,stepByNumber}=useSteps;

  const router = useRouter();
  const processForm=()=>{
    //Aquí deberían ir las validaciones si es que hay...
    nextPinia();
    router.push('/payment/step3');
    //Se Borra el carrito de compras una vez exitodo este paso.
    localStorage.removeItem("total");
    localStorage.removeItem("totalItems");
    localStorage.removeItem("cart"); //TODO: Ojo procesar antes de borrar si se necesita.

  }

  onMounted(()=>{
      stepByNumber(2);
  })
</script>

<style scoped>
   .my-component{
    font-family:Arial, Helvetica, sans-serif;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
  }
  textarea {
  resize: none;
}
</style>