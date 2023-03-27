import { Schema, model } from "mongoose";

const toppingProductSchema = new Schema(
    {
        idProduct:{
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        idTopping:{
            type: Schema.Types.ObjectId,
            ref: 'Topping',
            required: true
        }
    }
);

export default model('ToppingProduct', toppingProductSchema)