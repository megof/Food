<template>
  
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasToppings" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h2 class="mb-5 text-center">{{title}}</h2>
                <form @submit.prevent="processForm">
                    <div class="form-group mb-2">
                        <label for="name " >Nombre:</label>
                        <input type="text" class="form-control mt-2" id="name" placeholder="Ingrese el nombre" v-model="name">
                        <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
                    </div>
                    <div class="form-group mb-2">
                        <label for="price" >Precio:</label>
                        <input type="text" class="form-control mt-2" id="price" placeholder="Ingrese el precio" v-model="price">
                        <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
                    </div>
                    <!-- <div class="form-group mb-2">
                        <label for="image" class="mb-2">Cargue una imagen:</label>
                        <input type="file" name="image" class="form-control w-100" id="image" @change="onFileSelected" >
                    </div> -->

                    
              <div class="form-group mb-2">
                <label for="name ">Estado:</label>
                <div class="form-check form-switch form-group mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked
                    v-model="edo"
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                    >{{ edo ? "Activo" : "Inactivo" }}</label>
                </div>
              </div>
                    
                    <div class="form-group mb-2 mt-5">
                        
                       
                          <button
                          type="submit"
                          class="btn btn-outline-secondary btn-lg w-100"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          >{{buttonText}}</button>
                    </div>
                </form>
            </div>
          </div>
       </div>
        
      </div>
    </div>
    </template>
    
    <script setup>
        import {ref,watch} from 'vue'
        import {useToppingStore} from '../store/toppings.js';
        import {useOffCanvasStore} from '../store/offCanvas.js'
        import { storeToRefs } from 'pinia';
       
        
        


        const useTopping=useToppingStore();
       
        const {toppings}=storeToRefs(useTopping);
        const {getToppingById,addTopping,updateTopping}=useTopping;

        const useOffCanvas=useOffCanvasStore();
        const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

        
        //Variables Reactivas...
        const name=ref('');
        const price=ref('');
        const image=ref('');
        const edo = ref(true)

        //Funcionalidad del formulario.
        const processForm=()=>{
            if(create.value){
                createItem();
            }else{
                updateItem();
            }
        }

        const onFileSelected=(e)=>{
            console.log("Entró a cargar el archivo...")
            image.value = e.target.files[0];
            console.log("archivo cargado");
            console.log(image.value);
        }
        const createItem=()=>{
            let flag=toppings.value.some(topping=>topping.name.toLowerCase()===name.value.toLowerCase())
            if(!flag && name.value!==''){
             
                const topping={
                _id:'641e1453e5182227b4d9d32z',
                name:name.value,
                price:price.value,
                image:image.value,
                edo:edo.value
                }
                addTopping(topping);
                name.value='';
                price.value='';
                image.value='';
                edo.value=true
            }else{
                name.value='';
                price.value='';
                image.value='';
                edo.value=true
            }
            
        }
        const updateItem=()=>{
            const newTopping={
                _id:id.value, 
                name:name.value,
                price:price.value,
                image:image.value,
                edo:edo.value
            }
            updateTopping(id.value,newTopping);
            console.log(edo.value)
        }
       

        //Este es el watch en composition API.
        watch(title,(newTitle,oldTitle)=>{
            
              let item=getToppingById(id.value)
              if(item){
                name.value=item.name
                price.value=item.price
                image.value=item.image
                edo.value=item.edo
              }else{
                name.value=''
                price.value=''
                image.value=''
                edo.value=true
              }
        })
    </script>
    
    <style scoped>
        #registration-form .frm{
        float:right;
        height: 650px;
        width: 50%;
        min-width: 250px;
        padding: 0 35px;
        background-size: 100% 100%;
        background-color: white;
    }
    
    #registration-form h1{
        margin-top: 30px;
        margin-bottom: 20px;
    }
    
    #registration-form .form-control{
        width: 90%;
        padding: 12px 20px;
        height: auto;
    }
    
    @media screen and (max-width: 700px){
    
    
        #registration-form .frm{
            width: 100%;
        }
    
        #registration-form .form-control{
            width: 100%;
        }
    }
    
    @media screen and (max-width: 500px){
        
    
        #registration-form .frm{
            width: 100%;
        }
    
        #registration-form h1{
            text-align: center;
        }
    
        #registration-form .btn{
            width: 100%;
            margin-top: 20px;
        }
    }
    </style>