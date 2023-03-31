<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-5">
                <Steps/>
            </div>
            <div class="col-7">
                <RouterView/>
            </div>
        </div>
      
    </div>
  
</template>

<script setup>
    import {RouterView} from 'vue-router'
    import Steps from '../components/Steps.vue'
</script>

<style>

</style>