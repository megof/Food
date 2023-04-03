import {
    defineStore
} from 'pinia';

import {ref} from 'vue'
//Importamos los helpers de las peticiones HTTP.
//Importamos los helpers de las peticiones HTTP.
import fetchData from '../../../helpers/fetchData.js';
const URL = 'https://food-api-market.onrender.com/api/v1/coupon'

export const useCouponsStore = defineStore('coupons', {
    state: () => ({
        coupons: [],
        cargando:false,
        vacio:false
    }),
    actions: {
        async getCoupons() {
            this.cargando=true;
            const {
                data
            } = await fetchData(URL);
            this.coupons = data;
            console.log(data)
            this.sortById();
            this.cargando=false
            if(this.coupons === null){
                this.vacio = true
            }
        },

        getCouponById(id) {
            const index = this.coupons.map(el => el._id).indexOf(id);
            return this.coupons[index];
        },

        async addCoupon(coupon) {
            this.cargando=true
            console.log(coupon)
            const data = {
                name: coupon.name,
                start_date: coupon.start_date,
                end_date: coupon.end_date,
                value: coupon.value,
                min_purchase: coupon.min_purchase,
                status: coupon.status,
                dcto: coupon.dcto
            }
            this.cargando=true
            console.log("new cupon",data) 
            this.cargando=true
            await fetchData(URL, 'post', data);  
            this.getCoupons()
            console.log(this.coupons)
            this.cargando=true;
        },

        async updateCoupon(id, newCoupon) {
            const index = this.coupons.map(el => el._id).indexOf(id); //El índice que debo alterar.
            this.coupons[index] = newCoupon;
            const url = `${URL}/${id}`;
            const data = {
                name: newCoupon.name,
                start_date: newCoupon.start_date,
                end_date: newCoupon.end_date,
                value: newCoupon.value,
                min_purchase: newCoupon.min_purchase,
                status: newCoupon.status,
                dcto: newCoupon.dcto

            };
            console.log(id)
            this.cargando=true
            await fetchData(url, 'put', data); ///PUT
            
            this.getCoupons()
        },
        async deleteCoupon(id) {
            const index = this.coupons.map(el => el._id).indexOf(id); //El índice que debo borrar.
            this.coupons.splice(index, 1);
            const url = `${URL}/${id}`;
            this.cargando=true
           await fetchData(url, 'delete');
        },
        sortById() {}

    }

});

