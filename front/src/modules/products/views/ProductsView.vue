<template>
   <div>
      <div class="container-md container-fluid mt-5">
         <TableTitle title="Productos" id="offcanvasProduct"/>
         <!-- Filtro de búsqueda -->
         <div class="input-group flex-nowrap w-75 mt-4 mb-4">
            <span class="input-group-text bg-dark text-white" id="addon-wrapping"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control " placeholder="Buscar por nombre" aria-label="Username" aria-describedby="addon-wrapping" v-model="filter">
         </div>
         <!-- Fin del filtro de búsqueda -->
         
         <ProductOffCanvas/>
           <table class="table bg-white bg-opacity-75 mt-3 " v-if="products.length!==0">
             <thead >
               <tr>
                 <th scope="col">Id</th>
                 <th scope="col">Id Producto</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Descripcion</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Descripcion General</th>
                 <th scope="col" >Precio</th>
                 <th scope="col">Imagen</th>
                 <th scope="col">Estado</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for="product in productFilter" :key="product.id"> 
                 <td >{{product.id}}</td>
                 <td >{{product.name}}</td>
                 <td class=" d-none d-sm-table-cell">{{product.description}}</td>
                 <td class=" d-none d-sm-table-cell">{{product.generalDescription}}</td>
                 <td >{{product.price}}</td>
                 <td>{{product.image}}</td>
                 <td>{{product.state}}</td>
                 <td>
                    <button 
                    class="btn  btn-sm btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target='#offcanvasProduct'
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