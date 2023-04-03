import {defineStore} from 'pinia';
export const  useOffCanvasStore=defineStore('offcanvas',{
    state:()=>({
        create:true,
        id:null,
        name:'',
        edo:null,
        description: null,
        generalDescr: null,
        id_tp_product: null,
        image: null,
        price: null,
        status:null,
        
    }),
    actions:{
        updateAction(id,name,description,edo,generalDescr,id_tp_product,image,price,status){
            this.create=false
            this.id=id
            this.name=name
            this.description = description
            this.edo = edo
            this.generalDescr = generalDescr
            this.id_tp_product = id_tp_product
            this.image = image
            this.price = price
            this.status = status

            console.log("updateAction",this.id, this.name,this.description,this.edo,"--;",this.generalDescr,this.id_tp_product,this.image ,this.price,this.status)
        },
        createAction(){
            this.create=true
            this.id=null
           
        },
    },
    getters:{
        title:(state)=>{
            return (state.create)?'Nuevo Producto':`Actualizar ${state.name}`;
        },
        buttonText:(state)=>{
            return (state.create)?'Registrar':'Actualizar';
        }
    }
});