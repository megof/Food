import { Schema, model } from "mongoose";

const detailtoppingSchema = new Schema(
    {
        id_det_order: {
            type: Number,
            required: true,
            unique: true,
            trim: true,
        },
        id_topping: {
            type: Number,
            required: true,
            trim: true,
        },
        cant: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

export default model('DetailTopping', detailtoppingSchema)