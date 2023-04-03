<template>
  <footer>
    <div class="footer-header">
      <div class="container-col-12 footer-content text-center d-flex justify-content-center">
        <div class="row mb-5">
          <div
            class="col-md-12 text-center d-flex gap-1 justify-content-center align-items-center flex-md-row flex-column"
          >
            <div
              class="box box-logo text-white mt-4 col-md-6 d-flex flex-column justify-content-center"
            >
              La
              <img class="logo mx-auto" src="../assets/img/B-2.png" alt="Logo" />
            </div>
            <div class="box box-title z-3 col-md-6">
              <h2 class="z-3">The B Company ©</h2>
              <span class="open-sans">La Mejor Opción En Comida Rapida</span>
            </div>
          </div>
        </div>
      </div>
      <Waves />
    </div>
    <div class="content-footer">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 text-center d-flex justify-content-center align-items-center flex-column gap-2 box-text"
          >
            <span class="text-center open-sans-bold">Siguenos en Nuestras Redes Sociales</span>
            <ul class="d-flex flex-row justify-content-center align-items-center gap-2">
              <li class="fa-brands fa-facebook-f"></li>
              <li class="fa-brands fa-whatsapp"></li>
              <li class="fa-brands fa-youtube"></li>
              <li class="fa-brands fa-instagram"></li>
            </ul>
          </div>
          <div
            class="col-md-6 text-center d-flex gap-1 justify-content-center align-items-center box-text"
          >
            <span class="open-sans">Created By </span>
            <h4 class="text-center open-sans">Market Mix S.A.S</h4>
          </div>
        </div>
      </div>
      <hr class="col-md-10 mx-auto" />
    </div>
  </footer>
</template>

<script>
import Waves from "./WavesYellow.vue";

import { wavesHidden } from "../helpers/domEvents.js";
export default {
  components: {
    Waves,
  },

  methods: {
    wavesAnima() {
      wavesHidden();
    },
  },

  mounted() {
    this.wavesAnima();
  },
};
</script>

<style scoped>
.footer-content {
  z-index: 2;
  background-color: var(--color-2);
}

.box-logo {
  width: 30%;
  background-color: var(--color-1);
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  z-index: 2;
  overflow: hidden;
}

.logo {
  width: 8rem;
  z-index: 2;
  margin: 0 auto;
}

.box-title {
  color: #292929 !important;
  text-align: center;
  margin: 1rem;
  padding: 0.5rem;
  width: 70%;
  border-radius: 0.5rem;
}

ul > li {
  cursor: pointer;
  list-style-type: none;
  display: block;
  width: 3rem;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: #6f6f6f;
  border: 1px solid #6f6f6f;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.2s linear;
}

.fa-facebook-f:hover {
  background-color: #1877f2;
  color: #fff;
  border: 1px solid #1877f2;
}
.fa-whatsapp:hover {
  background-color: #25d366;
  color: #fff;
  border: 1px solid #25d366;
}
.fa-youtube:hover {
  background-color: #ff0000;
  color: #fff;
  border: 1px solid #ff0000;
}
.fa-instagram:hover {
  background-color: #c13584;
  color: #fff;
  border: 1px solid #c13584;
}

.box-text {
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
  .logo {
    max-width: 5rem;
  }
}
</style>
