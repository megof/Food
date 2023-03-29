<template>
  <div class="d-flex justify-content-center flex-column align-content-center text-center loader">
    <div class="content">
      <img src="../assets/img/hamburguesa.gif" alt="Loader" />
      <span>Cargando...</span>
    </div>
  </div>
</template>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  z-index: 9999;
  overflow: hidden;
}

.content {
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 10rem;
}

.content img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.content span {
  font-size: 1rem;
  color: #fff;
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(-0deg);
  }
}
</style>
