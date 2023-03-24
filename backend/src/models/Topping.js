import { Schema, model } from "mongoose";

const toppingSchema = new Schema(
    {
        name: {
            type: String,
            required: true, 
            unique: true,
            trim: true
        }
    },
    {
        price: {
            type: Numbre,
            required: true, 
            trim: true
        }
    },
    {
        edo: {
            type: Boolean,
            required: true, 
            trim: true
        }
    },
    {   
        versionKey: false,
        timestamps: false,
    }
);

export default model('Topping', toppingSchema)