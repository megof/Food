// Description: This file contains the OrderDetail model
// Author: Sebastián Gámez Ariza


// Importing the mongoose library
import { Schema, model } from "mongoose";

// Creating the OrderDetail schema
const detailOrderSchema = new Schema(
    {
        idOrder:{
            type: Schema.Types.ObjectId,
            ref: 'Order',
            required: true
        },
        idProduct:{
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        cant: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

// Creating the OrderDetail model
const detailOrderModel = model('DetailOrder', detailOrderSchema);

// Exporting the User model
export default detailOrderModel;
