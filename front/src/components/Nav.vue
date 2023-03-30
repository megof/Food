<template>
  <div class="navbar navbar-expand-lg navbar-dark nav-bar-home" id="navbar">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="navbar-expand-lg d-flex justify-content-center align-items-center">
        <router-link
          :to="{ name: 'home' }"
          class="navbar-brand fs-2 fw-bold text-uppercase p-3 fw-semibold"
        >
          <span class="ms-4 logo-container">LA</span
          ><img class="logo m-2" src="../assets/img/B-2.png" alt="Logo"
        /></router-link>
        <button
          class="navbar-toggler m-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navegacion"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div id="navegacion" class="collapse navbar-collapse nav-bar-links">
        <nav
          class="navbar-nav container d-flex flex-md-row justify-content-center align-items-center text-center gap-4 my-3"
        >
          <a href="#ProductHome" class="text-decoration-none w-50 d-flex justify-content-center">
            <span class="material-symbols-outlined"> restaurant_menu </span>Productos</a
          >

          <a
            href="#users"
            data-bs-toggle="offcanvas"
            class="text-decoration-none w-50 d-flex justify-content-center"
            ><span class="material-symbols-outlined"> login </span>Login</a
          >
          <a
            href="#cart"
            data-bs-toggle="offcanvas"
            class="text-decoration-none w-50 d-flex justify-content-center shopping"
          >
            <span
              class="material-symbols-outlined d-flex justify-content-center align-items-center"
            >
              shopping_cart
              <!-- <sup class="text-center item-in-cart">{{ ordersPlaced.length }}</sup> -->
              <sup class="text-center item-in-cart">0</sup>
              <!--- La funcion de agregar el carrito debe cambiar la cantidad ------>
            </span>
          </a>
        </nav>
      </div>
    </div>
  </div>
  <OffCanvas id="users" title="Login" />
  <OffCanvas id="cart" position="end" title="Tu Carrito" />
</template>

<script>
import OffCanvas from "@/components/OffCanvas.vue";
export default {
  components: {
    OffCanvas,
  },
};
</script>

<style scoped>
.nav-bar-home {
  position: fixed !important;
  top: 0 !important;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease-in;
}
.navbar-scroll {
  background-color: #a90b30;
}
.nav-bar-links a {
  font-family: "Open Sans", sans-serif;
  color: #fff0ff !important;
  cursor: pointer;
  padding: 0.5rem 1.5rem !important;
  border-bottom: 0.25rem solid transparent;
  transition: all 0.3s ease-in;
}
.nav-bar-links a:hover {
  transform: scale(1.1);
  color: var(--color-2) !important;
  border-bottom: 0.25rem solid var(--color-2);
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.logo-container {
  width: 100%;
  letter-spacing: 2px;
}
.logo {
  width: 100%;
  max-width: 8rem;
}
.logo:hover {
  animation: pulse 1.5s linear infinite;
}
.logo-container:hover + .logo {
  animation: pulse 1.5s linear infinite;
}
.item-in-cart {
  font-family: "Open Sans", sans-serif !important;
  color: var(--color-2);
  font-weight: 700;
  background-color: var(--color5) !important;
}
.shopping {
  border: 2px solid transparent;
  background-color: var(--black);
  padding: 0.5rem 1.5rem !important;
  border-radius: 0.5rem !important;
}
@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1.2);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
.shopping-active {
  animation: pulse-black 1.25s ease infinite;
}
/* media screen */
@media (max-width: 768px) {
  .logo {
    max-width: 5rem;
  }
}
</style>