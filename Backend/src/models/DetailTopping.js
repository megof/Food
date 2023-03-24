import { Schema, model } from "mongoose";

const detailtoppingSchema = new Schema(
    {
        id_det_order: {
            type: Schema.Types.ObjectId,
            ref: 'DetailOrder',
            required: true,
            unique: true,
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

export default model('DetailTopping', detailtoppingSchema)