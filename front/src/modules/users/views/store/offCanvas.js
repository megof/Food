import {defineStore} from 'pinia';
export const  useOffCanvasStore=defineStore('offcanvas',{
    state:()=>({
        create:true,
        id:null,
        name:'', 
        username:'', 
        password:'', 
        
    }),
    actions:{
        updateAction(id, name, username, password){
            this.create=false
            this.id=id
            this.name=name 
            this.username=username 
            this.password=password 
        },
        createAction(){
            this.create=true
            this.id=null
           
        },
    },
    getters:{
        title:(state)=>{
            return (state.create)?'Registro':`Actualizar ${state.name}`;
        },
        buttonText:(state)=>{
            return (state.create)?'Registrar':'Actualizar';
        }
    }
});