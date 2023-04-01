import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    itemsCart: JSON.parse(localStorage.getItem("cart")) || [],
    total: parseInt(localStorage.getItem("total")) || 0,
    totalItems: parseInt(localStorage.getItem("totalItems")) || 0,
  }),

  actions: {
    addItem(product = {}, units = 0) {
      product.units = units;

      this.itemsCart.push({ ...product, units });
      this.total += product.price * product.units;
      this.totalItems += units;

      this.itemsCart = this.itemsCart.map((el) => {});

      console.log(this.itemsCart);

      localStorage.setItem("total", this.total);
      localStorage.setItem("totalItems", this.totalItems);
      localStorage.setItem("cart", JSON.stringify(this.itemsCart));
    },

    deleteItem(id) {
      // console.log("deleteItem");
      const index = this.itemsCart.findIndex((item) => item._id === id);

      this.total -= this.itemsCart[index].price * this.itemsCart[index].units;
      this.totalItems -= this.itemsCart[index].units;
      this.itemsCart.splice(index, 1);

      localStorage.setItem("total", this.total);
      localStorage.setItem("totalItems", this.totalItems);
      localStorage.setItem("cart", JSON.stringify(this.itemsCart));
    },

    cancelOrders() {
      // console.log("deleteOrders");
      this.itemsCart = [];
      this.total = 0;
      this.totalItems = 0;
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      localStorage.removeItem("totalItems");
    },
  },
});
