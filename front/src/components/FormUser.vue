<template>
  <form class="nav flex-column gap-4" @submit.prevent="login">
    <div class="mb-3">
      <label class="form-label" for="users"
        ><i class="fa-solid fa-user d-inline-block me-1"></i>Nombre Usuario</label
      >
      <input v-model="username" class="form-control form-user" type="text" id="users" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="password"
        ><i class="fa-solid fa-key me-1"></i>Contraseña</label
      >
      <input v-model="password" class="form-control form-password" type="password" id="password" />
    </div>
    <button type="submit" class="btn btn-primary btn-buy">Entrar</button>
  </form>
</template>

<script>
import fetchData from "../helpers/fetchData";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async login() {
      const url = `https://food-api-market.onrender.com/api/v1/users/login`;
      const { data } = await fetchData(url, "post", {
        username: this.username,
        password: this.password,
      });
      // console.log(data.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: this.username,
          password: this.password,
        })
      );
      localStorage.setItem("token", data.data.token);
      const route = this.$router.resolve({ name: "admin" });
      window.open(route.href, "_blank");
    },
  },
};
</script>

<style scoped>
.btn-buy,
.btn-cancel {
  border: none !important;
  background-color: var(--color-4) !important;
  border: 2px solid transparent !important;
  transition: 0.3s ease-in-out;
}

.btn-buy:hover {
  color: var(--color-4);
  background-color: transparent !important;
  border: 2px solid var(--color-4) !important;
}

.btn-cancel {
  background-color: var(--color5) !important;
}

.btn-cancel:hover {
  color: var(--color5);
  background-color: transparent !important;
  border: 2px solid var(--color5) !important;
}
</style>
