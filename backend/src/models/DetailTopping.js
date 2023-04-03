// Description: This file contains the detail - Topping model
// Author: Juan David Ospina Ortega

// Importing the mongoose library
import { Schema, model } from "mongoose";

// Creating the detail - Topping schema
const detailtoppingSchema = new Schema(
    {
        id_det_order: {
            type: Schema.Types.ObjectId,
            ref: 'DetailOrder',
            trim: true,
        },
        id_topping: {
            type: Schema.Types.ObjectId,
            ref: 'Topping',
            required: true,
            trim: true,
        },
        cant: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

// Exporting the detail - topping model
export default model('DetailTopping', detailtoppingSchema)