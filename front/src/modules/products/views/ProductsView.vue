<template>
   <div>
      <div class="container-md container-fluid mt-5">
         <TableTitle title="Productos" id="offcanvasProduct"/>
         <!-- Filtro de búsqueda -->
         <div class="input-group flex-nowrap w-75 mt-4 mb-4">
            <span class="input-group-text bg-dark text-white" id="addon-wrapping"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control " placeholder="Buscar por nombre" aria-label="Username" aria-describedby="addon-wrapping" v-model="filter">
         </div>
         <div>
                <button  class="mx-2 mb-2  btn btn-outline-dark ">Hamburguesas</button>
                <button  class="mx-2 mb-2 btn btn-outline-dark ">Perros</button>
                <button  class="mx-2 mb-2 btn btn-outline-dark ">Pizza</button>
                <button  class="mx-2 mb-2 btn btn-outline-dark ">Pollo Broaster</button>
          </div>
         <!-- Fin del filtro de búsqueda -->
         
         <ProductOffCanvas/>
           <table class="table table-dark mt-3 table-bordered border-white" v-if="products.length!==0">
             <thead >
               <tr>
                 <th scope="col" class=" d-none d-sm-table-cell col-1">Id</th>
                 <th scope="col" class=" d-none d-sm-table-cell col-1">Id Producto</th>
                 <!-- <th scope="col" class=" d-none d-sm-table-cell">Descripcion</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Descripcion General</th> -->
                 <th scope="col" class="col-4">Nombre</th>
                 <th scope="col" class="col-2">Precio</th>
                 <!-- <th scope="col">Imagen</th> -->
                 <th scope="col" class="col-2">Estado</th>
                 <th scope="col" class="col-2">Action</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for="product in productFilter" :key="product.id"> 
                 <td class=" d-none d-sm-table-cell">{{product.id}}</td>
                 <td class=" d-none d-sm-table-cell">{{product.idProduct}}</td>
                 <td >{{product.name}}</td>
                 <!-- <td class=" d-none d-sm-table-cell">{{product.description}}</td>
                 <td class=" d-none d-sm-table-cell">{{product.generalDescription}}</td> -->
                 <td >{{product.price}}</td>
                 <!-- <td>{{product.image}}</td> -->
                 <td>{{product.state}}</td>
                 <td >
                    <button 
                    class="btn btn-sm btn-secondary me-2 mb-1 mb-sm-0" data-bs-toggle="offcanvas" data-bs-target='#offcanvasProduct'
                    @click="updateAction(product.id,product.name)"
                    ><i
                    class="bi bi-arrow-repeat me-1"></i><span
                    class="d-none d-md-inline-block">Actualizar</span>
                    </button>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deleteProduct(product.id)"><i
                    class="bi bi-trash me-1"></i><span
                    class="d-none d-md-inline-block">Borrar</span></button>
                </td>
               </tr>
             
             </tbody>
           </table>
           <LoadingSpinner v-else/>
      </div>
     
   </div>
   
   </template>
   
   <script setup>
      import TableTitle from '../components/TableTitle.vue';
      import ProductOffCanvas from '../components/ProductOffCanvas.vue';
      import LoadingSpinner from '../components/LoadingSpinner.vue';

      import {useProductsStore} from '../store/products.js';
      import {useOffCanvasStore} from '../store/offCanvas.js';
      import { storeToRefs } from 'pinia';
      import {ref,computed,onMounted} from 'vue';

      const useProducts=useProductsStore();
      const useOffCanvas=useOffCanvasStore();
      const {updateAction}=useOffCanvas;
      const {products}=storeToRefs(useProducts);
      const {getProducts, deleteProduct}=useProducts;

      //Variable reactiva para el filtro de búsqueda ....
      const filter=ref('');
      //Propiedad computada que es la que me filtra según lo digitado en el campo...
      const productFilter=computed(()=>{
        return products.value.filter(el=>el.name.toLowerCase().includes(filter.value.toLowerCase()));
      })
  
      onMounted(()=>{
        getProducts();
      });
   </script>
   
   <style scoped>
   
   </style>