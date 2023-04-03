<template>
  <div class="my-component">
    <form @submit.prevent="processForm">
      <div class="mb-3">
        <label for="address" class="form-label fw-bold">Dirección de Envío:</label>
        <input type="text" class="form-control" id="address" v-model="address">
        <div  class=" text-danger fw-normal" v-if="!addressOk">Recuerde proporcionarnos la dirreción del envío.</div>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label fw-bold">Teléfono:</label>
        <input type="tel" class="form-control" id="phone" v-model="phone">
        <div  class=" text-danger fw-normal" v-if="!phoneOk">No olvide ingresar su teléfono.</div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label fw-bold">Persona Quien Recibe:</label>
        <input type="text" class="form-control" id="name" v-model="name">
        <div  class=" text-danger fw-normal" v-if="!nameOk">Por favor llene este campo.</div>
      </div>
      <div class="mb-3">
        <label for="mensaje" class="fw-bold mb-2 d-block" >Observaciones:</label>
        <textarea id="mensaje" name="message" rows="4" cols="65" v-model="message"></textarea>
      </div>
      
    
     
      <button type="submit" class="btn btn-dark w-100">Confirmar</button>
    </form>
</div>
</template>

<script setup>
  import fetchData from '../../../helpers/fetchData.js';
  import {ref,onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  import {useStepsStore} from '../store/steps.js';
  import {useCartStore} from '@/stores/cart.js';
  const useCart=useCartStore();
  const {cancelOrders}=useCart;
  const useSteps=useStepsStore();
  const{prevPinia,nextPinia,stepByNumber}=useSteps;
  

  const router = useRouter();
  //Defino las variables reactivas del formulario.
  const address=ref('');
  const phone=ref('');
  const name=ref('');
  const addressOk=ref(true);
  const phoneOk=ref(true);
  const nameOk=ref(true);
  const message=ref('');
  const total=ref('');

  const validateForm=()=>{
    let flag=true;
    addressOk.value=true;
    phoneOk.value=true;
    nameOk.value=true;

    if(address.value===''  ){
      flag=false;
      addressOk.value=false;
    }

    if(phone.value===''){
      flag=false;
      phoneOk.value=false;
    }

    if( name.value===''){
      flag=false;
      nameOk.value=false;
    }

    return flag;
  }
  const processForm=async()=>{
    //Aquí deberían ir las validaciones si es que hay...
    const rightInformation=validateForm();
    if(rightInformation){
        //Aquí armo la data que voy a llevar a la peticiones.
        const order={
        client:name.value,
        address:address.value,
        phone:phone.value,
        obs:message.value || 'Ninguno',
        total:total.value,
        status:'En preparación'
      }

      console.log(order)
      //Aquí lleno la tabla ordenes
      fetchData("https://food-api-market.onrender.com/api/v1/orders",'post',order);
      //Aquí va lo de hacer lo de orderDetails


      nextPinia();
      router.push('/payment/step4');
      //Se Borra el carrito de compras una vez exitodo este paso.
      cancelOrders();

    }
   





   

  }

  onMounted(()=>{
      stepByNumber(3);
      total.value=Number(localStorage.getItem("total"));
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