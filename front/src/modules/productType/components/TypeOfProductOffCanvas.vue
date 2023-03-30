<template>
  
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasTypes" aria-labelledby="offcanvasExampleLabel">
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
                        <label for="image" class="mb-2">Cargue una imagen:</label>
                        <input type="file" name="image" class="form-control w-100" id="image" @change="onFileSelected" >
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
        import {useTypeStore} from '../store/types.js';
        import {useOffCanvasStore} from '../store/offCanvas.js'
        import { storeToRefs } from 'pinia';
       
        
        


        const useType=useTypeStore();
       
        const {types}=storeToRefs(useType);
        const {getTypeById,addType,updateType}=useType;

        const useOffCanvas=useOffCanvasStore();
        const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

        
        //Variables Reactivas...
        const name=ref('');
        const image=ref('');

        const onFileSelected=(e)=>{
            console.log("Entró a cargar el archivo...")
            image.value = e.target.files[0];
            console.log("archivo cargado");
            console.log(image.value);
        }
        //Funcionalidad del formulario.
        const processForm=()=>{
            if(create.value){
                createItem();
            }else{
                updateItem();
            }
        }
        const createItem=()=>{
            let flag=types.value.some(type=>type.name.toLowerCase()===name.value.toLowerCase())
            if(!flag && name.value!==''){
             
                const type={
                _id:'641e1453e5181e37b4d9d32z',
                name:name.value,
                image:image.value
                }
                addType(type);
                name.value='';
                image.value='';
            }else{
                name.value='';
                image.value='';
            }
            
        }
        const updateItem=()=>{
            const newType={
                _id:id.value, 
                name:name.value,
                image:image.value
            }
            updateType(id.value,newType);
        }
       

        //Este es el watch en composition API.
        watch(title,(newTitle,oldTitle)=>{
            
              let item=getTypeById(id.value)
              if(item){
                name.value=item.name,
                image.value=item.image
              }else{
                name.value=''
                image.value=''
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