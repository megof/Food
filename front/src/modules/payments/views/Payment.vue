<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h2>Aquí va a ir el componente steps de Naive</h2>
                <Steps/>
            </div>
            <div class="col-6">
                <h2>Aquí van a ir el router link con las rutas hijas</h2>
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