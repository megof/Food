import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    itemsCart: JSON.parse(localStorage.getItem("cart")) || [],
    total: parseInt(localStorage.getItem("total")) || 0,
    totalItems: parseInt(localStorage.getItem("totalItems")) || 0,
  }),

  actions: {
    addItem(product, units) {
      product.units = units;
      this.total += product.price * product.units;
      const exist = this.itemsCart.find((item) => item._id === product._id);
      // if (exist) {
      //   exist.units += product.units;
      //   console.log(exist.units);
      // } else {
      //   this.itemsCart.push(product);
      // }

      this.itemsCart.push(product);
      this.totalItems += units;

      localStorage.setItem("total", this.total);
      localStorage.setItem("totalItems", this.totalItems);
      localStorage.setItem("cart", JSON.stringify(this.itemsCart));
    },
  },
});
