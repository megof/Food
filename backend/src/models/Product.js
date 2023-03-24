import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        id_tp_product: {
            type: Schema.Types.ObjectId, 
            ref: 'ProductType', 
            required: true, 
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        generalDescr: {
            type: String,
            required: true,
            trim: true  
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        image: {
            public_id: String,
            secure_url: String
        },
        status: { 
            type: String, 
            enum: ['Disponible', 'No disponible'], 
            default: 'Disponible' 
        },
        edo: { 
            type: Boolean, 
            required: true, 
            default: true
        }
    },
    {   
        versionKey: false,
        timestamps: true,
    }
);

export default model('Product', productSchema)