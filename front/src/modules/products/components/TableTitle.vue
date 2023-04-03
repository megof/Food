<template>
  <div class="d-flex  justify-content-between">
         <h2>{{ title }}:</h2>
        <button
           @click="createAction"
           class="btn btn-outline-dark d-flex align-items-center"
           data-bs-toggle="offcanvas"
           :data-bs-target='`#${id}`'
           ><i class="bi bi-plus-circle-fill me-2 mb-3" style="font-size: 1.3em;"></i><span
           class="d-none d-md-inline-block ">Agregar
           {{
           title
           }}</span>
           </button>
  </div>
</template>

<script setup>
import {useOffCanvasStore} from '../store/offCanvas.js'
const useOffCanvas=useOffCanvasStore();
const {createAction}=useOffCanvas;
    const props=defineProps({
        title:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:true,
        }
    })
 

</script>

<style>

</style>