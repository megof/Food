<template>
  <div
    class="offcanvas offcanvas-start bg-dark z-2 show"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header mt-5 text-center">
      <h5 class="offcanvas-title text-white mt-4 mx-auto" id="offcanvasScrollingLabel">
        Administracion
      </h5>
    </div>
    <div class="offcanvas-body text-white text-center open-sans-bold">
      <router-link
        class="btn d-flex justify-content-start align-items-center"
        :to="{ name: 'admin' }"
      >
        <span class="material-symbols-outlined"> home</span>Inicio</router-link
      >
      <router-link
        class="btn d-flex justify-content-start align-items-center"
        :to="{ name: 'admin' }"
      >
        <span class="material-symbols-outlined"> checklist </span>
        Pedidos</router-link
      >
      <router-link
        class="btn d-flex justify-content-start align-items-center"
        :to="{ name: 'admin' }"
      >
        <span class="material-symbols-outlined"> person </span>
        Usuarios</router-link
      >
      <router-link
        class="btn d-flex justify-content-start align-items-center"
        :to="{ name: 'admin' }"
      >
        <span class="material-symbols-outlined"> fastfood </span>
        Productos</router-link
      >
    </div>
  </div>
</template>

<script></script>

<style scoped>
a {
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  /* border-bottom: 1px solid #fff; */
  transition: 0.3s ease-in-out;
}

a > span {
  text-align: center;
  font-size: 1.5rem;
  margin: 0 0.5rem;
}

a:hover {
  width: 100%;
  transform: scale(1.1);
  color: #fff;
  background: var(--color-4);
}
</style>
