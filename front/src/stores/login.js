import { defineStore } from "pinia";

export const useLoginStore = defineStore("loginUsers", {
  state: () => ({
    user: {
      username: "",
      password: "",
    },
  }),

  getters: {},

  actions: {
    isLogin(user) {
      console.log(user);
    },
  },
});
