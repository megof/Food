<template>
  <nav class="navbar navbar-dark bg-dark d-flex justify-content-between p-3">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <h2 class="text-center text-white">Bienvenido!</h2>
    <n-dropdown trigger="click" :options="options" @select="handleSelect">
      <n-avatar
        class="mx-3"
        round
        size="medium"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-dropdown>
  </nav>
</template>

<script>
import { NAvatar, NDropdown } from "naive-ui";

export default {
  components: {
    NAvatar,
    NDropdown,
  },

  data() {
    return {
      options: [
        {
          label: "Admin",
          key: "Admin",
          disabled: true,
        },
        {
          label: "Salir",
          key: "Salir",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
