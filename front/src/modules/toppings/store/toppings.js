import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from '../../../helpers/fetchData.js';
import fetchDataImg from '../../../helpers/fetchDataImg';

const URL= 'https://food-api-market.onrender.com/api/v1/topping';
export const useToppingStore=defineStore('toppings',{
    state:()=>({
        toppings:[],
        cargando:false, 
        vacio:false
        // toppings:[
        //     {
        //         _id:1,
        //         name:'Papas a la Francesa',
        //         price:5000,
        //         edo:false
        //     },
        //     {
        //         _id:2,
        //         name:'Porción de Arroz',
        //         price:4000,
        //         edo:false
        //     },
        //     {
        //         _id:3,
        //         name:'Porción de Patacón',
        //         price:4500,
        //         edo:false
        //     }
        // ],
    }),
    actions:{
        async getToppings(){
           const {data}=await fetchData(URL);
           if(data.length ===0){
            console.log(data)
            this.vacio = true
            this.toppings = []
        }else{
            console.log(data)
            this.vacio = false
            this.toppings = data
        }
           this.toppings=data;
           this.sortById();
           this.cargando=false
        },
        
        getToppingById(id){
            const index=this.toppings.map(el=>el._id).indexOf(id);
            return this.toppings[index];
        },
        
        async addTopping(topping){
            // this.toppings.push(topping);
            //Petición HTTP...
             const data={
                name:topping.name,
                price:topping.price,
             }
             console.log(data);

            //  const formData = new FormData();
            //  for (const key in data) {
            //      formData.append(key, data[key]);
            //  }
            this.toppings=[]
            this.cargando=true
            await fetchData(URL,'post',data);
            this.getToppings()
        },
       
        async updateTopping(id,newTopping){ 
            const index=this.toppings.map(el=>el._id).indexOf(id); //El índice que debo alterar.
            this.toppings[index]=newTopping;
            ////Petición HTTP...
            const url=`${URL}/${id}`;
            const data={
                name:newTopping.name,
                price:newTopping.price,
                edo:newTopping.edo
             };
             this.toppings=[]
            console.log(data);
            this.cargando=true
           await fetchData(url,'put',data); ///PUT
           this.getToppings()
        },
        
        async deleteTopping(id){
            const index=this.toppings.map(el=>el._id).indexOf(id); //El índice que debo borrar.
            this.toppings.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            this.cargando=true
          await  fetchData(url,'delete');
          this.getToppings()
           
        },
        sortById(){
            this.toppings.sort((a,b)=>a.id-b.id);
        }

    }
    
});