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
  width: 17.5rem;
  border-radius: 50%;
  padding: 1rem;
  background-color: #000;
  z-index: 99;
  overflow: hidden;
  animation: floating 3s ease-in-out infinite;
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
