<template>
  <header class="w-100 bg-white py-4">
      <h1>MARCAS</h1>
      <ul class="nav justify-content-center bg-white">
          <li class="nav-item">
              <a class="nav-link" href="../index.html">Inicio</a>
          </li>
      </ul>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Nueva Marca
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Nueva Marca</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="form-group">
                          <label for="text">Nombre:</label>
                          <input type="text" class="form-control" id="email" v-model="name">
                        </div>
                  </div> 
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button id="btnAdd" type="button" class="btn btn-primary" @click="postMarcas">Agregar</button>
                  </div>
              </div>
          </div>
      </div>
  </header>

</template>
<script setup>
import TableTitle 
import { onMounted, ref } from 'vue';
import axios from "axios";

const marcas = ref([]);
const name = ref("")

onMounted(()=>{
   getMarcas();
   console.log(marcas.value);
})


async function getMarcas() {
  const res = await fetch("http://localhost:3000/api/v1/brand/all")
  const data = await res.json();
  marcas.value = data;
}

async function postMarcas() {
  const res = await axios.post("http://localhost:3000/api/v1/brand/create", {name: name.value})
}

async function deleteMarca(id) {
  const res = await axios.delete(`http://localhost:3000/api/v1/brand/delete/${id}`)
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}


button {
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 15px;
  page-break-after: 15 20px;
  background-image: linear-gradient(to right (#b47474), (#f55d06));
  color: #080808;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 3px 3px rgb(0, 0, 0, 0.4);
}

button:hover {
  box-shadow: 6px 6px rgb(0, 0, 0, 0.8);
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  align-items: center;

}

.table_ {
  background-color: #FAFAFA10;
  backdrop-filter: blur(0.7rem);
  text-align: left;
  border-collapse: collapse;
  min-width: 600px;
  border: 2px solid #fafafa10;
  border-radius: 10px;
  color: #000;
  padding: 20px;
  margin-top: 15px;
  height: 50vh;
  overflow: scroll;
}

#first {
  border-radius: 10px 0 0 0;
}

#last {
  border-radius: 0 10px 0 0;

}

.table_ th,
td {
  padding: 20px;
}

td img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.table_ thead {
  background-color: #161a42;
  background-image: linear-gradient(160deg, #161a42 0%, #5462ca 100%);
  border-bottom: solid 5px rgba(255, 255, 255, .5);
}


.table_ tr:nth-child(even) {
  background: rgba(0, 0, 0, .1);
}

.table_ tr:hover td {

  background: rgba(255, 255, 255, .3);
}
</style>