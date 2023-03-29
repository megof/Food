import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from '../../../helpers/fetchData.js';

const URL= 'https://food-api-market.onrender.com/api/v1/topping';
export const useToppingStore=defineStore('toppings',{
    state:()=>({
        toppings:[]
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
           this.toppings=data;
           this.sortById();
        },
        
        getToppingById(id){
            const index=this.toppings.map(el=>el._id).indexOf(id);
            return this.toppings[index];
        },
        
        addTopping(topping){
            this.toppings.push(topping);
            //Petición HTTP...
             const data={
                name:topping.name,
                price:topping.price,
             }
             fetchData(URL,'post',data);
            
        },
        updateTopping(id,newTopping){ 
            const index=this.toppings.map(el=>el._id).indexOf(id); //El índice que debo alterar.
            this.toppings[index]=newTopping;
            ////Petición HTTP...
            const url=`${URL}/${id}`;
            const data={
                name:newTopping.name,
                price:newTopping.price,
                edo:true
             };
            console.log(data);
            fetchData(url,'put',data); ///PUT
        },
        deleteTopping(id){
            const index=this.toppings.map(el=>el._id).indexOf(id); //El índice que debo borrar.
            this.toppings.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            fetchData(url,'delete');
           
        },
        sortById(){
            this.toppings.sort((a,b)=>a.id-b.id);
        }

    }
    
});