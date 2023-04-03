import {defineStore} from 'pinia';
export const  useOffCanvasStore=defineStore('offcanvas',{
    state:()=>({
        create:true,
        id:null,
        name:'',
        edo:null
        
    }),
    actions:{
        updateAction(id,name, edo){
            this.create=false
            this.id=id
            this.name=name
            this.edo = edo
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