<template>
  
    <div class="offcanvas w-offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasProduct" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h2 class="text-center">{{title}}</h2>
                <form class="w-75 mx-auto" @submit.prevent="processForm">
                    <div class="form-group mb-2">
                        <label for="name" class="mb-2">Nombre:</label>
                        <input type="text" class="form-control w-100" id="name" placeholder="Nombre del producto" v-model="name">
                    </div>
                    <div class="form-group mb-2">
                      <label class="mb-2">Tipo de Comida:</label>
                      <SelectComponent :data="productType" v-model="idTypeProduct"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="description" class="mb-2">Descripción:</label>
                        <input type="text" class="form-control w-100" id="description" placeholder="Ingrese una descripción." v-model="description">
                    </div>
                    <div class="form-group mb-2">
                        <label for="generalDescription" class="mb-2">Descripcion General:</label>
                        <input type="text" class="form-control w-100" id="generalDescription" placeholder="Ingrese descripción general." v-model="generalDescription">
                    </div>
                    <div class="form-group mb-2">
                        <label for="price" class="mb-2">Precio:</label>
                        <input type="number" class="form-control w-100" id="price" placeholder="Ingrese la descripción del equipo." v-model="price">
                    </div>
                    <div class="form-group mb-2">
                        <label for="image" class="mb-2">Cargue una imagen:</label>
                        <input type="text" class="form-control w-100" id="image" placeholder="Inserte una imagen aquí." v-model="image">
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
        import SelectComponent from '../components/SelectComponent.vue';
        import {ref,watch,onMounted} from 'vue'
        import {useProductsStore} from '../store/products.js';
      
        import {useOffCanvasStore} from '../store/offCanvas.js'
        import { storeToRefs } from 'pinia';
       
        const useProducts=useProductsStore();
        
        const {products,productType}=storeToRefs(useProducts);
        

        const {getProductById,addProduct,updateProduct}=useProducts;

        const useOffCanvas=useOffCanvasStore();
        const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

        
        // //Variables Reactivas...
            const idTypeProduct=ref('');
            const name=ref('');
            const description=ref('');
            const generalDescription=ref('');
            const price=ref('');
            const image=ref('');
       

     
        
        //Funcionalidad del formulario.
        const formValidation=()=>{
            let flag=true;
            //Validación si hay algún campo vacío...
            if(idTypeProduct.value===''|| name.value===''|| description.value==='' || generalDescription.value==='' || price.value==='' || image.value===''){
                flag=false
            }
            //TODO: Aquí van las demás validaciones que consideremos necesarias.
            return flag;

        }
        const processForm=()=>{
            (create.value)?createItem():updateItem();
        }
              
               
      
        const createItem=()=>{
                const product={
                    id:products.value[products.value.length-1]?.id+1 || 1,
                    idTypeProduct:idTypeProduct.value,
                    name:name.value,
                    description:description.value,
                    generalDescription:generalDescription.value,
                    price:price.value,
                    image:image.value,
                }
                //Aquí es que debo hacer la validacion ...
                let correctForm=formValidation();
                if(correctForm){
                    product.state=true;
                }else{
                    product.state=false;
                }
                console.log(product)
                addProduct(product);
                idTypeProduct.value='',
                name.value='',
                description.value='',
                generalDescription.value='',
                price.value='',
                image.value=''
        }
        // const updateItem=()=>{
        //     let stateBoolean=(stateForm.value==='true');
        //     const newDevice={
        //         id:id.value, 
        //         name:name.value,
        //         serial:serial.value,
        //         description:description.value,
        //         state:stateBoolean,
        //         brandsId:brandsId.value,
        //         referencesId:referencesId.value
        //     }
        //     // console.log(`Data que recojo del formulario: ${JSON.stringify(newBrand)}`);
        //     // console.log(stateForm.value)
        //     updateDevice(id.value,newDevice);
        // }
      

        // //Este es el watch en composition API.
        // watch(title,(newTitle,oldTitle)=>{
            
        //       let item=getDeviceById(id.value)
        //       if(item){
        //         name.value=item.name,
        //         serial.value=item.serial,
        //         description.value=item.description,
        //         stateForm.value=item.state,
        //         brandsId.value=item.brandsId,
        //         referencesId.value=item.referencesId
        //       }else{
        //         name.value='',
        //         serial.value='',
        //         description.value='',
        //         stateForm.value='',
        //         brandsId.value='',
        //         referencesId.value=''
        //       }
        // });

        // //Ciclos de vida del componente....
        // onMounted(()=>{
        //     getBrands();
        //     getReferences();
        // });
    </script>
    
    <style scoped>
        ::-webkit-scrollbar {
        width: 8px; /* Ancho de la barra de desplazamiento */
        background-color:  rgb(33,37,41); /* Color de fondo */
        }

        /* Estilos del thumb (control deslizante) de la barra de desplazamiento */
        ::-webkit-scrollbar-thumb {
        background-color:  #6c757d;/* Color del thumb */
        border-radius: 5px; /* Radio de la esquina */
        }
    
        .w-offcanvas{
            width:40%
        }
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
    
        
        .w-offcanvas{
            width:100%
        }
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