import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    itemsCart: [],
  }),

  actions: {
    addItem(product, units) {
      product.units = units;
      this.itemsCart.push(product);
      console.log(this.itemsCart);
    },
  },
});
