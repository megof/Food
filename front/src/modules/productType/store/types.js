import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from '../../../helpers/fetchData.js';
import fetchDataImg from '../../../helpers/fetchDataImg.js';

const URL= 'https://food-api-market.onrender.com/api/v1/types';
export const  useTypeStore=defineStore('types',{
    state:()=>({
        types:[],
        cargando:false
    }),
    actions:{
        async getTypes(){
           const {data}=await fetchData(URL);
           this.types=data;
           this.sortById();
           this.cargando=false
        },
        
        getTypeById(id){
            const index=this.types.map(el=>el._id).indexOf(id);
            return this.types[index]; 
        },
        
       async addType(type){
            // this.types.push(type);
            //Petición HTTP...
             const data={
                name:type.name,
                image:type.image
            }
            console.log(data);
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            this.cargando=true
           await  fetchDataImg(URL,'post',formData);
           this.getTypes()
        },
       async  updateType(id,newType){ 
            const index=this.types.map(el=>el._id).indexOf(id); //El índice que debo alterar.
            this.types[index]=newType;
            //Petición HTTP...
            const url=`${URL}/${id}`;
            const data={
                name:newType.name,
                image:newType.image
            };
            console.log(data);
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            this.cargando=true
            await fetchDataImg(url,'put',formData);
            this.getTypes()
        },
        async deleteType(id){
            const index=this.types.map(el=>el._id).indexOf(id); //El índice que debo borrar.
            this.types.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            this.cargando=true
           await  fetchData(url,'delete');
           this.getTypes()
        },
        sortById(){
            // this.types.sort((a,b)=>a.id-b.id);
        }

    }
    
});