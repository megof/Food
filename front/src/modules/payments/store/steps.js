import {defineStore} from 'pinia';

export const useStepsStore=defineStore('steps',{
    state:()=>({
        currentRefPinia:3
        
    }),
    actions:{
        nextPinia(){
            if (this.currentRefPinia === null){
                this.currentRefPinia = 1;
            }else if(this.currentRefPinia>=3){
                this.currentRefPinia = null;
            }else{
                this.currentRefPinia++;
            }   
        },
        prevPinia(){
            if (this.currentRefPinia=== 0)
                this.currentRefPinia = null;
            else if (this.currentRefPinia === null){
                this.currentRefPinia = 3;
            }else{
                this.currentRefPinia--;
            }
        }
            
    }

    
     
    
});