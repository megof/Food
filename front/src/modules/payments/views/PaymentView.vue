<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-5 col-12">
        <Steps />
      </div>
      <div class="col-md-7 col-12">
        <!-- <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-dark" @click="prevPinia">Preview</button>
                    <button type="button" class="btn btn-dark" @click="nextPinia">Next</button>
                </div> -->
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Steps from "../components/Steps.vue";
import { useStepsStore } from "../store/steps.js";
const useSteps = useStepsStore();
const { prevPinia, nextPinia } = useSteps;
</script>

<style></style>
