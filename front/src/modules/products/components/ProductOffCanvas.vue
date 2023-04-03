<template>
  
    <div class="offcanvas w-offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasProduct" aria-labelledby="offcanvasExampleLabel">
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
                        <input type="number" class="form-control w-100" id="price" placeholder="Ingrese el precio del producto." v-model="price">
                    </div>
                    <div class="form-group mb-2">
                        <label for="image" class="mb-2">Cargue una imagen:</label>
                        <input type="file" name="image" class="form-control w-100" id="image" @change="onFileSelected" >
                    </div>
                    
                          
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
            const edo=ref(true)

     
        
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
        const onFileSelected=(e)=>{
            console.log("Entró a cargar el archivo...")
            image.value = e.target.files[0];
            console.log("archivo cargado");
            console.log(image.value);
        }
        const processForm=()=>{
            (create.value)?createItem():updateItem();
        }
              
               
      
        const createItem=()=>{
                const product={
                    id:'641e1436e5181e37b4d9d326',
                    id_tp_product:idTypeProduct.value,
                    name:name.value,
                    description:description.value,
                    generalDescr:generalDescription.value,
                    price:price.value,
                    image:image.value,
                    status:'Disponible',
                    edo:edo.value
                }
                //Aquí es que debo hacer la validacion ...
                let correctForm=formValidation();
         
                console.log(product)
                addProduct(product);
                idTypeProduct.value='',
                name.value='',
                description.value='',
                generalDescription.value='',
                price.value='',
                image.value=''
                edo.value=true
        }

        const updateItem=()=>{
                    
            const newProduct={
                id:id.value,
                id_tp_product:idTypeProduct.value,
                name:name.value,
                description:description.value,
                generalDescr:generalDescription.value,
                price:price.value,
                image:image.value,
                status:'Disponible',
                edo:edo.value
            }
            //Aquí es que debo hacer la validacion ...
            let correctForm=formValidation();
         
            // console.log(`Data que recojo del formulario: ${JSON.stringify(newBrand)}`);
            console.log(newProduct);
            updateProduct(id.value,newProduct);
        }
      

        // //Este es el watch en composition API.
        watch(title,(newTitle,oldTitle)=>{
            
              let item=getProductById(id.value)
              if(item){
                idTypeProduct.value=item.id_tp_product,
                name.value=item.name,
                description.value=item.description,
                generalDescription.value=item.generalDescr,
                price.value=item.price,
                image.value=item.image,
                edo.value=item.edo

              }else{
                idTypeProduct.value='',
                name.value='',
                description.value='',
                generalDescription.value='',
                price.value='',
                image.value='',
                edo.value=true
               
              }
        });

        //Ciclos de vida del componente....
        // onMounted(()=>{
        //     getProducts();
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