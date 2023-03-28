<template>
    <h1>Usuarios</h1>
  <Lists items=""/>
  </template>
  
  <script>
  import Lists from "./components/Lists.vue"
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
  
