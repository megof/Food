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
                        <label for="name " >Nombre de usuario:</label>
                        <input type="text" class="form-control mt-2" id="name" placeholder="Ingrese el nombre de usuario" v-model="username">
                        <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
                    </div>

                    <div class="form-group mb-2">
                        <label for="name " >Contraseña:</label>
                        <input type="password" class="form-control mt-2" id="name" placeholder="********" v-model="password">
                        <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
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
    import { useUserStore } from '../store/users.js'
    import { useOffCanvasStore } from "../store/offCanvas.js";
    import { storeToRefs } from "pinia";

    const useUser = useUserStore()
    const useOffCanvas = useOffCanvasStore();

    const { users } = storeToRefs(useUser);
    const { getUserById, addUser, updateUser } = useUser
    const {create,id,title,buttonText}=storeToRefs(useOffCanvas);
    //Variables Reactivas...
    const name=ref('');
    const username=ref('');
    const password=ref('');
  

    //Funcionalidad del formulario.
    const formValidation=()=>{
        let flag=true;
        //Validación si hay algún campo vacío...
        if(username.value===''|| name.value==='' || password.value===''){
            flag=false
        }
        //TODO: Aquí van las demás validaciones que consideremos necesarias.
        return flag;

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
        let flag=formValidation() 
        if(flag && name.value!=='' && username.value!=='' && password.value!==''){
        
            const user={
                _id:'641e1453e5181e37b4d9d32z',
                name:name.value,
                username: username.value,
                password: password.value,
            }
             
            addUser(user);
            name.value='';
            username.value = '';
            password.value = '';
        }else{
            name.value='';
            username.value='';
            password.value = '';
        }
        
    }
    const updateItem=()=>{
        const newUser={
            _id:id.value, 
            name:name.value,
            username: username.value,
            password: password.value,
        }
        updateUser(id.value,newUser);
    }


    //Este es el watch en composition API.
    watch(title,(newTitle,oldTitle)=>{
        
        let item=getUserById(id.value)
        if(item){
            name.value=item.name,
            username.value = item.username,
            password.value = item.password
        }else{
            name.value='',
            username.value='';
            password.value = '';
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