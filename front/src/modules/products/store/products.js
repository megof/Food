import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
//Importamos los helpers de las peticiones HTTP.
import fetchData from '../../../helpers/fetchData.js';
const URL= 'https://food-api-market.onrender.com/api/v1/products';
const URL2='https://food-api-market.onrender.com/api/v1/types';

export const useProductsStore=defineStore('products',{
    state:()=>({
        productType:[],
        products:[]
        // productType:[
        //     {
        //         id:1,
        //         name:'Hamburguesa',
        //     },
        //     {
        //         id:2,
        //         name:'Perro Caliente'
        //     },
        //     {
        //         id:3,
        //         name:'Pizza'
        //     }
        // ],
        // products:[
        //     {
        //         id:1,
        //         idTypeProduct:1,
        //         name:'Hamburguesa Mexicana',
        //         description:'Nisi cupidatat officia fugiat consequat ullamco voluptate aliqua Et culpa pariatur magna eiusmod magna pariatur sunt.',
        //         generalDescription:'Hamburguesa Mexicana con papas a la francesa y gaseosa',
        //         price:30000,
        //         image:'Aquí va la imagen XD',
        //         state:true, //active-> ya está listo en BD; desactive->Está en edición
        //     },
        //     {
        //         id:2,
        //         idTypeProduct:2,
        //         name:'Perro Mexicano',
        //         description:'Nisi cupidatat officia fugiat consequat ullamco voluptate aliqua Et culpa pariatur magna eiusmod magna pariatur sunt.',
        //         generalDescription:'Perro Mexicano con salsas al gusto.',
        //         price:15000,
        //         image:'Aquí va la imagen XD',
        //         state:true, //active-> ya está listo en BD; desactive->Está en edición
        //     },
        //     {
        //         id:3,
        //         idTypeProduct:1,
        //         name:'Hamburguesa Tradicional',
        //         description:'Nisi cupidatat officia fugiat consequat ullamco voluptate aliqua Et culpa pariatur magna eiusmod magna pariatur sunt.',
        //         generalDescription:'Hamburguesa tradicional con la receta de la casa.',
        //         price:13000,
        //         image:'Aquí va la imagen XD',
        //         state:true, //active-> ya está listo en BD; desactive->Está en edición
        //     },
        //     {
        //         id:4,
        //         idTypeProduct:1,
        //         name:'Hamburguesa Ranchera',
        //         description:'Nisi cupidatat officia fugiat consequat ullamco voluptate aliqua Et culpa pariatur magna eiusmod magna pariatur sunt.',
        //         generalDescription:'Hamburguesa ranchera con la receta de la casa.',
        //         price:17000,
        //         image:'Aquí va la imagen XD',
        //         state:true, //active-> ya está listo en BD; desactive->Está en edición
        //     },
        //     {
        //         id:5,
        //         idTypeProduct:2,
        //         name:'Asquerosito',
        //         description:'Nisi cupidatat officia fugiat consequat ullamco voluptate aliqua Et culpa pariatur magna eiusmod magna pariatur sunt.',
        //         generalDescription:'Perro caliente venezolano, con la auténtica receta.',
        //         price:12000,
        //         image:'Aquí va la imagen XD',
        //         state:true, //active-> ya está listo en BD; desactive->Está en edición
        //     },
        //     {
        //         id:6,
        //         idTypeProduct:3,
        //         name:'Pizza Hawaiana',
        //         description:'Nisi cupidatat officia fugiat consequat ullamco voluptate aliqua Et culpa pariatur magna eiusmod magna pariatur sunt.',
        //         generalDescription:'izza Hawaiana con el mejor sabor.',
        //         price:28000,
        //         image:'Aquí va la imagen XD',
        //         state:true, //active-> ya está listo en BD; desactive->Está en edición
        //     }
        // ],

    }),
    actions:{
        async getProducts(){
           const {data}=await fetchData(URL);
           const typesData=await fetchData(URL2);
           this.products=data;
           this.productType=typesData.data;
           this.sortById();
        //    console.log(this.products);
        //    console.log(this.productType);
        },
        
        getProductById(id){
            const index=this.products.map(el=>el.id).indexOf(id);
            return this.products[index]; 
        },
        
        addProduct(product){
            this.products.push(product);
            // //Petición HTTP...
            // const data={
            //     idProduct:product.idProduct,
            //     name:product.name,
            //     serial:product.serial,
            //     description:product.description,
            //     state:product.state,
            //     brandsId:product.brandsId,
            //     referencesId:product.referencesId
            // }
            // // console.log(`Data que va hacia el backend: ${JSON.stringify(data)}`);
            // addData(URL,data); //POST
            
        },
        updateProduct(id,newProduct){ 
            const index=this.products.map(el=>el.id).indexOf(id); //El índice que debo alterar.
            this.products[index]=newProduct;
            // //Petición HTTP...
            // const url=`${URL}/${id}`;
            // const data={
            //     name:newDevice.name,
            //     serial:newDevice.serial,
            //     description:newDevice.description,
            //     state:newDevice.state,
            //     brandsId:newDevice.brandsId,
            //     referencesId:newDevice.referencesId
            // }
            // // console.log(`Data que se envía al backend: ${JSON.stringify(data)}`);
            // updateData(url,data); ///PUT
        },
        deleteProduct(id){
            const index=this.products.map(el=>el.id).indexOf(id); //El índice que debo borrar.
            this.products.splice(index,1);
            // //Petición HTTP...
            // const url=`${URL}/${id}`;
            // deleteData(url);
        },
        sortById(){
            this.products.sort((a,b)=>a.id-b.id);
        }

    }
    
});