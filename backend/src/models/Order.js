import { Schema, model } from "mongoose";

const orderSchema = new Schema(
    {
        client: {
            type: String,
            required: true, 
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        obs: {
            type: String,
            required: true,
            trim: true  
        },
        total: {
            type: Number,
            required: true,
            trim: true
        },
        status: { 
            type: String, 
            enum: ['En preparación', 'Listo', 'En entrega'], 
            default: 'En preparación' 
        }
    },
    {   
        versionKey: false,
        timestamps: true,
    }
);

export default model('Order', orderSchema)