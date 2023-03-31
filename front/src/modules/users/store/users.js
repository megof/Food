import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import fetchData from '../../../helpers/fetchData.js';

const URL= 'https://food-api-market.onrender.com/api/v1/users';
export const  useUserStore=defineStore('users',{
    state:()=>({
        users:[],
    }),
    actions:{
        async getUsers(){
            const {data}=await fetchData(URL);
           
           this.users=data.data; 
           this.sortById();
        },
        
        getUserById(id){
            const index=this.users.map(el=>el._id).indexOf(id);
            return this.users[index]; 
        },
        
        async addUser(user){
            //this.users.push(user);
            //Petición HTTP...
            const data={
                name:user.name,
                username:user.username,
                password:user.password,
            } 
            await fetchData(URL,'post',data);
            this.getUsers()
            console.log("getett")
            
        },
        async updateUser(id,newUser){ 
            const index=this.users.map(el=>el._id).indexOf(id); //El índice que debo alterar.
            this.users[index]=newUser;
            //Petición HTTP...
            const url=`${URL}/${id}`;
            const data={
                name:newUser.name,
                username:newUser.username, 
                password:newUser.password, 
                state: newUser.state
            };
            //console.log(data);
            await fetchData(url,'put',data); ///PUT 
            this.getUsers() 
        },
        async deleteUser(id){
            const index=this.users.map(el=>el._id).indexOf(id); //El índice que debo borrar.
            this.users.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            await fetchData(url,'delete');
        },
        sortById(){
             //this.users.sort((a,b)=>a.id-b.id);
        }

    }
    
});