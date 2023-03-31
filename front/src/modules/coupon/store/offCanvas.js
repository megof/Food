import {
    defineStore
} from 'pinia';
export const useOffCanvasStore = defineStore('offcanvas', {
    state: () => ({
        create: true,
        id: null,
        name: '',
        start_date: '',
        end_date: '',
        value: '',
        min_purchase: '',
        dcto: '',
        status: true
        
    }),
    actions: {
        updateAction(id, name, start_date, end_date, value, min_purchase, status, dcto) {
            this.create = false
            this.id = id
            this.name = name
            this.start_date = start_date
            this.end_date = end_date
            this.value = value
            this.min_purchase = min_purchase
            this.status = status
            this.dcto = dcto
            console.log(this.name)
        },
        createAction() {
            this.create = true
            this.id = null
        },
    },
    getters: {
        title: (state) => {
            return (state.create) ? 'Nuevo Cupón' : `Actualizar ${state.name}`;
        },
        buttonText: (state) => {
            return (state.create) ? 'Registrar' : 'Actualizar';
        }
    }
});