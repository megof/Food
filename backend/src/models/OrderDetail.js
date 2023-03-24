// Description: This file contains the OrderDetail model
// Author: Sebastián Gámez Ariza


// Importing the mongoose library
import { Schema, model } from "mongoose";

// Creating the OrderDetail schema
const orderDetailSchema = new Schema(
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
        }
    }
);

// Creating the OrderDetail model
const OrderDetailModel = model('OrderDetail', orderDetailSchema);

// Exporting the User model
export default OrderDetailModel;