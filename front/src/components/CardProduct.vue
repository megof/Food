<!-- <template>
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer"></div>
  </div>
</template> -->

<template>
  <n-card :title="title">
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    </template>
    Card Content
    <template #footer> #footer </template>
    <template #action> #action </template>
  </n-card>
</template>

<script>
import { NCard } from "naive-ui";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    NCard,
  },
};
</script>

<style></style>
