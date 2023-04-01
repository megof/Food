<template>
  <ul class="nav flex-column" v-if="orders.length > 0">
    <ul class="list-group list-group">
      <div v-for="order in orders" :key="order._id">
        <li class="list-group-item d-flex align-items-center">
          <div class="flex-grow-1">
            <div class="horizontal-item">
              <div class="container container-img">
                <img class="img-fluid img-small" :src="order.image ? order.image.secure_url : ''" />
              </div>

              <div class="vertical-item">
                <div class="open-sans-bold">
                  <span>{{ order.units }} {{ order.name }}</span>
                </div>
                <span>
                  <span class="open-sans-bold"> Precio Unitario:</span>
                  ${{
                    Number(order.price).toLocaleString("es-ES", {
                      style: "currency",
                      currency: "COP",
                      maximumFractionDigits: 0,
                    })
                  }}
                  COP
                </span>
              </div>
            </div>
          </div>
          <button @click="deleteOrderItem(order._id)" type="button" class="btn btn-danger ms-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              ></path>
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              ></path>
            </svg>
          </button>
        </li>
      </div>
      <div class="container text-center my-3">
        TOTAL A PAGAR: $
        {{
          total.toLocaleString("es-ES", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          })
        }}
        COP
      </div>
      <button class="btn btn-primary btn-buy mb-2" @click="buy">PAGAR CARRITO</button>
      <button class="btn btn-primary btn-cancel" @click="removeCart">CANCELAR CARRITO</button>
    </ul>
  </ul>

  <div class="container text-center" v-else>
    <div class="row">
      <div class="col-md-12 my-4">
        <div class="alert alert-danger" role="alert">No hay compras en el carrito</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart";

const useCart = useCartStore();

const { cancelOrders, deleteItem } = useCart;

export default {
  props: {
    orders: {
      type: Array,
      required: true,
      default: [],
    },

    units: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },
  },

  methods: {
    buy() {
      this.$router.push({ name: "payment-steps" });
    },

    removeCart() {
      cancelOrders();
    },

    deleteOrderItem(id) {
      deleteItem(id);
    },
  },
};
</script>

<style scoped>
.horizontal-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
}

.container-img {
  max-width: 50%;
  object-fit: cover;
}

.img-small {
  margin-right: 0.938rem;
  border-radius: 0.25rem;
}

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
