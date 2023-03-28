import { Schema, model } from "mongoose";

const toppingProductSchema = new Schema(
    {
        idProduct:{
            type: Schema.Types.ObjectId, 
            ref: 'Product',
            required: true,
            trim: true,
        },
        idTopping:{
            type: Schema.Types.ObjectId, 
            ref: 'Topping',
            required: true,
            trim: true,
        }
    },
    {   
        versionKey: false,
        timestamps: false,
    }
);

export default model('ToppingProduct', toppingProductSchema)